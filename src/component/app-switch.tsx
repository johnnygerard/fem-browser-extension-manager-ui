import { cn } from "@/util/cn";
import * as Switch from "@radix-ui/react-switch";
import { memo } from "react";

type Props = {
  className?: string;
  isActive: boolean;
};

export const AppSwitch = memo(({ className, isActive }: Props) => {
  return (
    <Switch.Root
      defaultChecked={isActive}
      className={cn(
        "h-5 w-9 rounded-full bg-neutral-300 p-0.5",
        "data-[state=checked]:bg-red-700 data-[state=checked]:hover:bg-red-500",
        "tw_focus_ring transition-colors duration-200 ease-linear",
        className,
      )}
    >
      <Switch.Thumb
        className={cn(
          "block size-4 rounded-full bg-neutral-0",
          "shadow-[0_1px_3px_rgba(10,13,18,0.15),0_1px_2px_-1px_rgba(10,13,18,0.15)]",
          "transition-[margin-left] duration-100 ease-in-out data-[state=checked]:ml-[50%]",
        )}
      />
    </Switch.Root>
  );
});

AppSwitch.displayName = "AppSwitch";
