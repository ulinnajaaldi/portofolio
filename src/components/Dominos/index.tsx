"use client";

import { type FC, useState } from "react";
import Spline from "@splinetool/react-spline";
import { LoadingSpinner } from "@/components";

const Dominos: FC = () => {
  const [loading, setLoading] = useState(true);

  return (
    <>
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
    </>
  );
};

export default Dominos;
