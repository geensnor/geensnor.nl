---
title: Gezichten in Exif viben
author: Joris
categories:
  - Tips
  - Internet
---

![Slob](../assets/posts/slob.jpeg)

De AI slob gutst de laatste tijd door de burelen van Geensnor, als de dunne poep door het broekspijpje van een peuter. De nieuwste veer op [deze](https://www.wegmetbigtech.nl/) [bonte](https://klimpunten.geensnor.nl) [tooi](https://github.com/geensnor/Stages-Scraper), is [een Python script](https://github.com/geensnor/faces-exif) die informatie over personen en gezichten vastlegt in Exif. Dit is de essentie wel zo'n beetje. Weet je nu genoeg? Dan kun je stoppen met lezen. Benieuwd naar de hemelbestormende idealen achter deze slob schuilgaan of wat tijd over? Lees dan door! (ik pas hier vrij opzichtig het [Pyramid Principe](https://www.toolshero.nl/communicatie-modellen/minto-piramide-principe/) toe. Dat zouden meer mensen moeten doen.)

## Gegijzelde gezichten

Gezichten taggen in foto's is hartstikke leuk. Maar het wordt snel minder leuk als je je realiseert dat elke gezicht die je tagt, daarna opgesloten zit in de betonnen silo's van [Big Tech](https://www.wegmetbigtech.nl/). Want denk maar niet dat (bijvoorbeeld) Appel Foto's die leuke snuutjes wegschrijft in de Exif van je foto. Apple houdt de gezichten van je geliefden gegijzeld in haar koude, zielloze tentakels. Om over de [fascisten steuners uit Mountain View](https://www.404media.co/google-has-chosen-a-side-in-trumps-mass-deportation-effort/) maar te zwijgen....

## Free gezichten!

Om vrije, blije gezichten te krijgen is het belangrijk om ze te taggen met een programma die de tags redelijk transparant vastlegt. Een programma wat dat doet is [Tonfotos](https://tonfotos.com/). Tonfotos is bovendien lekker lokaal en waarschijnlijk ook Small Tech. Tonfotos legt de getaggede gezichten vast in een JSON array in `.tonfotos.ini`. Heel makkelijk om uit te lezen. Vervolgens moeten de gezichten nog in de Exif gestopt worden. Daarvoor maken we gebruik van de oerdegelijke [Exiftool](https://exiftool.org/). En zo is er weer een kleine stap gezet in de de [strijd met Big Tech](https://www.wegmetbigtech.nl)!
