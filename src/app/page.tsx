import type { FC } from "react";
import { ExtensionList } from "~/components/extension-list";
import { extensions } from "~/data/extensions";

const HomePage: FC = () => <ExtensionList extensions={extensions} />;
export default HomePage;
