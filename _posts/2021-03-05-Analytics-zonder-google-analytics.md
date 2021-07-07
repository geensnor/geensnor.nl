---
title: Analytics zonder Google Analytics
author: Joris
permalink: /analytics-umami/
categories:
  - Internet
  - Geensnor
---

Op geensnor.nl sta je als bezoeker centraal. Bruikbaarheid, privacy en veiligheid zijn allemaal van het hoogtste niveau zodat het je aan niets zal ontbreken. We gaan je daarom niet tracken, uitbuiten of afpersen. Toch is het wel leuk om te weten hoeveel bezoekes geensnor.nl heeft (spoiler: niet veel). Sinds een tijdje gebruiken we daar [Umami](https://umami.is) voor. Umami is een tool om bezoekers op een website bij te houden, zonder dat er Google aan te pas komt. En alles waar de boze big tech niet aan te pas komt, is meegenomen.

![bezoekers geensnor](/assets/posts/bezoekgeensnor.png)

## Umami op Vercel

Umami moet je zelf hosten. Hiervoor moet Umami zelf ergens staan en moet je een database regelen waar de bezoeken in weggeschreven kunnen worden. In [dit artikel](https://dev.to/jakobbouchard/setting-up-umami-with-vercel-and-supabase-3a73) wordt beschreven hoe dat ongeveer gaat. Het valt enorm mee. Umami zelf staat op [Vercel](https://vercel.com) en als database wordt [Supabase](https://app.supabase.io) gebruikt. Supabase schijnt binnenkort niet meer helemaal gratis meer te zijn, maar dan verzinnen we weer iets nieuws.

## Zien!

Umami heeft ook een publieke versie van de statistieken beschikbaar. Voor geensnor.nl staat die hier:

[https://umami-beryl.vercel.app/share/12bqGSJc/geensnor.nl](https://umami-beryl.vercel.app/share/12bqGSJc/geensnor.nl)

Als je 's nachts niet kkunt slapen omdat de bezoekers aantallen van geensnor.nl maar door je hoofd blijven malen, kun je hier dus verlossing vinden.
