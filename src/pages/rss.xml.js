import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import { SITE_TITLE, SITE_DESCRIPTION } from "../consts";
import sanitizeHtml from "sanitize-html";
import MarkdownIt from "markdown-it";

const parser = new MarkdownIt();

export async function GET(context) {
  const posts = await getCollection("blog");

  const items = await Promise.all(
    posts
      .sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf())
      .map(async (post) => {
        return {
          title: post.data.title,
          link: `/blog/${post.id}/`,
          pubDate: post.data.date,
          description: `<![CDATA[${sanitizeHtml(parser.render(post.body || ""))}]]>`,
        };
      }),
  );

  return rss({
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    customData: "<language>nl-NL</language>",
    xmlns: {
      content: "http://purl.org/rss/1.0/modules/content/",
    },
    site: context.site,
    items,
  });
}
