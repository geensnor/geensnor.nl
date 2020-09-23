---
id: 401
title: Amai, amai, ik heb een Raspberry Pi
date: 2014-05-21T15:00:43+02:00
author: Joris
layout: post
guid: https://www.geensnor.nl/wp/?p=401
permalink: /amai-amai-ik-heb-een-raspberry-pi/
categories:
  - Uncategorized
tags:
  - klooien
  - raspberry pi
---
<img class="alignnone" src="https://upload.wikimedia.org/wikipedia/commons/4/45/Raspberry_Pi_-_Model_A.jpg" alt="" width="600" height="600" />

De Raspberry Pi, wie kent hem niet. Het kleine computertje waarmee je alles kan maken volgens het internet. Onlangs ben ik in het bezit gekomen van dit kleinood (nogmaals bedankt, mensen die hieraan hebben meegewerkt) en ben ik de wondere wereld van Linux en Raspbian (Debian voor de Raspberry) gedoken. Omdat ik heel wat dingen ben tegengekomen die (voor mij) wel en niet werkte, hieronder een kleine lijst met tips voor als je er zelf ook een hebt en niet de helft van de tutorials op internet wilt proberen.

  1. Ga niet stoer lopen doen met je eigen gecompileerde OpenBSD ofzoiets maar gebruik gewoon NOOBS Lite: <https://www.raspberrypi.org/downloads/> NOOBS is voor noobs en dat ben jij, anders was je dit niet aan het lezen. NOOBS kun je gewoon op je SD kaartje gooien en de rest gaat bijna vanzelf. Desktop meuk zit erbij, alles wordt lekker via internet binnengehaald en binnen korte tijd ben je helemaal het mannetje met NOOBS op je Pi.
  2. Voordat je overactieve DHCP server je nieuwe Pi telkens met een nieuw IP opzadelt, is het handig om hem een vast IP adres te geven. Ik heb dit zelf nog niet gedaan, maar deze tutorial ziet er veelbelovend uit:  [https://www.modmypi.com/blog/tutorial-how-to-give-your-raspberry-pi-a-static-ip-address](%20https://www.modmypi.com/blog/tutorial-how-to-give-your-raspberry-pi-a-static-ip-address)
  3. Tot op dit moment heb je je Pi waarschijnlijk aan een monitor, toetsenbord en muis hangen. Wellicht wil je die spullen nog ergens anders voor gaan gebruiken en is het wel handig als je remote bij de desktop van je Pi kan. Daarvoor moet je hier zijn: <https://www.jeremymorgan.com/tutorials/raspberry-pi/how-to-remote-desktop-raspberry-pi/> Deze tutorial beschrijft hoe je XRDP aan de gang krijgt. Vervolgens download je Microsoft Remote Desktop op je Mac (gratis in de Appstore, als je een Mac hebt) en kun je Pi benaderen. Dat kan natuurlijk ook via SSH, maar dit is ook wel handig. Bovendien kun je vanaf je Mac, via Microsoft spullen naar je Linux machientje. Opzich al iets om even stil bij te staan.
  4. Tot slot wil waarschijnlijk ook iets doen met je Pi. Een van de dingen die je kan doen is Bittorrent Sync en Owncloud erop zetten zodat je je eigen Dropbox kan beginnen. Als je dit wat lijkt moet je hier zijn: <https://blog.bittorrent.com/2013/05/23/how-i-created-my-own-personal-cloud-using-bittorrent-sync-owncloud-and-raspberry-pi/>. Dit is best eenvoudig, maar Owncloud duurt best lang.

Misschien wordt deze post nog aangevuld met nieuwe tips en trucs maar waarschijnlijk ben je hier wel de eerste tijd mee zoet.

-Update 22 mei-

Hier is de eerste update alweer. In de NOOBS instructie ([https://www.raspberrypi.org/help/noobs-setup/ ](https://www.raspberrypi.org/help/noobs-setup/), onder het filmpje met de enthousiaste, lelijke vrouw) staat dat je je SD kaartje eerst moet formatteren met een tooltje van de site <https://www.sdcard.org/home/>. Ik ben erachter gekomen dat je dat ook ECHT moet doen. Ik kreeg namelijk last van partities die precies zo groot waren als mijn besturingssysteem. Dat is niet zo handig als je nog dingen wilt installeren. Tot nu toe lijkt alles goed te gaan.