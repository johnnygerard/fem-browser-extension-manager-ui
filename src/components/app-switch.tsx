import { Switch } from "radix-ui";
import type { FC } from "react";
import { tw } from "~/utils/tw";

type Props = {
  ariaLabel?: string;
  className?: string;
  defaultChecked: boolean;
  handleCheckedChange: () => void;
};

export const AppSwitch: FC<Props> = ({
  ariaLabel,
  className,
  defaultChecked,
  handleCheckedChange,
}) => (
  <Switch.Root
    aria-label={ariaLabel}
    defaultChecked={defaultChecked}
    onCheckedChange={handleCheckedChange}
    className={tw(
      "h-5 w-9 rounded-full bg-neutral-300 p-0.5",
      "data-[state=checked]:bg-red-700 data-[state=checked]:hover:bg-red-500",
      "transition-colors duration-200 ease-linear",
      className,
    )}
  >
    <Switch.Thumb
      className={tw(
        "block size-4 rounded-full bg-neutral-0",
        "shadow-[0_1px_3px_rgba(10,13,18,0.15),0_1px_2px_-1px_rgba(10,13,18,0.15)]",
        "transition-[margin-left] duration-100 ease-in-out data-[state=checked]:ml-[50%]",
      )}
    />
  </Switch.Root>
);
