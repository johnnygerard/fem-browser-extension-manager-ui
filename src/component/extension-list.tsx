"use client";
import { Extension } from "@/component/extension";
import type { ExtensionJson } from "@/type/extension-json";
import { cn } from "@/util/cn";
import { memo, useState } from "react";

type Props = {
  className?: string;
  extensions: ExtensionJson[];
};

export const ExtensionList = memo(({ className, extensions }: Props) => {
  const [list, setList] = useState(extensions);

  const handleRemove = (name: string): void => {
    setList((value) => value.filter((extension) => extension.name !== name));
  };

  return (
    <ul
      className={cn(
        "mt-10 grid gap-3 tb:grid-cols-[repeat(2,minmax(0,max-content))] dt:mt-16",
        "dt:grid-cols-[repeat(3,minmax(0,max-content))]",
        className,
      )}
    >
      {list.map((value) => (
        <li key={value.name}>
          <Extension json={value} handleRemove={handleRemove} />
        </li>
      ))}
    </ul>
  );
});

ExtensionList.displayName = "ExtensionList";
