import { ExtensionList } from "@/component/extension-list";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { cwd } from "node:process";
import { memo } from "react";

const HomePage = async () => {
  const path = join(cwd(), "data/extensions.json");
  const json = await readFile(path, "utf8");

  return <ExtensionList extensions={JSON.parse(json)} />;
};

export default memo(HomePage);
