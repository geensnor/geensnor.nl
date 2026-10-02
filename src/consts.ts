interface Author {
  name: string;
  mastodon_handle: string;
  mastodon_url: string;
}

export const SITE_TITLE = "geensnor.nl";
export const SITE_DESCRIPTION =
  "Dat zit wel snor! Blog over de meest uiteenlopende onderwerpen, maar altijd tof.";
export const AUTHORS: Author[] = [
  {
    name: "Joris",
    mastodon_handle: "@reithose@mastodon.social",
    mastodon_url: "https://mastodon.social/@reithose",
  },
  {
    name: "Erik",
    mastodon_handle: "@bonzz@indieweb.social",
    mastodon_url: "https://indieweb.social/@bonzz",
  },
];

export const DEFAULT_AUTHOR: Author = {
  name: "Geensnor",
  mastodon_handle: "@geensnor@mastodon.xyz",
  mastodon_url: "https://mastodon.xyz/@geensnor",
};

export const MASTODON_INSTANCE_URL = "https://mastodon.nl";
