---
title: Eenvoudig een link delen met statische site
author: Joris
categories:
  - Internet
  - Geensnor
---

Soms lijkt het wel alsof een statische website meer problemen oplevert, dan het oplost. Zo hebben we eerder al problemen met [zoeken](/zoeken-met-pagefind) en reageren moeten omzeilen. In deze aflevering van de serie "Waarom kan dit _ook_ al niet met met mijn statische site?":

Eenvoudig een link delen

![hehe, ze springen over geheugenbanken heen](/assets/posts/john-cameron-kY2H30v6Bs4-unsplash.jpg)

## Het probleem

Iedereen kent het wel. Je ziet iets vets op internet en je wilt het tegen iedereen vertellen. Vroeger zette het je op Facebook of Twitter (Ik blijf gewoon Twitter zeggen...), maar daar wil je tegenwoordig niet meer dood gevonden worden. Daarnaast heb je een geweldig, moderne statische site waar je zelf heer en meester bent en waar je kan doen wat je wilt.....denk je....

Toch lukt het je maar niet om je vette linkje vanaf je telefoon, op je hippe site te krijgen. Technisch gezien kan het misschien wel, maar dan moet je eerst aan de slag met het aanmaken van een nieuw Markdown bestand op je telefoon, om die vervolgens in Git te proppen. Je bent bekant de halve avond bezig voor dat je zeker weet dat de drie vaste bezoekers van je site, je vette linkje kunnen zien.

Kortom, ellende.

## De oplossing

De oplossing hangt [weer](/van-rss-naar-mastodon) van hacks en amateurisme aan elkaar, maar is daardoor niet minder charmant:

1. Via een [Apple Opdracht](https://www.icloud.com/shortcuts/ece60ec4630d4592a1c3bf26f3ba5b43) haal je de link op van de pagina die je wilt delen. Omdat je de opdracht in het "deelmenu" van iOS kan zetten, kun je eigenlijk alles wat je tegenkomt, in elke app, via de opdracht versturen.
2. De Apple Opdracht stuurt je link via de url door naar [een formulier](https://next.geensnor.nl/snelbericht/). Dit formulier is eigenlijk een soort mini CMS die alles om zet naar een Markdown bestand met de juiste inhoud. In het formulier kun je de titel en omschrijving nog aanpassen.
3. Dit formulier verzend vervolgens alle informatie weer naar GitHub waar alles op de juiste manier (Frontmatter enzo), in de juiste repository terecht komt. Je moet natuurlijk wel van tevoren ingelogd zijn op GitHub.
4. Even op Commit drukken en je link is gedeeld!

Elk bericht krijgt nu standaard de tag "Internet" mee, maar dat kan ook nog getweaked worden.

### Extra bonus

Soms is de link die je wilt delen, een YouTube video. Deze wil je natuurlijk het liefst mooi embedden in je site, maar zoals we al [eerder hebben uitgelegd](/privacy-action), gaat dat niet zonder de hele AVG op je nek te krijgen. Maar gelukkig hebben we daarvoor ook een oplossing gevonden! Niet alleen wordt een YouTube link gedetecteerd en automatisch geëmbed. Hij wordt ook automatisch omgezet naar het [youtube-nocookie.com](youtube-nocookie.com) domein, zodat er niet zomaar cookies worden geplaatst. Helemaal makkelijk, helemaal super!

## Meer lezen

- Artikel waar we inspiratie uit gehaald hebben: [https://css-tricks.com/generate-a-pull-request-of-static-content-with-a-simple-html-form/](https://css-tricks.com/generate-a-pull-request-of-static-content-with-a-simple-html-form/)
- Een blog van iemand die iets vergelijkbaars met een Bookmarklet doet: [https://nicolas-hoizey.com/articles/2023/02/08/a-bookmarklet-to-create-a-new-link-content-markdown-on-github/](https://nicolas-hoizey.com/articles/2023/02/08/a-bookmarklet-to-create-a-new-link-content-markdown-on-github/)
