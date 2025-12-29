"use client";
import { useTheme } from "next-themes";
import { Toggle } from "radix-ui";
import type { FC } from "react";
import { IconMoon } from "~/components/svg/icon-moon";
import { IconSun } from "~/components/svg/icon-sun";
import { tw } from "~/utils/tw";

type Props = {
  className?: string;
};

export const ThemeToggleCore: FC<Props> = ({ className }) => {
  const { resolvedTheme, setTheme } = useTheme();

  if (resolvedTheme !== "light" && resolvedTheme !== "dark") {
    console.error("Unexpected theme value:", { resolvedTheme });
    return null;
  }

  const isDark = resolvedTheme === "dark";

  return (
    <Toggle.Root
      aria-label="Dark theme"
      className={tw(
        "grid size-full place-items-center rounded-12",
        "bg-neutral-100 transition-colors hover:bg-neutral-300",
        "dark:bg-neutral-700 dark:hover:bg-neutral-600",
        className,
      )}
      pressed={isDark}
      onPressedChange={(pressed) => {
        setTheme(pressed ? "dark" : "light");
      }}
      title={`Activate ${isDark ? "light" : "dark"} theme`}
    >
      {[IconSun, IconMoon].map((Icon, index) => (
        <Icon aria-hidden className="size-5.5 animate-fade-in" key={index} />
      ))}
    </Toggle.Root>
  );
};
