import "./Skills.css";
import { skillsData } from "../data/dummyData";
import { useEffect, useRef, useState } from "react";

export default function Skills() {
  const trackRef = useRef(null);
  const loopWidthRef = useRef(0);
  const offsetRef = useRef(0);
  const frameRef = useRef(null);
  const lastTimeRef = useRef(null);
  const isDraggingRef = useRef(false);
  const dragMovedRef = useRef(false);
  const pointerStartXRef = useRef(0);
  const dragStartOffsetRef = useRef(0);
  const pausedRef = useRef(false);
  const [isPaused, setIsPaused] = useState(false);
  const [isDragging, setIsDragging] = useState(false);

  const SCROLL_SPEED = 55;
  const DRAG_THRESHOLD = 4;

  const normalizeOffset = (value) => {
    const loopWidth = loopWidthRef.current;
    if (!loopWidth) {
      return value;
    }

    let nextValue = value;
    while (nextValue <= -loopWidth) {
      nextValue += loopWidth;
    }
    while (nextValue > 0) {
      nextValue -= loopWidth;
    }
    return nextValue;
  };

  const applyTransform = () => {
    if (!trackRef.current) {
      return;
    }
    trackRef.current.style.transform = `translate3d(${offsetRef.current}px, 0, 0)`;
  };

  const updateLoopWidth = () => {
    if (!trackRef.current) {
      return;
    }

    loopWidthRef.current = trackRef.current.scrollWidth / 2;
    offsetRef.current = normalizeOffset(offsetRef.current);
    applyTransform();
  };

  useEffect(() => {
    pausedRef.current = isPaused;
  }, [isPaused]);

  useEffect(() => {
    updateLoopWidth();

    const step = (time) => {
      if (lastTimeRef.current == null) {
        lastTimeRef.current = time;
      }

      const deltaSeconds = (time - lastTimeRef.current) / 1000;
      lastTimeRef.current = time;

      if (!pausedRef.current && !isDraggingRef.current) {
        offsetRef.current = normalizeOffset(
          offsetRef.current - SCROLL_SPEED * deltaSeconds,
        );
      }

      applyTransform();
      frameRef.current = requestAnimationFrame(step);
    };

    frameRef.current = requestAnimationFrame(step);
    window.addEventListener("resize", updateLoopWidth);

    return () => {
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }
      window.removeEventListener("resize", updateLoopWidth);
    };
  }, []);

  const handlePointerDown = (event) => {
    isDraggingRef.current = true;
    dragMovedRef.current = false;
    pointerStartXRef.current = event.clientX;
    dragStartOffsetRef.current = offsetRef.current;
    setIsDragging(true);
    event.currentTarget.setPointerCapture(event.pointerId);
  };

  const handlePointerMove = (event) => {
    if (!isDraggingRef.current) {
      return;
    }

    const deltaX = event.clientX - pointerStartXRef.current;
    if (Math.abs(deltaX) > DRAG_THRESHOLD) {
      dragMovedRef.current = true;
    }

    offsetRef.current = normalizeOffset(dragStartOffsetRef.current + deltaX);
    applyTransform();
  };

  const handlePointerEnd = (event) => {
    if (!isDraggingRef.current) {
      return;
    }

    isDraggingRef.current = false;
    setIsDragging(false);
    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }
  };

  const handleTogglePause = () => {
    if (dragMovedRef.current) {
      dragMovedRef.current = false;
      return;
    }

    setIsPaused((prev) => !prev);
  };

  const services = [
    {
      title: "Web Developer",
      description:
        "I design websites and landing pages that perform. Intuitive layouts, clear hierarchy, built to convert. I can prototype and build directly in modern no-code tools when speed matters.",
    },
    {
      title: "UI/UX Design",
      description:
        "I build brand identities designed to last. Logo, typography, and systems that guide your team so everything stays consistent and clear.",
    },
    {
      title: "3D Design & Motion",
      description:
        "I concept and run integrated campaigns that drive awareness and growth. Product launches or always-on work, I keep strategy and execution aligned from start to ship.",
    },
    {
      title: "Data Analytics",
      description:
        "I analyze data to uncover insights and drive informed decisions. From data visualization to statistical analysis, I help turn raw data into actionable strategies.",
    },
  ];
  const allSkills = [
    ...skillsData.design,
    ...skillsData.development,
    ...skillsData.tools,
  ];
  const marqueeSkills = [...allSkills, ...allSkills];

  return (
    <section className="skills-section" id="skills">
      <h2 className="skills-title">Skills & Expertise</h2>
      <div className="skills-service-list">
        {services.map((service) => (
          <div key={service.title} className="skills-service-row">
            <h3 className="skills-service-title">{service.title}</h3>
            <p className="skills-service-text">{service.description}</p>
          </div>
        ))}
      </div>
      <div
        className={`skills-marquee${isDragging ? " is-dragging" : ""}`}
        aria-label="Skills marquee"
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerEnd}
        onPointerCancel={handlePointerEnd}
        onClick={handleTogglePause}
      >
        <div
          className={`skills-marquee-track${isPaused ? " is-paused" : ""}`}
          ref={trackRef}
        >
          {marqueeSkills.map((skill, index) => (
            <div key={`${skill}-${index}`} className="skill-bubble">
              <span className="skill-bubble-text">{skill}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
