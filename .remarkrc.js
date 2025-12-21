import remarkPresetLintRecommended from "remark-preset-lint-recommended";
import remarkPresetLintConsistent from "remark-preset-lint-consistent";
import remarkPresetLintMarkdownStyleGuide from "remark-preset-lint-markdown-style-guide";

// rules imports
import remarkLintMaximumHeadingLength from "remark-lint-maximum-heading-length";
import remarkLintUnorderedListMarkerStyle from "remark-lint-unordered-list-marker-style";
import remarkLintLinkTitleStyle from "remark-lint-link-title-style";
import remarkLintMaximumLineLength from "remark-lint-maximum-line-length";
import remarkLintListItemSpacing from "remark-lint-list-item-spacing";
import remarkFrontmatter from "remark-frontmatter";
import remarkLintNoFileNameMixedCase from "remark-lint-no-file-name-mixed-case";
import remarkLintNoUtm from "./remark-rules/remark-lint-no-utm.js";
import remarkLintOrderedListMarkerValue from "remark-lint-ordered-list-marker-value";
import remarkLintListItemIndent from "remark-lint-list-item-indent";
import remarkLintEmphasisMarker from "remark-lint-emphasis-marker";

const config = {
  plugins: [
    // presets
    remarkPresetLintRecommended,
    remarkPresetLintConsistent,
    remarkPresetLintMarkdownStyleGuide,

    [remarkLintNoUtm, [2]],
    remarkFrontmatter,
    // rules
    // https://www.npmjs.com/package/remark-lint-maximum-heading-length
    [remarkLintMaximumHeadingLength, [1, 100]],
    // https://www.npmjs.com/package/remark-lint-unordered-list-marker-style
    [remarkLintUnorderedListMarkerStyle, "consistent"],
    // https://www.npmjs.com/package/remark-lint-link-title-style
    [remarkLintLinkTitleStyle, "'"],
    // https://www.npmjs.com/package/remark-lint-maximum-line-length
    [remarkLintMaximumLineLength, false],
    // https://www.npmjs.com/package/remark-lint-list-item-spacing
    [remarkLintListItemSpacing, false],
    [remarkLintNoFileNameMixedCase, false],
    [remarkLintOrderedListMarkerValue, false],
    [remarkLintListItemIndent, false],
    [remarkLintEmphasisMarker, false],
  ],
};

export default config;
