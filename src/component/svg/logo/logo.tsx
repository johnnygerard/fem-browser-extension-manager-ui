import { Logomark } from "@/component/svg/logo/logomark";
import { Logotype } from "@/component/svg/logo/logotype";
import { cn } from "@/util/cn";
import { memo } from "react";

type Props = {
  className?: string;
};

export const Logo = memo(({ className }: Props) => {
  return (
    <div className={cn("flex items-center gap-3", className)}>
      <Logomark />
      <Logotype />
    </div>
  );
});

Logo.displayName = "Logo";
