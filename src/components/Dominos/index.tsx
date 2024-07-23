"use client";

import { lazy, Suspense, useState, FC } from "react";
const Spline = lazy(() => import("@splinetool/react-spline"));
import { LoadingSpinner } from "@/components";

const Dominos: FC = () => {
  const [loading, setLoading] = useState(true);

  return (
    <Suspense
      fallback={
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <LoadingSpinner />
        </div>
      }
    >
      <Spline
        onLoad={() => setLoading(false)}
        scene="https://prod.spline.design/BJjm9TZpZw1fn-BD/scene.splinecode"
      />
      {loading && (
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <LoadingSpinner />
        </div>
      )}
    </Suspense>
  );
};

export default Dominos;
