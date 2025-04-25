import Parser from "rss-parser";

// 2. Mastodon feed ophalen
const feedUrl = "https://mastodon.xyz/@geensnor.rss";
let mastodonItems = [];

const parser = new Parser({
  customFields: {
    item: [["media:content", "attachments", { keepArray: true }]],
  },
});

export const contentMastodon = await parser.parseURL(feedUrl);
