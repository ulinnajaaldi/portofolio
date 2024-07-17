"use client";

import { useState } from "react";
import Image, { StaticImageData } from "next/image";
import { cn } from "@/utils/tailwind-conf";

const BlurImage = ({
  src,
  alt,
  contain = false,
  top = false,
  customClass = "",
}: {
  src: string | StaticImageData;
  alt: string;
  contain?: boolean;
  top?: boolean;
  customClass?: string;
}) => {
  const [loaded, setLoaded] = useState(false);
  return (
    <Image
      src={src}
      height={1280}
      width={1280}
      onLoad={() => setLoaded(true)}
      className={cn(
        "absolute inset-0 h-full w-full rounded-lg transition duration-200",
        loaded ? "blur-none" : "blur-md",
        contain ? "object-contain" : "object-cover",
        top ? "object-top" : "object-bottom",
        customClass
      )}
      alt={alt}
    />
  );
};

export default BlurImage;
