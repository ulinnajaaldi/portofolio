"use client";
import dynamic from "next/dynamic";
import { Suspense } from "react";

const Spline = dynamic(() => import("@splinetool/react-spline"));

export default function Dominos() {
  return (
    <Spline scene="https://prod.spline.design/BJjm9TZpZw1fn-BD/scene.splinecode" />
  );
}
