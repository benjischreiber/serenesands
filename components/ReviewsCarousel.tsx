"use client";

import { useState, useEffect, useCallback } from "react";
import type { Review } from "@/lib/reviews";

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5 mb-4">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className={`w-4 h-4 ${i < rating ? "text-sand-400" : "text-ocean-200"}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

interface Props {
  reviews: Review[];
  showProperty?: boolean;
}

export default function ReviewsCarousel({ reviews, showProperty = false }: Props) {
  const [current, setCurrent] = useState(0);
  const [fading, setFading] = useState(false);
  const [paused, setPaused] = useState(false);

  const goTo = useCallback(
    (index: number) => {
      if (index === current) return;
      setFading(true);
      setTimeout(() => {
        setCurrent(index);
        setFading(false);
      }, 300);
    },
    [current]
  );

  const next = useCallback(() => {
    goTo((current + 1) % reviews.length);
  }, [current, goTo, reviews.length]);

  useEffect(() => {
    if (paused) return;
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [paused, next]);

  const review = reviews[current];

  return (
    <div
      className="max-w-3xl mx-auto"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Card */}
      <div
        className="bg-white rounded-2xl px-8 py-10 shadow-sm border border-sand-200 transition-opacity duration-300"
        style={{ opacity: fading ? 0 : 1 }}
      >
        {/* Top row: stars + Airbnb logo */}
        <div className="flex items-start justify-between mb-1">
          <Stars rating={review.rating} />
          {/* Airbnb wordmark-ish: just the icon */}
          <svg
            className="w-6 h-6 text-[#FF5A5F] opacity-50 shrink-0 mt-0.5"
            viewBox="0 0 32 32"
            fill="currentColor"
            aria-label="Airbnb"
          >
            <path d="M16 2c-1.7 0-3.1.9-3.9 2.1L3.8 16.2c-1.1 1.7-1.4 3.4-.6 5 .8 1.7 2.4 2.8 4.2 2.8 1.3 0 2.4-.4 3.3-1.1.9-.7 1.6-1.6 2.2-2.7l1.8-3.8c.1-.3.3-.4.3-.4s.2.1.3.4l1.8 3.8c.5 1.1 1.3 2 2.2 2.7.9.7 2 1.1 3.3 1.1 1.8 0 3.4-1.1 4.2-2.8.8-1.6.5-3.3-.6-5L19.9 4.1C19.1 2.9 17.7 2 16 2zm0 2.2c1 0 1.9.6 2.5 1.4l8.3 12.1c.8 1.2 1 2.4.4 3.5-.6 1.1-1.7 1.8-2.9 1.8-.8 0-1.6-.3-2.3-.8-.6-.5-1.1-1.1-1.5-1.9l-1.8-3.8c-.5-1-1.3-1.7-2.7-1.7s-2.2.7-2.7 1.7l-1.8 3.8c-.4.8-.9 1.4-1.5 1.9-.7.5-1.5.8-2.3.8-1.2 0-2.3-.7-2.9-1.8-.6-1.1-.4-2.3.4-3.5L13.5 5.6c.6-.8 1.5-1.4 2.5-1.4z" />
          </svg>
        </div>

        {/* Review text */}
        <blockquote className="text-ocean-800 text-base md:text-lg leading-relaxed italic mb-6">
          &ldquo;{review.text}&rdquo;
        </blockquote>

        {/* Reviewer info */}
        <div className="flex items-center gap-3">
          {/* Avatar initial */}
          <div className="w-9 h-9 rounded-full bg-ocean-100 flex items-center justify-center shrink-0">
            <span className="text-ocean-700 font-semibold text-sm">
              {review.name[0]}
            </span>
          </div>
          <div>
            <p className="text-ocean-950 font-medium text-sm">{review.name}</p>
            <p className="text-ocean-400 text-xs">
              {review.date}
              {showProperty && (
                <span className="text-sand-500"> · {review.propertyName}</span>
              )}
              <span className="text-ocean-300"> · Airbnb</span>
            </p>
          </div>
        </div>
      </div>

      {/* Dot navigation */}
      <div className="flex justify-center gap-2 mt-6">
        {reviews.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Go to review ${i + 1}`}
            className={`rounded-full transition-all duration-300 ${
              i === current
                ? "w-6 h-2 bg-ocean-700"
                : "w-2 h-2 bg-ocean-200 hover:bg-ocean-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
