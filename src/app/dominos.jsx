"use client";
import dynamic from "next/dynamic";
import { Suspense } from "react";

const Spline = dynamic(() => import("@splinetool/react-spline"));

export default function Dominos() {
  return (
    <div className="hidden h-[600px] w-[825px] lg:block xl:w-[1080px]">
      <Spline scene="https://prod.spline.design/BJjm9TZpZw1fn-BD/scene.splinecode" />
    </div>
  );
}
