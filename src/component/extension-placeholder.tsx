import { memo } from "react";

type Props = {
  className?: string;
};

export const ExtensionPlaceholder = memo(({ className }: Props) => {
  return (
    <li className={className} aria-hidden="true">
      <div className="invisible h-50 w-95" />
    </li>
  );
});

ExtensionPlaceholder.displayName = "ExtensionPlaceholder";
