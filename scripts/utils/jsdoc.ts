function decodeEntities(s: string): string {
  return s
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&apos;/g, "'");
}

export function toJsDoc(lines: string[]): string {
  let text = decodeEntities(lines.join("\n")).replace(/\$DOCS_URL/g, "https://docs.godotengine.org/en/stable");
  // Basic BBCode → Markdown transformations
  text = text
    // bold/italic/inline code
    .replace(/\[b\]([\s\S]*?)\[\/b\]/g, "**$1**")
    .replace(/\[i\]([\s\S]*?)\[\/i\]/g, "*$1*")
    .replace(/\[code\]([\s\S]*?)\[\/code\]/g, (_, code) => `\`${code.replace(/`/g, "\\`")}\``)
    // single-language block
    .replace(/\[codeblock\]([\s\S]*?)\[\/codeblock\]/g, "```gdscript\n$1\n```")
    // multi-language container: strip wrappers, convert inner language tags
    .replace(/\[codeblocks\]/g, "")
    .replace(/\[\/codeblocks\]/g, "")
    .replace(/\[gdscript\]([\s\S]*?)\[\/gdscript\]/g, "```gdscript\n$1\n```")
    // drop C# code blocks entirely — not needed in d.ts output
    .replace(/\[csharp\]([\s\S]*?)\[\/csharp\]/g, "")
    // keyboard and links
    .replace(/\[kbd\]([\s\S]*?)\[\/kbd\]/g, "`$1`")
    .replace(/\[url=([^\]]+)\]([\s\S]*?)\[\/url\]/g, "$2 ($1)")
    // references: method/member/signal/constant/param/enum → inline code
    .replace(/\[(method|member|signal|constant|param|enum)\s+([^\]]+)\]/g, "`$2`")
    // Class-like references [SceneTree], [NodePath], [Object.Property]
    .replace(/\[([A-Z][A-Za-z0-9_]*(?:\.[A-Za-z0-9_]+)?)\]/g, "`$1`");

  // Normalize leading whitespace outside fenced code blocks and inject paragraph breaks
  const out: string[] = [];
  let inFence = false;
  let prevWasBlank = false;
  for (const rawLine of text.split(/\r?\n/)) {
    const fence = /^\s*```/.test(rawLine);
    if (fence) {
      // ensure blank line before and after code fences
      if (!prevWasBlank && out.length) out.push(" * ");
      inFence = !inFence;
      out.push(` * ${rawLine.trimEnd()}`);
      prevWasBlank = false;
      continue;
    }

    const line = inFence
      ? rawLine // keep formatting inside code fences
      : rawLine.replace(/^\s+/, "").replace(/[ \t]+$/, "");

    const isBlank = line === "";
    if (!inFence && !isBlank) {
      // Add a paragraph break before section-like lines (headings, notes) if needed
      const isSection = /^(\*\*.+\*\*:?|Note:|Warning:|Important:)/.test(line);
      if (isSection && !prevWasBlank && out.length) out.push(" * ");
    }

    out.push(` * ${line}`);
    prevWasBlank = isBlank;
  }
  // Prevent accidental comment termination inside content
  const body = out.join("\n").replace(/\*\//g, "*\\/");
  return `/**\n${body}\n */`;
}
