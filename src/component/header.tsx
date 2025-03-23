import { Logo } from "@/component/logo";
import { ThemeToggle } from "@/component/theme-toggle";
import { cn } from "@/util/cn";
import { memo } from "react";

type Props = {
  className?: string;
};

export const Header = memo(({ className }: Props) => {
  return (
    <header
      className={cn(
        "flex justify-between gap-3 rounded-10 px-3 py-2",
        "border border-neutral-200 dark:border-transparent",
        "bg-neutral-0 dark:bg-neutral-800",
        "shadow-[0_2px_3px_#D9E5F4] dark:shadow-none",
        className,
      )}
    >
      <Logo />
      <ThemeToggle />
    </header>
  );
});

Header.displayName = "Header";
