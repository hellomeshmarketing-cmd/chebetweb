import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight, ExternalLink, CheckCircle } from 'lucide-react';
import { FIRM_DETAILS, REVIEWS } from '../data/legalData';

export const ReviewsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevReview = () => {
    setCurrentIndex((prev) => (prev === 0 ? REVIEWS.length - 1 : prev - 1));
  };

  const nextReview = () => {
    setCurrentIndex((prev) => (prev === REVIEWS.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="reviews" className="py-20 sm:py-24 bg-white border-y border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with 4.4 Star Trust Lockup */}
        <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-8 mb-14">
          <div className="max-w-2xl">
            <p className="text-xs sm:text-sm font-semibold tracking-wider text-[#C9A24B] uppercase mb-2">
              Client Feedback & Reputation
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#0B1F3A] leading-tight mb-4">
              Client Reviews & Testimonials
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              Trust is earned through responsive communication, uncompromised integrity, and dedicated courtroom advocacy. Read genuine feedback from our clients across Kisii County.
            </p>
          </div>

          {/* Google Score Card */}
          <div className="p-6 rounded-[8px] bg-[#F7F5F0] border border-stone-200 flex items-center gap-6 shrink-0 w-full sm:w-auto">
            <div className="text-center sm:text-left">
              <div className="flex items-center gap-2 mb-1 justify-center sm:justify-start">
                <span className="text-3xl font-serif font-bold text-[#0B1F3A] tabular-nums">
                  {FIRM_DETAILS.googleRating}
                </span>
                <div className="flex text-[#C9A24B]">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < 4 ? 'fill-[#C9A24B]' : 'fill-[#C9A24B]/40 text-[#C9A24B]'
                      }`}
                    />
                  ))}
                </div>
              </div>
              <p className="text-xs text-slate-600 font-medium">
                Based on <strong className="text-slate-900">{FIRM_DETAILS.reviewCount} client reviews</strong> on Google
              </p>
            </div>

            <div className="h-10 w-px bg-stone-300 hidden sm:block" />

            <a
              href={FIRM_DETAILS.googleReviewsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0B1F3A] hover:text-[#C9A24B] underline underline-offset-4 whitespace-nowrap"
            >
              <span>Read on Google</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Carousel / Multi-card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {REVIEWS.map((review, idx) => (
            <div
              key={review.id}
              className={`p-6 rounded-[8px] border transition-all flex flex-col justify-between ${
                idx === currentIndex
                  ? 'bg-white border-[#C9A24B] shadow-md ring-1 ring-[#C9A24B]/30'
                  : 'bg-[#F7F5F0] border-stone-200 hover:border-stone-300'
              }`}
            >
              <div>
                {/* Stars and verified badge */}
                <div className="flex items-center justify-between mb-3">
                  <div className="flex text-[#C9A24B]">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-3.5 h-3.5 ${
                          i < review.rating ? 'fill-[#C9A24B]' : 'text-stone-300'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-[11px] text-slate-500">{review.date}</span>
                </div>

                {/* Review Text */}
                <p className="text-xs sm:text-sm text-slate-700 italic leading-relaxed mb-6">
                  &ldquo;{review.text}&rdquo;
                </p>
              </div>

              {/* Author & Verification */}
              <div className="pt-4 border-t border-stone-200/80 flex items-center justify-between">
                <div>
                  <h4 className="text-xs font-bold text-[#0B1F3A]">{review.author}</h4>
                  <div className="flex items-center gap-1 text-[10px] text-emerald-700">
                    <CheckCircle className="w-3 h-3" />
                    <span>Verified Client Review</span>
                  </div>
                </div>
                <span className="text-[10px] text-slate-400 font-mono">Google</span>
              </div>
            </div>
          ))}
        </div>

        {/* Carousel Navigation Buttons & Google Action */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-stone-100">
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={prevReview}
              className="p-2 rounded-lg border border-stone-300 hover:border-[#0B1F3A] text-slate-600 hover:text-[#0B1F3A] transition-colors focus:outline-none"
              aria-label="Previous review"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <span className="text-xs text-slate-500 font-mono tabular-nums">
              {currentIndex + 1} / {REVIEWS.length}
            </span>
            <button
              type="button"
              onClick={nextReview}
              className="p-2 rounded-lg border border-stone-300 hover:border-[#0B1F3A] text-slate-600 hover:text-[#0B1F3A] transition-colors focus:outline-none"
              aria-label="Next review"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-xs text-slate-500">
              Have you engaged Chebet & Mariita Advocates in a legal matter?
            </span>
            <a
              href={FIRM_DETAILS.googleReviewsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#0B1F3A] hover:bg-[#163259] text-white text-xs font-semibold px-4 py-2 rounded-lg transition-colors"
            >
              <span>Read Our Reviews on Google</span>
              <ExternalLink className="w-3.5 h-3.5 text-[#C9A24B]" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
