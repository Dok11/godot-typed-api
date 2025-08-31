export const mapGodotType = (t: string): string => {
  const hadOuterWhitespace = /^\s|\s$/.test(t);
  const hadPointer = /\*/.test(t);
  // Normalize common C-style qualifiers and pointers from docs
  let k = t
    .trim()
    .replace(/\b(const|volatile|restrict)\b/g, "")
    .replace(/[\*&]+/g, "")
    .replace(/\s+/g, " ")
    .trim();
  if (hadPointer) return "unknown"; // not representable in TS
  if (k === "int") return "int";
  if (k === "float") return "float";
  if (k === "bool") return "boolean";
  if (k === "String") return "string";
  if (k === "void") return "void";
  // Array[T] -> GodotArray<map(T)>
  const arrayMatch = /^Array(?:\[(.*)\])?$/.exec(k);
  if (arrayMatch) {
    // If original had suspicious leading/trailing whitespace, degrade inner typing to any for safety
    if (hadOuterWhitespace) return `GodotArray<any>`;
    const inner = arrayMatch[1]?.trim();
    const innerTs = inner ? mapGodotType(inner) : "any";
    return `GodotArray<${innerTs}>`;
  }
  // Dictionary -> GodotDictionary<any> (Godot doesn't type it precisely in docs)
  if (k === "Dictionary") return "GodotDictionary<any>";
  return k; // Vector2, Vector3, Node, PackedScene, ...
};

