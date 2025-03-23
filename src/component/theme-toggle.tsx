"use client";
import { IconMoon } from "@/component/svg/icon-moon";
import { IconSun } from "@/component/svg/icon-sun";
import { cn } from "@/util/cn";
import * as Toggle from "@radix-ui/react-toggle";
import { useThemeContext } from "next-theme-provider";
import { memo } from "react";

type Props = {
  className?: string;
};

export const ThemeToggle = memo(({ className }: Props) => {
  const { toggleTheme, isDark } = useThemeContext();

  return (
    <div className={className}>
      <Toggle.Root
        className={cn(
          "grid size-12.5 cursor-pointer place-items-center rounded-12",
          "tw_focus_ring bg-neutral-100 transition-colors hover:bg-neutral-300",
          "dark:bg-neutral-700 dark:hover:bg-neutral-600",
        )}
        onPressedChange={toggleTheme}
        aria-label="Dark theme"
        title={
          isDark === null
            ? undefined
            : `Activate ${isDark ? "light" : "dark"} theme`
        }
      >
        <IconMoon />
        <IconSun />
      </Toggle.Root>
    </div>
  );
});

ThemeToggle.displayName = "ThemeToggle";
