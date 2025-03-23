import { ExtensionList } from "@/component/extension-list";
import { FilterTabs } from "@/component/filter-tabs";
import { cn } from "@/util/cn";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { cwd } from "node:process";
import { memo } from "react";

const HomePage = async () => {
  const path = join(cwd(), "data/extensions.json");
  const json = await readFile(path, "utf8");

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
        <FilterTabs />
      </div>
      <ExtensionList className="mt-10 tb:mt-8" extensions={JSON.parse(json)} />
    </>
  );
};

export default memo(HomePage);
