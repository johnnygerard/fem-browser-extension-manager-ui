import { AppSwitch } from "@/component/app-switch";
import { ExtensionJson } from "@/type/extension-json";
import { cn } from "@/util/cn";
import Image from "next/image";
import { memo } from "react";

type Props = {
  className?: string;
  json: ExtensionJson;
  handleRemove: (name: string) => void;
};

export const Extension = memo(
  ({
    className,
    json: { logoFilename, name, description, isActive },
    handleRemove,
  }: Props) => {
    return (
      <div
        className={cn(
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
            src={`/asset/image/extension-logo/${logoFilename}`}
            alt=""
            width={60}
            height={60}
          />
          <div>
            {/******************** Name ********************/}
            <h2
              className={cn(
                "text-[1.25rem]/[1.2] font-bold -tracking-[0.0125rem]",
                "text-neutral-900 dark:text-neutral-0",
              )}
            >
              {name}
            </h2>
            {/******************** Description ********************/}
            <p
              className={cn(
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
            className={cn(
              "rounded-full px-4 py-2 text-neutral-900 dark:text-neutral-0",
              "text-[1rem]/[1.4] font-medium -tracking-[0.03125rem]",
              "border border-neutral-300 dark:border-neutral-600",
            )}
            type="button"
            onClick={() => handleRemove(name)}
          >
            Remove
          </button>
          <AppSwitch isActive={isActive} />
        </div>
      </div>
    );
  },
);

Extension.displayName = "Extension";
