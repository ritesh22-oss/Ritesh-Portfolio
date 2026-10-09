import { useState } from "react";
import { TESTIMONIALS } from "../constants";

const Testimonials = () => {
  const [viewMode, setViewMode] = useState("grid");
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex((prev) =>
      prev === 0 ? TESTIMONIALS.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setActiveIndex((prev) =>
      prev === TESTIMONIALS.length - 1 ? 0 : prev + 1
    );
  };

  const currentItem = TESTIMONIALS[activeIndex];

  return (
    <div className="py-16">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div>
          <h3 className="subhead-text">Testimonials</h3>
          <p className="mt-3 text-slate-600 max-w-2xl leading-relaxed">
            Client feedback and professional recommendations highlighting
            measurable engineering outcomes across web, mobile, and machine
            learning projects.
          </p>
        </div>

        {/* View switcher */}
        <div
          className="inline-flex items-center p-1 bg-slate-200/70 rounded-lg self-start sm:self-auto shrink-0"
          role="group"
          aria-label="Testimonials layout mode"
        >
          <button
            type="button"
            onClick={() => setViewMode("grid")}
            className={`px-3.5 py-1.5 text-xs font-medium rounded-md transition-all duration-150 whitespace-nowrap shrink-0 ${
              viewMode === "grid"
                ? "bg-white text-slate-900 shadow-sm"
                : "text-slate-600 hover:text-slate-900"
            }`}
          >
            Grid View
          </button>
          <button
            type="button"
            onClick={() => setViewMode("carousel")}
            className={`px-3.5 py-1.5 text-xs font-medium rounded-md transition-all duration-150 whitespace-nowrap shrink-0 ${
              viewMode === "carousel"
                ? "bg-white text-slate-900 shadow-sm"
                : "text-slate-600 hover:text-slate-900"
            }`}
          >
            Carousel View
          </button>
        </div>
      </div>

      {viewMode === "grid" ? (
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
          {TESTIMONIALS.map((item, idx) => (
            <article
              key={`testimonial_${item.name}_${idx}`}
              className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/90 shadow-sm hover:shadow-md transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-2 text-xs font-medium text-slate-500">
                  <span>{item.category}</span>
                  <span aria-hidden="true">·</span>
                  <span>{item.project}</span>
                </div>

                <blockquote className="mt-4 text-slate-700 text-sm sm:text-base leading-relaxed">
                  &ldquo;{item.quote}&rdquo;
                </blockquote>
              </div>

              <div className="mt-6 pt-5 border-t border-slate-100">
                <p className="text-xs font-medium text-blue-600 mb-3">
                  Outcome: {item.impact}
                </p>
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <h4 className="font-poppins font-semibold text-slate-900 text-base">
                      {item.name}
                    </h4>
                    <p className="text-xs text-slate-500 mt-0.5">
                      <span>{item.role}</span>
                      <span aria-hidden="true"> · </span>
                      <span>{item.organization}</span>
                    </p>
                  </div>
                  <div
                    className="w-10 h-10 rounded-full bg-gradient-to-r from-[#00c6ff] to-[#0072ff] text-white font-poppins font-semibold text-sm flex items-center justify-center shrink-0"
                    aria-hidden="true"
                  >
                    {item.name
                      .split(" ")
                      .map((n) => n[0])
                      .slice(0, 2)
                      .join("")}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      ) : (
        <div className="mt-10 bg-white rounded-2xl p-6 sm:p-10 border border-slate-200/90 shadow-sm transition-all duration-200">
          <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-medium text-slate-500">
            <div className="flex items-center gap-2">
              <span>{currentItem.category}</span>
              <span aria-hidden="true">·</span>
              <span>{currentItem.project}</span>
            </div>
            <span className="tabular-nums">
              {activeIndex + 1} / {TESTIMONIALS.length}
            </span>
          </div>

          <blockquote className="mt-6 text-slate-800 text-base sm:text-lg leading-relaxed">
            &ldquo;{currentItem.quote}&rdquo;
          </blockquote>

          <p className="mt-4 text-xs sm:text-sm font-medium text-blue-600">
            Outcome: {currentItem.impact}
          </p>

          <div className="mt-8 pt-6 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div
                className="w-12 h-12 rounded-full bg-gradient-to-r from-[#00c6ff] to-[#0072ff] text-white font-poppins font-semibold text-base flex items-center justify-center shrink-0"
                aria-hidden="true"
              >
                {currentItem.name
                  .split(" ")
                  .map((n) => n[0])
                  .slice(0, 2)
                  .join("")}
              </div>
              <div>
                <h4 className="font-poppins font-semibold text-slate-900 text-base sm:text-lg">
                  {currentItem.name}
                </h4>
                <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
                  <span>{currentItem.role}</span>
                  <span aria-hidden="true"> · </span>
                  <span>{currentItem.organization}</span>
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 self-end sm:self-auto">
              <button
                type="button"
                onClick={handlePrev}
                className="px-4 py-2 text-xs font-medium text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors whitespace-nowrap shrink-0"
                aria-label="Previous testimonial"
              >
                Previous
              </button>
              <button
                type="button"
                onClick={handleNext}
                className="px-4 py-2 text-xs font-medium text-white bg-gradient-to-r from-[#00c6ff] to-[#0072ff] hover:opacity-95 rounded-lg transition-opacity whitespace-nowrap shrink-0"
                aria-label="Next testimonial"
              >
                Next
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Testimonials;
