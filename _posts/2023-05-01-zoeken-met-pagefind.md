---
title: Geensnor.nl doorzoeken met Pagefind
author: Joris
categories:
  - Internet
  - Handig
---

Sinds kort heeft geensnor.nl ook een [zoekfunctie](pages/alle_berichten.html). Omdat de boel al weer drie jaar statisch is, kunnen we niet eenvoudig een query loslaten op de database. Toch is het ons gelukt om een fraaie zoekfunctie neer te zetten. Hoe? Lees snel verder!

Om een zoekfunctie op een statische website te maken, zijn er eigenlijk twee opties.

## Optie 1: Hosted

Je kan een hosted oplossing als [Agolia](https://www.algolia.com/) of [Typsens](https://typesense.org/) gebruiken. Hierbij kun je je aanmelden (bah) bij een derde partij die je site gaat indexeren en waar je dan doorheen kan zoeken. Deze optie past erg goed bij mensen die lelijkheid, rancune en rot tot gemankeerde adagia hebben verheven, van waaronder ze dagelijks zinloos voortploeteren in hun kleinburgelijke, kapotte leventje in een schier oneindige herhaling van peilloze dieptepunten.

## Optie 2: Frontend

Gelukkig zijn er voor rechtgeschapen, optimistische wereldverbeteraars met het hart op de juiste plek en een scherp oog voor esthetiek en vakmanschap, zoals wij onszelf van geensnor.nl graag zien, nog andere oplossingen. Deze oplossingen maken gebruik van Javascript in de frontend van de applicatie. Ideaal voor statische sites dus. Nadeel van deze oplossing is dat de browser zelf moet zoeken en dat kan traag worden.

## Pagefind

Na een gedegen zoektocht zijn we uiteindelijk bij [Pagefind](https://pagefind.app/) uitgekomen. Pagefind genereert tijdens het builden van de site een aantal bestanden die de zoekindex bevat. Dit doet hij in verschillende bestanden zodat niet de hele index in één ingeladen hoeft te worden, waar door het zoeken niet traag wordt. Met allerlei tags in de pagina templates kun je het indexeren nog wat tweaken. Zo kun je bijvoorbeeld aangeven dat de voorpagina niet wordt geindexeerd om dubbele zoekresultaten te voorkomen. De maker van Pagefind legt het allemaal rustig uit in deze video:

<iframe width="730" height="400" src="https://www.youtube-nocookie.com/embed/74lsEXqRQys" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Installatie

Pagefind toevoegen aan geensnor.nl is niet zo lastig. Het begint zoals zo vaak met het toevoegen van een dependency

`npm install --save-dev pagefind`

Op dit site van Pagefind staat een [stuk code](https://pagefind.app/docs/ui/) voor een voorgebakken zoekveld. Deze kun je zelf helemaal aanpassen (of zelf bouwen), maar hij is nog niet zo verkeerd dus gebruiken we deze voorlopig.

Pagefind moet vervolgens de index gaan genereren. Dit doet hij na het builden van de site, dus daarvoor moet er zoiets als dit aan de scripts van package.json worden toegevoegd.

`"postbuild": "pagefind --source _site"`

Omdat geensnor.nl een Jekyll site is, krijg je dit als build command bij Netlify

`jekyll build && npm install && npm run postbuild`

Het eindresultaat staat op de [alle berichten](pages/alle_berichten.html) pagina. Zoekze!
