import { Filter, FILTER } from "@/type/filter";
import { cn } from "@/util/cn";
import * as RadioGroup from "@radix-ui/react-radio-group";
import { memo } from "react";

type Props = {
  className?: string;
  handleFilterChange: (value: Filter) => void;
};

export const FilterTabs = memo(({ className, handleFilterChange }: Props) => {
  return (
    <RadioGroup.Root
      className={cn("flex gap-3", className)}
      defaultValue={FILTER.ALL}
      onValueChange={handleFilterChange}
    >
      {Object.values(FILTER).map((label) => (
        <RadioGroup.Item
          className={cn(
            // Base style
            "tw_focus_ring rounded-full border px-5 pt-2 pb-2.5",
            "text-[1.25rem]/[1.4] -tracking-[0.01875rem] transition-colors",
            // Shadow
            "shadow-[0_1px_2px_rgba(184,196,215,0.40)] hover:shadow-none",
            "data-[state=checked]:shadow-none dark:shadow-none",
            // Text
            "text-neutral-900 data-[state=checked]:text-neutral-0",
            "dark:data-[state=unchecked]:text-neutral-0",
            "data-[state=checked]:font-medium",
            // Background
            "bg-neutral-0 data-[state=checked]:bg-red-700",
            "dark:bg-neutral-700 dark:data-[state=checked]:bg-red-400",
            "hover:data-[state=checked]:bg-red-500",
            "hover:dark:bg-neutral-600 hover:dark:data-[state=checked]:bg-red-500",
            // Border
            "border-neutral-200 data-[state=checked]:border-transparent",
            "dark:data-[state=unchecked]:border-neutral-600",
            // Opacity
            "hover:data-[state=unchecked]:opacity-70 dark:opacity-100",
          )}
          key={label}
          value={label}
        >
          {label}
        </RadioGroup.Item>
      ))}
    </RadioGroup.Root>
  );
});

FilterTabs.displayName = "FilterTabs";
