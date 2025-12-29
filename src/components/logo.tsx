import type { FC } from "react";
import { Logomark } from "~/components/svg/logomark";
import { Logotype } from "~/components/svg/logotype";
import { tw } from "~/utils/tw";

type Props = {
  className?: string;
};

export const Logo: FC<Props> = ({ className }) => (
  <div className={tw("flex items-center gap-3", className)}>
    <Logomark />
    <Logotype />
  </div>
);
