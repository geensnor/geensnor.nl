---
title: Semantische recepten
author: Joris
permalink: /semantische-recepten/
categories:
  - Internet
  - Geensnor
---



Sinds jaar en dag voorziet geensnor.nl menig culinair talent met inspiratie. Op [geensnor.nl/watetenwevandaag](https://www.geensnor.nl/watetenwevandaag) staan talloze heerlijke en verantwoorde recepten. Deze recepten zijn wel allemaal heel lekker, maar qua semantiek schortte er nog wel eens wat aan. En dat proef je uiteindelijk toch.... Gelukkig is dit probleem sinds korte tijd opgelost en draaien ook de recepten van Geensnor mee in de wondere wereld van het Semantisch Web.



## Semantisch Web?

Ja, kinderen het Semantisch Web. Opa is nu even aan het woord. Vroeger, aan het begin van deze eeuw, lang voor de oprichting van geensnor.nl was het Semantisch Web hot and happening. Ging het niet over de mond-en-klauwzeer, Rintje Ritsma of Nina Brink, dan ging het wel over het Semantische Web. XML was hagelnieuw en Tim Berners-Lee [droomde](https://www.youtube.com/watch?v=HeUrEh-nqtU) van een internet waarbij de content niet alleen iets voor mensen betekende, maar ook voor computers. De informatie op internet moest metadata mee gaan krijgen die betekenis gaf aan de titels, woorden, artikelen, namen, etc.. Hierdoor zou je het hele internet kunnen gaan gebruiken als een soort database waarbij alle beschikbare informatie gekoppeld kan worden. Fantastisch plan Tim! 

Sindsdien zijn we allemaal ouder en wijzer geworden en ook het Semantisch Web heeft niet stilgestaan. Zo'n beetje elke blogpost (ook deze) bevat wel metadata om aan te geven dat het een blogpost is. Ook bijvoorbeeld Wikipedia staat helemaal strak van de metadata. Zoekmachines worden erg blij van al die metadata. Verder helpt het bij de datauitwisseling tussen systemen.



## Jaja, en die recepten dan?

Recepten hebben [hun eigen schema](https://schema.org/Recipe) op [schema.org](schema.org). Zo'n schema beschrijft voor een bepaald type document op het internet, welke eigenschappen zoiets kan hebben. Een recept heeft bijvoorbeeld [prepTime](https://schema.org/prepTime) die aangeeft hoe lang het duurt om het gerecht bereiden. Als dat schema goed wordt gebruikt, kun je zo'n recept heel makkelijk uitwisselen tussen verschillende sites en apps.

De recepten op [geensnor.nl/watetenwevandaag](geensnor.nl/watetenwevandaag) zijn nu ook helemaal semantisch. Hierdoor kun je nu bijvoorbeeld de URL van [een gerecht](https://geensnor.nl/watetenwevandaag/detail.php?r=gnocchicourgettetomaat.md) in een app als [crouton.app](https://crouton.app) plakken en dan wordt het recept automatisch op de juiste manier opgeslagen. 

De recepten zijn opgeslagen als markdown en dus zonder metadata. De metadata wordt er tijdens runtime "bij verzonnen". Daar zitten wel wat regels aan verbonden en het is niet waterdicht. Zo moet er bijvoorbeeld perse "Ingredienten" boven de lijst met ingredienten staan, anders snapt hij het niet en loopt de boel alsnog semantisch in het honderd.