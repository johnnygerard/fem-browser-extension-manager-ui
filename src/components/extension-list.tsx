"use client";
import { useState, type FC } from "react";
import { Extension } from "~/components/extension";
import { ExtensionPlaceholder } from "~/components/extension-placeholder";
import { FilterTabs } from "~/components/filter-tabs";
import type { ExtensionData } from "~/types/extension-data";
import { FILTER, type Filter } from "~/types/filter";
import { tw } from "~/utils/tw";

type Props = {
  className?: string;
  extensions: ExtensionData[];
};

export const ExtensionList: FC<Props> = ({ className, extensions }) => {
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

  const handleActiveToggle = (name: string): void => {
    setList((value) =>
      value.map((extension) =>
        extension.name === name
          ? { ...extension, isActive: !extension.isActive }
          : extension,
      ),
    );
  };

  const handleFilterChange = (value: Filter): void => {
    setFilter(value);
  };

  const handleRemove = (name: string): void => {
    setList((value) => value.filter((extension) => extension.name !== name));
  };

  return (
    <>
      <div
        className={tw(
          "flex flex-col items-center gap-6",
          "tb:flex-row tb:justify-between tb:gap-12",
        )}
      >
        <h1
          className={tw(
            "text-[2.125rem]/[1] font-bold -tracking-[0.0625rem]",
            "text-neutral-900 dark:text-neutral-0",
          )}
        >
          Extensions List
        </h1>
        <FilterTabs handleFilterChange={handleFilterChange} />
      </div>
      <ul
        className={tw(
          "mt-10 grid gap-3 tb:mt-8 tb:grid-cols-[repeat(2,minmax(0,max-content))]",
          "dt:grid-cols-[repeat(3,minmax(0,max-content))]",
          className,
        )}
      >
        {filteredList.map((value) => (
          <li key={value.name}>
            <Extension
              data={value}
              handleRemove={handleRemove}
              handleActiveToggle={handleActiveToggle}
            />
          </li>
        ))}
        {/* Placeholders to maintain layout width */}
        {filteredList.length < 1 && (
          <ExtensionPlaceholder key="mobile-placeholder" />
        )}
        {filteredList.length < 2 && (
          <ExtensionPlaceholder
            key="tablet-placeholder"
            className="hidden tb:block"
          />
        )}
        {filteredList.length < 3 && (
          <ExtensionPlaceholder
            key="desktop-placeholder"
            className="hidden dt:block"
          />
        )}
      </ul>
    </>
  );
};
