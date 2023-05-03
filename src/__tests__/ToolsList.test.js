/**
 * @jest-environment jsdom
 */

import { expect, test } from "@jest/globals";
import { render } from "@testing-library/react";
import ToolsList from "../components/ToolsList";

test("lets open tools list", async () => {
  const toolsList = render(
    <ToolsList
      tool={{
        name: "Line",
        options: ["Line"],
      }}
    />
  );

  const toolsListButton = await toolsList.findByTestId("toolsListButton");
  toolsListButton.click();

  const toolUl = await toolsList.findByTestId("toolUl");
  expect(toolUl.classList).toContain("open");
});
