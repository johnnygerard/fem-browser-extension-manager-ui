import type { FC } from "react";
import { Logo } from "~/components/logo";
import { ThemeToggle } from "~/components/theme-toggle";
import { tw } from "~/utils/tw";

type Props = {
  className?: string;
};

export const Header: FC<Props> = ({ className }) => (
  <header
    className={tw(
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
