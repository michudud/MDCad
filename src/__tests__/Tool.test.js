/**
 * @jest-environment jsdom
 */

import { expect, test } from "@jest/globals";
import { render } from "@testing-library/react";
import Tool from "../components/Tool";

test("displays right icon for tool", async () => {
  const tool = render(<Tool tool_option={["Rect"]} />);

  const toolIcon = await tool.findByTestId("toolSvg");
  expect(toolIcon.parentNode.textContent).toContain("Rect");
});
