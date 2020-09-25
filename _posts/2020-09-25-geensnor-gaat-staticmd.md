---
title: 'Geensnor gaat static'
author: Joris
layout: post
guid: https://www.geensnor.nl/wp/?p=169
permalink: /geensnor-gaat-static/
categories:
  - Internet
  - Geensnor
---
Geensnor gaat met de tijd mee. Sinds 3 maart 2014 maakt [geensnor.nl](https://www.geensnor.nl) gebruik van Wordpress. Maar omdat Wordpress een beetje crappy is en static sites helemaal het ding zijn tegenwoordig, kon geensnor natuurlijk niet achterblijven. Vanaf vandaag is geensnor ook static!

## Static
Een static site houdt in dat de hele site uit platte HTML pagina's bestaat. Beetje back to the nineties dus. De HTML  pagina's worden tijdens "build time" gegenereerd. De site wordt gebuild als we bijvoorbeeld een nieuw bericht toevoegen of de layout aanpassen. Niet-static sites (wordpress) worden gebuild tijdens "runtime" als de gebruiker de pagina bezoekt. Doordat er erg weinig op de server gebeurt en het "maar" HTML pagina's zijn, laadt de boel veel sneller. Ook kun je een static site makkelijker overal neerzetten omdat je alleen een webserver nodig hebt. 

## Hoe werkt het
Het builden gebeurt met [Jekyll](https://jekyllrb.com/). Jekyll voegt de content en templates samen tot een platte HTML website. De templates zijn speciaal voor geensnor.nl gemaakt door de ontwikkelafdeling. Jekyll kun je lokaal draaien om te kijken of de wijzigingen er een beetje goed uitzien. Als alles bon is, wordt de hele handel naar een [GitHub repository](https://github.com/geensnor/geensnor.nl) gepushed. GitHub geeft vervolgens een seintje aan [Netlify](https://geensnor.netlify.app/). Netlify vist de code van GitHub af, build de site en toont hem op [geensnor.netlify](https://geensnor.netlify.app/). Er is verder geen CMS om op in te loggen of iets dergelijks.

Ene Mike Dane heeft een aardige [playlist op YouTube](https://www.youtube.com/playlist?list=PLLAZ4kZ9dFpOPV5C5Ay0pHaa0RJFhcmcB) over Jekyll. Interessant als je er meer van wil weten.