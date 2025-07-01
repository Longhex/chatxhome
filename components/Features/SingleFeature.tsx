import React from "react";
import { Feature } from "@/types/feature";

const SingleFeature = ({ feature }: { feature: Feature }) => {
  const { icon, title, link, description } = feature;

  const handleClick = () => {
    if (link) {
      window.open(link, "_blank"); // Open the link in a new tab
    }
  };

  return (
    <div className="rounded-[20px] border bg-white text-card-foreground shadow-sm overflow-hidden cursor-pointer transition-all duration-200 hover:shadow-lg">
      <div className="rounded-none p-4">
        <div className="flex items-start justify-between gap-2 mb-2">
          <h3 className="font-semibold text-lg truncate">{title}</h3>
          <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80 text-xs">
            Agent
          </div>
        </div>
        <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
          ChatX Official
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-circle-check-big w-4 h-4 text-primary"
          >
            <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
            <path d="m9 11 3 3L22 4"></path>
          </svg>
        </div>
        <p className="text-sm text-gray-600 mb-4 line-clamp-2">{description}</p>
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-500">Miễn phí</span>
          <span className="text-sm text-gray-500">1200 bản sao</span>
        </div>
        <button
          onClick={handleClick}
          className="group relative inline-flex h-11 cursor-pointer items-center justify-center rounded-[10px] border-0 bg-black px-8 py-2 font-medium text-white transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 w-full mt-4"
        >
          Chat thử
        </button>
      </div>
    </div>
  );
};

export default SingleFeature;