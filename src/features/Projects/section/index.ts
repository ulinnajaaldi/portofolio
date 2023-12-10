import dynamic from "next/dynamic";

export const ProjectListProjectSection = dynamic(
  () => import("./ListProjectSection")
);
export const ProjectGetInTouchSection = dynamic(
  () => import("./GetInTouchSection")
);
