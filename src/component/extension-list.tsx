import { Extension } from "@/component/extension";
import type { ExtensionJson } from "@/type/extension-json";
import { cn } from "@/util/cn";
import { memo } from "react";

type Props = {
  className?: string;
  extensions: ExtensionJson[];
};

export const ExtensionList = memo(({ className, extensions }: Props) => {
  return (
    <ul
      className={cn(
        "mt-10 grid gap-3 tb:grid-cols-[repeat(2,minmax(0,max-content))]",
        "dt:grid-cols-[repeat(3,minmax(0,max-content))]",
        className,
      )}
    >
      {extensions.map((value, index) => (
        <li key={index}>
          <Extension json={value} />
        </li>
      ))}
    </ul>
  );
});

ExtensionList.displayName = "ExtensionList";
