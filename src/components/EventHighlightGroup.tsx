import React, { useEffect, useRef, useState } from "react";
import { urlFor } from "~/lib/sanityImageUrl";

// Types for event data
interface Event {
  title: string;
  dateTime: string;
  location: string;
  descriptionPlain?: string;
  flyer?: string;
  link?: string;
}

interface EventHighlightGroupProps {
  events: Event[];
}

const formatDateTime = (dateTime: string) => {
  const dateObj = new Date(dateTime);
  return dateObj.toLocaleString("en-US", {
    dateStyle: "medium",
    timeStyle: "short",
  });
};

export default function EventHighlightGroup({
  events,
}: EventHighlightGroupProps) {
  // Ensure we have up to 4 events: 1 main, 3 side
  const [main, ...sideEvents] = events;

  return (
    <div className="flex flex-col md:flex-row gap-8 w-full items-stretch">
      {/* Main Event Card - much larger and taller */}
      {main && (
        <a
          className="group flex-[1.2] relative rounded-3xl overflow-hidden shadow-2xl bg-white dark:bg-gray-900 text-ieee-blue dark:text-white p-16 flex flex-col justify-center items-center"
          style={{
            maxWidth: "700px",
          }}
          href={main.link || "/events"}
        >
          <div className="relative flex flex-col items-center w-full h-full">
            <h2 className="text-5xl md:text-7xl font-extrabold mb-8 drop-shadow-lg animate-glow text-center">
              {main.title}
            </h2>
            <div className="text-2xl font-semibold mb-6">
              {formatDateTime(main.dateTime)}
            </div>
            <div className="mb-6 text-xl font-medium">{main.location}</div>
            {main.flyer && (
              <img
                src={urlFor(main.flyer).url()}
                alt={`Flyer for ${main.title}`}
                className="w-full rounded-xl shadow-lg mb-8 border-4 border-white/30"
                loading="lazy"
              />
            )}
            <p className="text-2xl md:text-3xl mb-6 text-center">
              {main.descriptionPlain}
            </p>
            <span className="inline-block mt-8 px-10 py-4 rounded-full bg-ieee-blue text-white font-bold shadow-lg group-hover:bg-ieee-orange transition text-2xl">
              View Details
            </span>
          </div>
        </a>
      )}

      {/* Secondary Events - stacked vertically to the right, smaller */}
      <div className="flex flex-col gap-8 flex-[0.7] justify-center">
        {sideEvents.map((event, idx) => {
          if (!event) return null;
          return (
            <a
              key={event.title + event.dateTime}
              href={event.link || "/events"}
              className="group relative rounded-2xl overflow-hidden shadow-xl bg-white dark:bg-gray-800 text-ieee-blue p-8 flex-1 flex flex-col justify-center items-center"
            >
              <div className="relative z-10 flex flex-col items-center w-full h-full">
                <h3 className="text-2xl md:text-3xl font-bold mb-4 drop-shadow animate-glowSecondary text-center">
                  {event.title}
                </h3>
                <div className="text-lg font-semibold mb-2">
                  {formatDateTime(event.dateTime)}
                </div>
                <div className="mb-2 text-base font-medium">
                  {event.location}
                </div>
                <p className="text-base text-ieee-blue/80 mb-4 text-center">
                  {event.descriptionPlain}
                </p>
                <span className="inline-block mt-2 px-6 py-2 rounded-full bg-ieee-blue text-white font-bold shadow group-hover:bg-ieee-orange transition text-lg">
                  View Details
                </span>
              </div>
            </a>
          );
        })}
      </div>

      {/* Animations & Effects */}
      <style jsx>{`
        @keyframes glow {
          0%,
          100% {
            text-shadow:
              0 0 12px #fff,
              0 0 24px #ff7a00,
              0 0 32px #0077ff;
          }
          50% {
            text-shadow:
              0 0 24px #fff,
              0 0 32px #ff7a00,
              0 0 40px #0077ff;
          }
        }
        .animate-glow {
          animation: glow 2.5s ease-in-out infinite;
        }
        @keyframes glowSecondary {
          0%,
          100% {
            text-shadow:
              0 0 8px #fff,
              0 0 16px #0077ff;
          }
          50% {
            text-shadow:
              0 0 16px #fff,
              0 0 24px #ff7a00;
          }
        }
        .animate-glowSecondary {
          animation: glowSecondary 2.5s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
