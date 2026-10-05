import React, { useState, useMemo } from 'react';
import { ArrowRight, Search, Check } from 'lucide-react';
import { PRACTICE_AREAS, CATEGORIES } from '../data/legalData';
import { PracticeCategory, PracticeArea } from '../types';
import { PracticeIcon } from './PracticeIcon';

interface PracticeAreasProps {
  onSelectPracticeArea: (areaTitle: string) => void;
}

export const PracticeAreas: React.FC<PracticeAreasProps> = ({ onSelectPracticeArea }) => {
  const [selectedCategory, setSelectedCategory] = useState<PracticeCategory>('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredAreas = useMemo(() => {
    return PRACTICE_AREAS.filter((area) => {
      const matchesCategory = selectedCategory === 'All' || area.category === selectedCategory;
      const matchesSearch =
        searchQuery.trim() === '' ||
        area.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        area.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        area.category.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <section id="practice-areas" className="py-20 sm:py-24 bg-[#F7F5F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <p className="text-xs sm:text-sm font-semibold tracking-wider text-[#C9A24B] uppercase mb-2">
            Legal Expertise & Practice
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#0B1F3A] leading-tight mb-4">
            Practice Areas
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            From land title battles in the Environment and Land Court to corporate litigation and family estate administration, our advocates provide specialized, court-tested representation.
          </p>
        </div>

        {/* Controls: Segmented Filter Tabs & Search */}
        <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4 mb-10 pb-6 border-b border-stone-200">
          {/* Filter Tabs (Interactive buttons) */}
          <div className="flex items-center overflow-x-auto no-scrollbar gap-1.5 p-1 bg-stone-200/70 rounded-xl">
            {CATEGORIES.map((cat) => {
              const count = cat === 'All'
                ? PRACTICE_AREAS.length
                : PRACTICE_AREAS.filter((p) => p.category === cat).length;
              const isActive = selectedCategory === cat;

              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3.5 py-2 text-xs sm:text-sm font-medium rounded-lg transition-all whitespace-nowrap flex items-center gap-1.5 focus:outline-none focus:ring-2 focus:ring-[#C9A24B] ${
                    isActive
                      ? 'bg-[#0B1F3A] text-white shadow-sm font-semibold'
                      : 'text-slate-700 hover:text-[#0B1F3A] hover:bg-stone-300/50'
                  }`}
                >
                  <span>{cat}</span>
                  <span className={`text-[11px] px-1.5 py-0.2 rounded-full ${isActive ? 'bg-[#C9A24B] text-[#0B1F3A] font-bold' : 'text-slate-500'}`}>
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Quick Search Input */}
          <div className="relative w-full lg:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search legal issue (e.g. land, will, bail)..."
              className="w-full pl-10 pr-4 py-2 text-xs sm:text-sm bg-white border border-stone-300 rounded-lg text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-[#C9A24B] focus:ring-1 focus:ring-[#C9A24B] transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Results Counter */}
        <div className="flex items-center justify-between text-xs text-slate-500 mb-6 px-1">
          <span>Showing {filteredAreas.length} of {PRACTICE_AREAS.length} practice areas</span>
          {selectedCategory !== 'All' && (
            <span className="text-slate-600 font-medium">Category: {selectedCategory}</span>
          )}
        </div>

        {/* 16 Practice Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredAreas.map((area: PracticeArea) => (
            <article
              key={area.id}
              className="bg-white rounded-[8px] p-6 border border-stone-200/80 shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_20px_rgba(11,31,58,0.08)] hover:border-[#C9A24B]/60 transition-all duration-200 flex flex-col justify-between group"
            >
              <div>
                {/* Header: Icon & Category */}
                <div className="flex items-start justify-between gap-3 mb-4">
                  <div className="w-11 h-11 rounded-lg bg-[#0B1F3A]/5 text-[#0B1F3A] flex items-center justify-center group-hover:bg-[#0B1F3A] group-hover:text-[#C9A24B] transition-colors shrink-0">
                    <PracticeIcon name={area.icon} className="w-5 h-5" />
                  </div>
                  <span className="text-[11px] font-medium text-slate-500 tracking-wide">
                    {area.category}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-lg font-serif font-bold text-[#0B1F3A] mb-2.5 leading-snug group-hover:text-[#0B1F3A]">
                  {area.title}
                </h3>

                {/* 2-Sentence Plain English Description */}
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                  {area.description}
                </p>
              </div>

              {/* Book a Consultation action link */}
              <div className="pt-4 border-t border-stone-100 flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => onSelectPracticeArea(area.title)}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0B1F3A] hover:text-[#C9A24B] transition-colors focus:outline-none"
                >
                  <span>Book a consultation</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </button>
                <span className="text-[11px] text-slate-400">Kisii Chambers</span>
              </div>
            </article>
          ))}
        </div>

        {filteredAreas.length === 0 && (
          <div className="bg-white rounded-lg p-12 text-center border border-stone-200">
            <p className="text-base font-medium text-slate-700 mb-2">No matching practice areas found.</p>
            <p className="text-sm text-slate-500 mb-4">Try searching for broader terms like &quot;land&quot;, &quot;court&quot;, &quot;business&quot;, or reset your filters.</p>
            <button
              onClick={() => {
                setSelectedCategory('All');
                setSearchQuery('');
              }}
              className="text-xs font-semibold text-[#0B1F3A] underline underline-offset-4"
            >
              Reset all filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
