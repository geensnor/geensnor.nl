import { MASTODON_INSTANCE_URL } from "./consts";
import type { MastodonComment } from "../src/types/MastodonComment";

export async function getMastodonComments(
  statusId: string,
): Promise<MastodonComment[]> {
  try {
    const response = await fetch(
      `${MASTODON_INSTANCE_URL}/api/v1/statuses/${statusId}/context`,
    );

    // Status niet gevonden: geen reacties, geen fout
    if (response.status === 404) {
      return [];
    }

    if (!response.ok) {
      throw new Error(`Mastodon API responded with ${response.status}`);
    }

    const data: { descendants?: MastodonComment[] } = await response.json();

    return data.descendants ?? [];
  } catch (error) {
    console.error("Niet gelukt om mastodon reacties op te halen: ", error);
    return [];
  }
}
