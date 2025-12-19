import { visit } from "unist-util-visit";

export default function remarkLintNoUtm() {
  return (tree, file) => {
    visit(tree, "link", (node) => {
      try {
        const url = new URL(node.url);
        for (const key of [...url.searchParams.keys()]) {
          if (key.startsWith("utm_")) {
            file.message(
              `Link bevat utm-parameter "${key}". Vermijd trackingparameters!`,
              node,
            );
          }
        }
      } catch {
        // Geen geldige URL (bijvoorbeeld mailto:), negeer
      }
    });
  };
}
