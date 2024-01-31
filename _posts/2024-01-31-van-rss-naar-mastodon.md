---
title: Van RSS naar Mastodon
author: Joris
categories:
  - Internet
  - Geensnor
---

![RSS naar Mastodon illustratie](../assets/posts/rss-naar-mastodon.jpg)

Als je [een leuk Mastodon account](https://mastodon.xyz/@geensnor) weet en je wilt die graag in je RSS reader gebruiken, is er geen enkel probleem. Zet gewoon ```.rss``` achter de URL, en tada, daar is [de RSS feed](https://mastodon.xyz/@geensnor.rss).

Andersom is het lastiger. De RSS feed moet regelmatig worden controleerd op nieuwe berichten. Als er dan iets wijzigt moet het nieuwe (en alleen het nieuwe...) bericht worden omgezet naar een Toot en naar Mastodon worden gestuurd. Maar ik zou deze post natuurlijk niet schrijven, als ik daar geen oplossing voor heb gevonden: [Echo](https://github.com/rknightuk/echo) van [Robb Knight](https://rknight.me/). Echo doet precies wat het moet doen: RSS feeds checken en Tooten.

## Houtje touwtje

Omdat ik te skeer ben voor een webhoster met Nodejs ondersteuning, heb ik mijn Synology NAS aan het werk gezet. Tussen 10:00 en 22:00 draait hij nu elke twee uur Echo. In Echo heb ik de [RSS feed](https://geensnor.netlify.app/feed.xml)- en [Mastodon account](https://mastodon.xyz/@geensnor) van geensnor.nl geconfigureerd zodat we de Fediverse geautomatiseerd volpompen met berichten van geensnor.nl

En zo hebben we weer wat los spul aan elkaar geknoopt.....
