import { describe, it, expect } from "vitest";
import { toJsDoc } from "../scripts/utils/jsdoc";

describe("toJsDoc - language blocks", () => {
  it("keeps gdscript blocks and drops csharp blocks", () => {
    const input = [
      "[codeblocks]",
      "[gdscript]",
      "print(\"hi\")",
      "[/gdscript]",
      "[csharp]",
      "GD.Print(\"hi\");",
      "[/csharp]",
      "[/codeblocks]",
    ];

    const jsdoc = toJsDoc(input);
    // contains a fenced gdscript block
    expect(jsdoc).toContain("```gdscript");
    expect(jsdoc).toContain("print(\"hi\")");
    // does not contain csharp fence or code
    expect(jsdoc).not.toContain("```csharp");
    expect(jsdoc).not.toContain("GD.Print");
  });
});

