"use client";
import dynamic from "next/dynamic";
import type { FC } from "react";
import { tw } from "~/utils/tw";

const ThemeToggleCore = dynamic(
  () => import("./theme-toggle-core").then((module) => module.ThemeToggleCore),
  { ssr: false },
);

type Props = {
  className?: string;
};

export const ThemeToggle: FC<Props> = ({ className }) => (
  <div className={tw("size-12.5", className)}>
    <ThemeToggleCore />
  </div>
);
