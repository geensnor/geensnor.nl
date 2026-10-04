export interface MastodonComment {
  id: string;
  in_reply_to_id: string | null;
  content: string;
  created_at: string;
  url: string;
  media_attachments: MediaAttachment[];
  account: {
    display_name: string;
    acct: string;
    avatar: string;
    url: string;
  };
}

export interface MastodonContext {
  descendants?: MastodonComment[];
}

type MediaAttachmentType = "unknown" | "image" | "gifv" | "video" | "audio";

type MediaSize = {
  width: number;
  height: number;
  size: string; // bijv. "2278x1432"
  aspect: number;
};

type MediaFocus = {
  x: number; // -1 tot 1
  y: number; // -1 tot 1
};

type MediaMeta = {
  original?: MediaSize;
  small?: MediaSize;
  focus?: MediaFocus;
};

type MediaAttachment = {
  id: string;
  type: MediaAttachmentType;
  url: string;
  preview_url: string | null;
  remote_url: string | null;
  preview_remote_url: string | null;
  text_url: string | null;
  meta: MediaMeta | null;
  description: string | null; // alt-tekst
  blurhash: string | null;
};
