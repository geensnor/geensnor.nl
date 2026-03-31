---
title: Human after all
author: Joris
date: 2026-03-30
categories:
  - Internet
  - Geensnor
---

![Robot speelt piano, of toch niet...?](../../assets/posts/robot-pianist.jpg)

Och och och, AI. In elk gesprek komt het wel even aan bod. En je kunt er ook zoveel mee. En het gaat natuurlijk het werk veranderen. En dan nog de investeringen allemaal. Tjonge jonge, het is me allemaal wat.

Maar op geensnor.nl proberen we natuurlijk net even de andere invalshoek te pakken. De invalshoek van: hoe kunnen we uit die smeulende berg slop op het internet nog het menselijke, kwetsbare verhaal herkennen? De schrijver, scholier of student die eenzaam ploetert op een verhaal. Met blote handen, vechtend tegen enorme taalmodellen. Soms tegen beter weten in, maar altijd gesterkt door het rotsvaste geloof in originaliteit, ambacht en een mooiere toekomst voor iedereen.

## human.json

Een tijdje terug kwam ik [deze post](https://tzovar.as/maintaining-a-human-web-with-humans-json-aiblacklist/) tegen. De schrijver gebruikt [human.json](https://codeberg.org/robida/human.json) om aan te geven dat hij zelf z'n site beheert en niet een of andere AI. Maar hij geeft in [zijn human.json](https://tzovar.as/human.json) ook aan dat hij andere sites kent (en vertrouwd) die beheerd worden door mensen. Zo onstaat er een netwerk. Beetje zoals de [Web of Trust](https://en.wikipedia.org/wiki/Web_of_trust) van PGP. Met behulp van een [browser extentie](https://addons.mozilla.org/firefox/addon/human-json-verifier/) kunnen de bezoekers van een website bepalen of het om een website deel uit maakt van dat netwerk. Als je de boel niet vertrouwd als bezoeker, kun je in de browser extentie de site ook blokkeren.

Of zoals human.json het zelf beschrijft:

> human.json is a lightweight protocol for humans to assert authorship of their site content and vouch for the humanity of others. It uses URL ownership as identity, and trust propagates through a crawlable web of vouches between sites.

Instaan voor de menselijkheid van anderen. Is het niet prachtig....

Zoals met alle prachtige ideeen, pakken we bij Geensnor ook deze handschoen meteen op. We hebben ook een human.json [toegevoegd aan geensnor.nl](../human.json). Op dit moment staan [De Digitale Tuin](https://www.dedigitaletuin.nl), [Chris Eidhof](https://eidhof.nl/) en [Bert Hubert](https://berthub.eu/) erin. Ik wil hun humanity wel vouchen.

## Slop blocken

In plaats van aangeven dat iets gemaakt is door een mens, kun je ook AI slop blokkeren. Ook daar gaat [de eerder genoemde post](https://tzovar.as/maintaining-a-human-web-with-humans-json-aiblacklist/) op in. Hij heeft een AI blocklist voor uBlock Origin [gevonden](https://github.com/alvi-se/ai-ublock-blacklist). Als je deze lijst toevoegd aan de [browser plugin](https://ublockorigin.com/), krijg je een mooie waarschuwing te zien als je tegen een berg slop aansurft.

De gedachte achter deze lijst is

> The key idea is simple: if I wanted my question to be answered by AI, I would ask AI.

[uBlock Origin](https://ublockorigin.com/) is sowieso een aanrader als je iets om je privacy en advertentievrij browsen geeft.

## Links

- [human.json](https://codeberg.org/robida/human.json)
- [Wikipedia is ook klaar gegenereerde teksten](https://tweakers.net/nieuws/246214/wikipediaschrijvers-mogen-geen-ai-meer-gebruiken.html)
- [Don't Let AI Write For You](https://alexhwoods.com/dont-let-ai-write-for-you/)
- [AI Slop Blocklist uBlock Origin](https://github.com/alvi-se/ai-ublock-blacklist)
