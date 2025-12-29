import type { FC } from "react";

type Props = {
  className?: string;
};

export const ExtensionPlaceholder: FC<Props> = ({ className }) => (
  <li className={className} aria-hidden="true">
    <div className="invisible h-50 w-95" />
  </li>
);
