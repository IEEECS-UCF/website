// src/components/EventHighlight.tsx
import { motion } from "framer-motion";

export interface EventHighlightProps {
  event: {
    title: string;
    dateTime: string;
    location: string;
    descriptionPlain: string;
  } | null;
}

export default function EventHighlight({ event }: EventHighlightProps) {
  if (!event) return null;
  return (
    <div className="event-highlight-card bg-white dark:bg-gray-900 rounded-xl shadow-lg p-6 mx-auto max-w-xl flex flex-col items-center animate-slideIn">
      <h2 className="text-2xl font-bold text-ieee-orange mb-2">Next Event</h2>
      <div className="text-center mb-2">
        <span className="font-semibold text-ieee-blue">{event.title}</span>
        <div className="text-gray-600 dark:text-gray-300">
          {new Date(event.dateTime).toLocaleString("en-US", {
            dateStyle: "medium",
            timeStyle: "short",
          })}
        </div>
        <div className="mt-1">{event.location}</div>
      </div>
      <p className="text-gray-700 dark:text-gray-300 mb-2">
        {event.descriptionPlain}
      </p>
      <a
        href="/events"
        className="mt-2 px-5 py-2 rounded bg-ieee-orange text-white font-semibold hover:bg-orange-600 transition"
      >
        View All Events
      </a>
    </div>
  );
}
