import React from 'react';
import { Gem, ShieldCheck, Star, Users } from 'lucide-react';
import { CLINIC_INFO } from '../data/dentalData';

export const StatsBar: React.FC = () => {
  return (
    <section id="stats-bar-section" className="bg-[#F2EEF7] border-y border-purple-100/90 py-8 sm:py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 sm:gap-5">
          <div
            id="stat-item-rating"
            className="flex items-center justify-center gap-3 min-h-[160px] bg-[#F8F2FB] border border-[#E8DDF3] rounded-[28px] p-5 shadow-[0_10px_24px_rgba(109,40,217,0.04)]"
          >
            <div className="flex items-center justify-center leading-none">
              <span className="text-5xl sm:text-[52px] font-extrabold text-[#1E1035] tracking-tight">{CLINIC_INFO.rating}</span>
              <Star className="w-7 h-7 sm:w-8 sm:h-8 fill-[#F59E0B] text-[#F59E0B] shrink-0 ml-1" />
            </div>
            <div className="flex flex-col items-start leading-tight">
              <span className="text-[14px] sm:text-[16px] text-[#1E1035] font-bold">Google Rating</span>
              <span className="text-[13px] sm:text-[14px] text-[#475569] mt-1">Loved by our patients</span>
            </div>
          </div>

          <div className="flex items-center gap-4 min-h-[160px] bg-[#F8F2FB] border border-[#E8DDF3] rounded-[28px] p-5 shadow-[0_10px_24px_rgba(109,40,217,0.04)]">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#F0E7FA] text-[#4A0E78] shrink-0">
              <ShieldCheck className="h-8 w-8" />
            </div>
            <div className="leading-tight">
              <div className="text-[20px] sm:text-[22px] font-extrabold text-[#1E1035]">Trusted Care</div>
              <div className="text-[13px] sm:text-[14px] text-[#475569] mt-1">Safe, hygienic &amp; comfortable<br />environment</div>
            </div>
          </div>

          <div className="flex items-center gap-4 min-h-[160px] bg-[#F8F2FB] border border-[#E8DDF3] rounded-[28px] p-5 shadow-[0_10px_24px_rgba(109,40,217,0.04)]">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#F0E7FA] text-[#4A0E78] shrink-0">
              <Gem className="h-8 w-8" />
            </div>
            <div className="leading-tight">
              <div className="text-[20px] sm:text-[22px] font-extrabold text-[#1E1035]">Professional</div>
              <div className="text-[13px] sm:text-[14px] text-[#475569] mt-1">Evidence-based<br />Dental Care</div>
            </div>
          </div>

          <div className="flex items-center gap-4 min-h-[160px] bg-[#F8F2FB] border border-[#E8DDF3] rounded-[28px] p-5 shadow-[0_10px_24px_rgba(109,40,217,0.04)]">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#F0E7FA] text-[#4A0E78] shrink-0">
              <Users className="h-8 w-8" />
            </div>
            <div className="leading-tight">
              <div className="text-[20px] sm:text-[22px] font-extrabold text-[#1E1035]">Patient-focused</div>
              <div className="text-[13px] sm:text-[14px] text-[#475569] mt-1">Your comfort and smile<br />always come first</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
