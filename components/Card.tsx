import Image from "next/image";
import HOUSE_IMAGE from "@/public/assets/images/house.png";
import STAR_IMAGE from "@/public/assets/images/star.png";
import React from "react";
import Pill from "./Pill";

const Card: React.FC = () => {
  return (
    <article className="max-w-md rounded-3xl border border-slate-100 bg-white p-6 shadow-lg transition duration-300 ease-out hover:-translate-y-1 hover:shadow-2xl">
      <div className="relative overflow-hidden rounded-2xl">
        <Image
          className="h-56 w-full object-cover"
          src={HOUSE_IMAGE}
          alt="Villa Arrecife Beach House"
          width={640}
          height={360}
          priority
        />
        <div className="absolute right-4 top-4 flex items-center gap-1 rounded-full bg-white/90 px-3 py-1 text-sm font-semibold text-slate-900 shadow">
          <Image src={STAR_IMAGE} alt="Rating star" width={16} height={16} />
          <span>4.76</span>
        </div>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        <Pill title="Top Villa" />
        <Pill title="Self CheckIn" />
        <Pill title="Free Reschedule" />
      </div>

      <div className="mt-5 space-y-2">
        <h3 className="text-2xl font-semibold text-slate-900">Villa Arrecife Beach House</h3>
        <p className="text-sm font-medium text-slate-500">Sideman, Bali, Indonesia</p>
      </div>

      <div className="mt-6 flex items-center justify-between rounded-2xl bg-slate-50 px-4 py-3">
        <div className="flex flex-col gap-2 text-xs font-medium text-slate-600 sm:flex-row sm:items-center sm:gap-4">
          <div className="flex items-center gap-1">
            <svg className="h-5 w-5 text-slate-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
              <path d="M3 11h18" />
              <path d="M5 7h14a2 2 0 0 1 2 2v8H3V9a2 2 0 0 1 2-2Z" />
              <path d="M7 15v2" />
              <path d="M17 15v2" />
            </svg>
            <span>4 Guests</span>
          </div>
          <div className="flex items-center gap-1">
            <svg className="h-5 w-5 text-slate-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 10h16" />
              <path d="M2 19h20" />
              <path d="M7 19V10a5 5 0 0 1 10 0v9" />
            </svg>
            <span>2 Bedrooms</span>
          </div>
          <div className="flex items-center gap-1">
            <svg className="h-5 w-5 text-slate-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 5h16" />
              <path d="M4 19h16" />
              <path d="M5 5v14" />
              <path d="M12 5v14" />
              <path d="M19 5v14" />
            </svg>
            <span>Pool Access</span>
          </div>
        </div>
        <p className="text-right text-2xl font-semibold text-slate-900">
          $2,450
          <span className="ml-1 text-sm font-normal text-slate-500">/night</span>
        </p>
      </div>
    </article>
  );
};

export default Card;
