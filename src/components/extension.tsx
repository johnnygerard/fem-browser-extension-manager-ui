import Image from "next/image";
import type { FC } from "react";
import { AppSwitch } from "~/components/app-switch";
import type { ExtensionData } from "~/types/extension-data";
import { tw } from "~/utils/tw";

type Props = {
  className?: string;
  data: ExtensionData;
  handleActiveToggle: (name: string) => void;
  handleRemove: (name: string) => void;
};

export const Extension: FC<Props> = ({
  className,
  data: { logoFilename, name, description, isActive },
  handleActiveToggle,
  handleRemove,
}) => (
  <div
    className={tw(
      "flex h-50 w-full max-w-95 flex-col justify-between rounded-20 p-5",
      "border border-neutral-200 dark:border-neutral-600",
      "bg-neutral-0 dark:bg-neutral-800 dark:shadow-none",
      "shadow-[0_2px_2px_rgba(194,206,225,0.20),0_1px_5px_1px_rgba(194,206,225,0.22)]",
      className,
    )}
  >
    <div className="flex items-start gap-4">
      {/******************** Logo ********************/}
      <Image
        className="size-15"
        src={`/assets/images/extension-logos/${logoFilename}`}
        alt=""
        width={60}
        height={60}
      />
      <div>
        {/******************** Name ********************/}
        <h2
          className={tw(
            "text-[1.25rem]/[1.2] font-bold -tracking-[0.0125rem]",
            "text-neutral-900 dark:text-neutral-0",
          )}
        >
          {name}
        </h2>
        {/******************** Description ********************/}
        <p
          className={tw(
            "mt-2 text-neutral-600 dark:text-neutral-300",
            "text-[1rem]/[1.4] -tracking-[0.03125rem]",
          )}
        >
          {description}
        </p>
      </div>
    </div>
    {/******************** Controls ********************/}
    <div className="flex items-center justify-between">
      <button
        className={tw(
          "rounded-full px-4 py-2 transition-colors",
          "text-[1rem]/[1.4] font-medium -tracking-[0.03125rem]",
          "text-neutral-900 dark:text-neutral-0",
          "border border-neutral-300 dark:border-neutral-600",
          "hover:border-transparent hover:bg-red-700",
          "hover:not-focus-visible:text-neutral-0",
          "hover:not-focus-visible:dark:text-neutral-900",
          "hover:dark:border-transparent hover:dark:bg-red-400",
          "focus-visible:border-transparent focus-visible:bg-neutral-100",
          "focus-visible:dark:bg-neutral-600",
        )}
        type="button"
        onClick={() => handleRemove(name)}
      >
        Remove
      </button>
      <AppSwitch
        ariaLabel="Active"
        defaultChecked={isActive}
        handleCheckedChange={() => handleActiveToggle(name)}
      />
    </div>
  </div>
);
