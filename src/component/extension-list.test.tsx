import "@testing-library/jest-dom";
import { ExtensionList } from "@/component/extension-list";
import type { ExtensionJson } from "@/type/extension-json";
import { faker } from "@faker-js/faker/locale/en";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

const getFakeExtension = (name: string): ExtensionJson => ({
  logoFilename: `${faker.helpers.slugify(name)}.svg`,
  name,
  description: faker.commerce.productDescription(),
  isActive: faker.datatype.boolean(),
});

const getFakeExtensionList = (length?: number): ExtensionJson[] => {
  return faker.helpers
    .uniqueArray(faker.commerce.productName, length ?? faker.number.int(100))
    .map(getFakeExtension);
};

describe("ExtensionList", () => {
  it("renders", () => {
    render(<ExtensionList extensions={getFakeExtensionList()} />);
  });

  it("renders an empty list", () => {
    render(<ExtensionList extensions={getFakeExtensionList(0)} />);
  });

  it("can remove an extension", async () => {
    const user = userEvent.setup();
    const extensions = getFakeExtensionList();
    const extensionIndex = faker.number.int(extensions.length - 1);
    const extensionName = extensions[extensionIndex].name;

    render(<ExtensionList extensions={extensions} />);
    expect(screen.getByText(extensionName)).toBeInTheDocument();
    expect(screen.getAllByRole("button", { name: /remove/i })).toHaveLength(
      extensions.length,
    );

    await user.click(
      screen.getAllByRole("button", { name: /remove/i })[extensionIndex],
    );

    expect(screen.queryByText(extensionName)).not.toBeInTheDocument();
    expect(screen.getAllByRole("button", { name: /remove/i })).toHaveLength(
      extensions.length - 1,
    );
  });
});
