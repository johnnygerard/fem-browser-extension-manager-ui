"use client";
import { Extension } from "@/component/extension";
import { FilterTabs } from "@/component/filter-tabs";
import type { ExtensionJson } from "@/type/extension-json";
import { type Filter, FILTER } from "@/type/filter";
import { cn } from "@/util/cn";
import { memo, useState } from "react";

type Props = {
  className?: string;
  extensions: ExtensionJson[];
};

export const ExtensionList = memo(({ className, extensions }: Props) => {
  const [list, setList] = useState(extensions);
  const [filter, setFilter] = useState<Filter>(FILTER.ALL);
  const filteredList =
    filter === FILTER.ALL
      ? list
      : list.filter(
          filter === FILTER.ACTIVE
            ? (extension) => extension.isActive
            : (extension) => !extension.isActive,
        );

  const handleFilterChange = (value: Filter): void => {
    setFilter(value);
  };

  const handleRemove = (name: string): void => {
    setList((value) => value.filter((extension) => extension.name !== name));
  };

  return (
    <>
      <div
        className={cn(
          "flex flex-col items-center gap-6",
          "tb:flex-row tb:justify-between tb:gap-12",
        )}
      >
        <h1
          className={cn(
            "text-[2.125rem]/[1] font-bold -tracking-[0.0625rem]",
            "text-neutral-900 dark:text-neutral-0",
          )}
        >
          Extensions List
        </h1>
        <FilterTabs handleFilterChange={handleFilterChange} />
      </div>
      <ul
        className={cn(
          "mt-10 grid gap-3 tb:mt-8 tb:grid-cols-[repeat(2,minmax(0,max-content))]",
          "dt:grid-cols-[repeat(3,minmax(0,max-content))]",
          className,
        )}
      >
        {filteredList.map((value) => (
          <li key={value.name}>
            <Extension json={value} handleRemove={handleRemove} />
          </li>
        ))}
      </ul>
    </>
  );
});

ExtensionList.displayName = "ExtensionList";
