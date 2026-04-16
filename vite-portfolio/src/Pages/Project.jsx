import { useEffect, useMemo, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { projectsData } from "../data/dummyData";
import "./Project.css";

function Project() {
  const { id } = useParams();
  const project = projectsData.find((p) => p.id === parseInt(id));
  const getYouTubeEmbedUrl = (url) => {
    if (!url) {
      return "";
    }

    if (url.includes("youtube.com/embed/")) {
      return url;
    }

    if (url.includes("youtu.be/")) {
      const videoId = url.split("youtu.be/")[1]?.split("?")[0];
      return videoId ? `https://www.youtube.com/embed/${videoId}` : "";
    }

    if (url.includes("youtube.com/watch")) {
      const params = new URL(url).searchParams;
      const videoId = params.get("v");
      return videoId ? `https://www.youtube.com/embed/${videoId}` : "";
    }

    return "";
  };

  const embedVideoUrl = useMemo(
    () => getYouTubeEmbedUrl(project?.videoUrl),
    [project],
  );
  const sliderItems = useMemo(() => {
    if (!project) {
      return [];
    }

    const images =
      project.gallery && project.gallery.length > 0
        ? project.gallery
        : [project.image];

    const items = images.map((imageSrc) => ({ type: "image", src: imageSrc }));

    if (embedVideoUrl) {
      items.push({ type: "video", src: embedVideoUrl });
    }

    return items;
  }, [project, embedVideoUrl]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isFullscreenOpen, setIsFullscreenOpen] = useState(false);
  const activeSlide = sliderItems[activeIndex];

  useEffect(() => {
    setActiveIndex(0);
    setIsFullscreenOpen(false);
  }, [id]);

  useEffect(() => {
    const handleEscKey = (event) => {
      if (event.key === "Escape") {
        setIsFullscreenOpen(false);
      }
    };

    window.addEventListener("keydown", handleEscKey);
    return () => window.removeEventListener("keydown", handleEscKey);
  }, []);

  const goToPrevious = () => {
    setActiveIndex((currentIndex) =>
      currentIndex === 0 ? sliderItems.length - 1 : currentIndex - 1,
    );
  };

  const goToNext = () => {
    setActiveIndex((currentIndex) =>
      currentIndex === sliderItems.length - 1 ? 0 : currentIndex + 1,
    );
  };

  if (!project) {
    return (
      <div className="project-page">
        <Link to="/" className="back-button">
          ← Back to Portfolio
        </Link>
        <h1>Project not found</h1>
      </div>
    );
  }

  return (
    <div className="project-page">
      <h1>{project.title}</h1>
      <div
        className="project-slider"
        aria-label={`${project.title} media slider`}
      >
        {activeSlide?.type === "video" ? (
          <iframe
            src={activeSlide.src}
            title={`${project.title} video`}
            className="project-main-image project-main-video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        ) : (
          <img
            src={activeSlide?.src}
            alt={`${project.title} preview ${activeIndex + 1}`}
            className="project-main-image"
            onClick={() => setIsFullscreenOpen(true)}
          />
        )}
        <button
          type="button"
          className="slider-fullscreen-btn"
          onClick={() => setIsFullscreenOpen(true)}
          aria-label={
            activeSlide?.type === "video"
              ? "Open full screen video player"
              : "Open full picture mode"
          }
        >
          {activeSlide?.type === "video" ? "Full screen" : "Full picture"}
        </button>
        {sliderItems.length > 1 && (
          <>
            <button
              type="button"
              className="slider-nav slider-nav-prev"
              onClick={goToPrevious}
              aria-label="Previous slide"
            >
              <span aria-hidden="true">&lt;</span>
            </button>
            <button
              type="button"
              className="slider-nav slider-nav-next"
              onClick={goToNext}
              aria-label="Next slide"
            >
              <span aria-hidden="true">&gt;</span>
            </button>
          </>
        )}
      </div>
      {sliderItems.length > 1 && (
        <div className="slider-dots" aria-label="Media navigation dots">
          {sliderItems.map((slide, index) => (
            <button
              key={`${project.id}-dot-${index}`}
              type="button"
              className={`slider-dot ${index === activeIndex ? "active" : ""}`}
              onClick={() => setActiveIndex(index)}
              aria-label={`Go to ${slide.type} ${index + 1}`}
              aria-pressed={index === activeIndex}
            />
          ))}
        </div>
      )}
      {isFullscreenOpen && activeSlide && (
        <div
          className="slider-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={
            activeSlide.type === "video"
              ? "Full screen video player"
              : "Full picture mode"
          }
          onClick={() => setIsFullscreenOpen(false)}
        >
          <button
            type="button"
            className="lightbox-close"
            onClick={() => setIsFullscreenOpen(false)}
            aria-label="Close full picture mode"
          >
            x
          </button>
          {sliderItems.length > 1 && (
            <>
              <button
                type="button"
                className="slider-nav slider-nav-prev lightbox-nav"
                onClick={(event) => {
                  event.stopPropagation();
                  goToPrevious();
                }}
                aria-label="Previous slide"
              >
                <span aria-hidden="true">&lt;</span>
              </button>
              <button
                type="button"
                className="slider-nav slider-nav-next lightbox-nav"
                onClick={(event) => {
                  event.stopPropagation();
                  goToNext();
                }}
                aria-label="Next slide"
              >
                <span aria-hidden="true">&gt;</span>
              </button>
            </>
          )}
          {activeSlide.type === "video" ? (
            <iframe
              src={activeSlide.src}
              title={`${project.title} fullscreen video`}
              className="lightbox-image lightbox-video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              onClick={(event) => event.stopPropagation()}
            />
          ) : (
            <img
              src={activeSlide.src}
              alt={`${project.title} full preview ${activeIndex + 1}`}
              className="lightbox-image"
              onClick={(event) => event.stopPropagation()}
            />
          )}
        </div>
      )}
      <p className="project-category">{project.category}</p>
      <p className="project-description">{project.description}</p>
      <div className="project-tags">
        {project.tags.map((tag, index) => (
          <span key={index} className="tag">
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}

export default Project;
