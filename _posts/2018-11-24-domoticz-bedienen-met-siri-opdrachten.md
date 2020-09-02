---
id: 1038
title: Domoticz bedienen met Siri Opdrachten
date: 2018-11-24T12:38:49+01:00
author: Joris
layout: post
guid: https://www.geensnor.nl/wp/?p=1038
permalink: /domoticz-bedienen-met-siri-opdrachten/
image: /wp-content/uploads/2018/11/Schermafbeelding-2018-11-24-om-12.38.13.png
categories:
  - Internet
  - Spullen
  - Tips
---
# Het probleem

Als je een partij &#8220;slimme&#8221; lampen en stopcontacten hebt van verschillende merken, is de kans klein dat ze allemaal worden ondersteund door Homekit van Apple. In mijn geval in elk geval niet. Hierdoor kun je niet zomaar tegen Siri roepen &#8220;Hey Siri, alle lampen uit!&#8221;. Maar met een omweg is er misschien toch een oplossing&#8230;..

# De oplossing

Domoticz snapt alles. Al het slimme spul (hier tenminte) heeft wel een of ander haakje waar Domoticz mee overweg kan. Doordat Domoticz zelf ook weer API&#8217;s heeft kun je via Domoticz dus best veel regelen. Alle lampen in huis kan ik bijvoorbeeld uitzetten door deze regel aan te roepen:

> http://192.168.1.15:8084/json.htm?type=command&param=switchlight&idx=62&switchcmd=Off 

Je hebt dan alleen nog iets nodig wat die API van Domoticz gaat gebruiken. En daarvoor heeft Apple sinds iOS 12 [Siri Opdrachten](https://itunes.apple.com/nl/app/opdrachten/id915249334?mt=8) voor. Met deze App wil Apple Siri wat meer open gooien voor gebruikers zodat ze niet nog verder achterop komen tov Google Home en Amazone Echo. Met Siri Opdrachten kun je een opdracht maken die de bovenstaande API aanroept. De opdracht wordt uitgevoerd als je een zelfgekozen uitspraak doet. &#8220;Alle lampen uit&#8221; bijvoorbeeld.

Als je dan dus tegen je telefoon roept &#8220;Hey Siri, Alle lampen uit&#8221; wordt de opdracht uitgevoerd die de API van Domoticz aanroept die dan vervolgens alle spullen uitzet. Ook als ze geen Homekit ondersteunen en ook als ze totaal niet samenwerken met je Apple spul.

# Echter&#8230;

Op een of andere manier moet je wel je iPhone hebben unlocked voordat dit werkt. Eigenlijk wordt dit hele verhaal dan weer voor een groot gedeelte nutteloos want dan moet je alsnog naar je iPhone toe. Maar goed, misschien valt daar nog iets op te vinden&#8230;