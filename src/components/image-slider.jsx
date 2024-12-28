"use client";

import React, { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useSwipeable } from "react-swipeable";
import camera from "../assets/camera.png";
import camera2 from "../assets/camera2.png";
import camera5 from "../assets/camera5.png";

const slides = [
  {
    bg: "bg-[#1F4D4D]",
    image: camera,
    alt: "Preserve",
    subtext: "Stories",
    rotate: "rotate-90 translate-y-[20rem]",
  },
  {
    bg: "bg-[#45475a]",
    image: camera,
    alt: "Frame",
    subtext: "Memories",
    rotate: "rotate-180  translate-y-[10rem]",
  },
  {
    bg: "bg-[#455a58]",
    image: camera,
    alt: "Document",
    subtext: "Wonders",
    rotate: "rotate-0  translate-y-[10rem]",
  },
  {
    bg: "bg-[#5a4556]",
    image: camera5,
    alt: "Capture",
    subtext: "Moments",
    subline: "Welcome to my Portfolio",
    rotate: "rotate-0 translate-y-[20rem]",
  },
];

export default function ImageSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const changeSlide = useCallback(
    (direction) => {
      if (isTransitioning) return;

      setIsTransitioning(true);
      setCurrentSlide((prev) => {
        if (direction === "next") {
          return (prev + 1) % slides.length;
        } else {
          return (prev - 1 + slides.length) % slides.length;
        }
      });

      setTimeout(() => setIsTransitioning(false), 500); // Match this with your transition duration
    },
    [isTransitioning],
  );

  const nextSlide = useCallback(() => changeSlide("next"), [changeSlide]);
  const prevSlide = useCallback(() => changeSlide("prev"), [changeSlide]);

  const handlers = useSwipeable({
    onSwipedUp: nextSlide,
    onSwipedDown: prevSlide,
    onSwipedLeft: prevSlide,
    onSwipedRight: nextSlide,
    preventDefaultTouchmoveEvent: true,
    trackMouse: true
  });

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "ArrowRight") {
        nextSlide();
      } else if (event.key === "ArrowLeft") {
        prevSlide();
      } else if (event.key === "ArrowUp") {
        prevSlide();
      } else if (event.key === "ArrowDown") {
        nextSlide();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [nextSlide, prevSlide]);

  return (
    <div
      {...handlers}
      className={`relative min-h-screen flex w-full ${slides[currentSlide].bg} flex-col justify-between px-4 py-20`}
    >
      <div className="top-0 text-center z-30 mt-16 md:mt-16">
        <h1 className="flex flex-col items-center justify-center">
          <span className="z-30 text-xl md:text-3xl lg:text-4xl  text-[#1b1b1e] livvic-medium tracking-wide mb-1">
            {slides[currentSlide].alt}
          </span>
          <span className={`z-30 font-serif text-4xl md:text-6xl lg:text-8xl  text-[#F1D8C0] leading-none   transition-all duration-300 ease-in-out  ${isTransitioning ? "opacity-80 scale-95" : "opacity-100 scale-100"}`}>
            {slides[currentSlide].subtext}
          </span>
          <span className="z-30 hidden md:flex text-xl md:text-3xl lg:text-4xl  text-[#F1D8C044] mt-5 tracking-wide">
            {slides[currentSlide].subline}
          </span>
        </h1>
      </div>
      <div className="absolute z-20 bottom-0 w-full flex items-center justify-center mx-auto">
        <div className="flex gap-[2rem] pt-10 flex-col">
          <div className="flex items-center justify-center gap-[5rem] mx-auto">
            <button
              onClick={prevSlide}
              className="text-[#1F4D4D] rounded-[50%] mt-[20rem] bg-[#FBFBFB] hover:text-black transition-colors duration-200 hover:scale-110 flex items-center"
              aria-label="Previous slide"
            >
              <ChevronLeft size={32} strokeWidth={1} />
            </button>
            <div className="max-w-3xl w-[50rem] h-[50rem] flex items-center justify-center overflow-hidden">
              <img
                src={slides[currentSlide].image}
                alt={slides[currentSlide].alt}
                className={`object-contain w-full z-20 h-full transition-all duration-500 ease-in-out ${
                  slides[currentSlide].rotate
                } ${isTransitioning ? "opacity-80 scale-95" : "opacity-100 scale-100"}`}
              />
            </div>
            <button
              onClick={nextSlide}
              className="text-[#1F4D4D] rounded-[50%] mt-[20rem] bg-[#FBFBFB] hover:text-black transition-colors duration-200 hover:scale-110 flex items-center"
              aria-label="Next slide"
            >
              <ChevronRight size={32} strokeWidth={1} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

