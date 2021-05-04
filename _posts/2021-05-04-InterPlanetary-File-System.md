---
title: InterPlanetary File System - update
author: Joris
permalink: /InterPlanetary-File-System/
categories:
  - Internet
  - Geensnor
---

Eens in de zoveel tijd krijg ik de onbedwingbare behoefte om iets met het InterPlanetary File System (IPFS) te doen. Ik heb geen plan of doel, maar iets in mij zegt dat ik sites en bestanden dit peer-to-peer bestandsysteem op moet gooien. Laatst was het weer zover...

![stockfoto van een netwerk ter opleuking](https://images.unsplash.com/photo-1545987796-200677ee1011?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80)


## IPFS

[IPFS](https://ipfs.io/) is een peer-to-peer bestandsysteem op het internet. Vergelijk het met HTTP. Maar anders dan bij HTTP heb je geen centrale server en geen URL's. In plaats van een server heb je peers in het netwerk. In plaast van URL's, krijgt elk bestand z'n eigen hash. Dit is ook een van de belangrijkste verschillen: HTTP is locatie gebaseerd (content staat op URL) en IPFS content gebaseerd (Hash van content). 

Zodra je je website op IPFS "zet", wordt je site in stukken geknipt en worden de losse onderdelen over het IPFS netwerk verdeeld. Als iemand je site wil bekijken worden al die stukken weer bij elkaar gezocht en wordt de website getoond. Waar ik zeg website kun je ook video of afbeelding lezen. Files dus. Het leuke van hashing is natuurlijk dat twee dezelfde bestanden, dezelfde hash opleveren. Als twee identieke bestanden los van elkaar op IPFS worden gezet, worden die door IPFS als echt dezelfde bestanden gezien. Dat scheelt weer opslagruimte, overdracht en dubbele data.


## Zelf doen

Iedereen kan in z'n browser IPFS sites bekijken. Doordat browsers doorgaans alleen met HTTP werken, gaat dat wel via een gateway. Als je achter [https://ipfs.io/ipfs/](https://ipfs.io/ipfs/) de hash van een site plakt, wordt de site opgehaald en kun je hem bekijken. Hier kun je bijvoorbeeld een foto van een bierdopje bekijken: [https://ipfs.io/ipfs/QmRL3kadYto4kjDk1eUbjTW4UywikHwEcLKRfRKoUDEZht](https://ipfs.io/ipfs/QmRL3kadYto4kjDk1eUbjTW4UywikHwEcLKRfRKoUDEZht). Er zijn ook [plugins](https://github.com/ipfs/ipfs-companion) voor allerlei browsers te krijgen en de [Brave](https://brave.com) browser kan het native.

## Pinnen

IPFS hangt van de caching aan elkaar. Om ervoor te zorgen dat je bestanden daadwerkelijk ergens blijven staan en niet telkens uit allerlei caches worden geveegd, kun je bestanden "pinnen". Je geeft dan eigenlijk aan dat de cache van de bestanden moet blijven bestaan. Als iemand dan het bestand wil opvragen, zijn in elk geval de gepinde bestanden beschikbaar. Pinnen is vaak niet gratis omdat het schijfruimte kost. Er services als bijvoorbeeld [pinata.cloud](https://pinata.cloud) waar de eerste Gigabyte pinnen gratis is.

Een andere manier om anderen ervan te overtuigen om jouw bestanden op te slaan, is om ze om te betalen. Betalen doen we tegenwoordig natuurlijk alleen nog via Cryptocurrencies en voor IPFS is ook een coin bedacht: de [Filecoin](https://filecoin.io/build/#tools-and-more). Hoe die vork precies in z'n steel zit weet ik niet, maar er heeft vast iemand over nagedacht. 

## Name servers

Elk bestand een eigen hash klinkt leuk, maar er kleeft ook een dik nadeel aan. Telkens als je je website aanpast verandert de hash en ben je dus je hash/adres kwijt. Het "oude" internet heeft een (ongeveer) vergelijkbaar probleem al een tijdje geleden opgelost met Name servers. IPFS heeft hiervoor iets vergelijkbaars: [Interplanetary Name System](https://docs.ipfs.io/concepts/ipns/). Je kan dan updates onder dezelfde hash blijven publiceren. Je hebt dat nog steeds niet echt een "naam" voor je site, maar de hash blijft in elk geval hetzelfde. Het probleem van de namen kan weer opgelost worden met [DNSLink](https://docs.ipfs.io/concepts/dnslink/#publish-content-path). Good old DNS dus eigenlijk.

## Geensnor en IPFS

Wij van Geensnor steken natuurlijk altijd wel even onze spreekwoordelijke teen in het water als het gaat om dit soort onderwerpen. De website van [Omloop De Snor](https://www.omloopdesnor.nl) (3 juli a.s., allemaal meedoen!! yeah!) staat tegenwoordig ook op IPFS en wel op dit adres:
[https://gateway.pinata.cloud/ipfs/QmZoiUzC9YmgZF1gWX3AKPmiorDhjzs5UcijVbTk188cfq](https://gateway.pinata.cloud/ipfs/QmZoiUzC9YmgZF1gWX3AKPmiorDhjzs5UcijVbTk188cfq/)
Dit is zonder IPNS, dus op het bovenstaande adres zul je nooit een update zien. Maar met behulp van een [GitHub Action](https://github.com/geensnor/OmloopDeSnor-website/blob/master/.github/workflows/main.yml) wordt elke update van [Omloop De Snor](https://www.omloopdesnor.nl) automatisch gepind bij [pinata.cloud](https://pinata.cloud). Ik durf bij deze wel te stellen dat onze eigen Omloop De Snor de enige tourtocht is waarvan de website bij elke update automatisch op IPFS wordt gezet. Een goede reden om op 3 juli mee te rijden!

### Update: Geensnor pin overzicht

Om wat orde te scheppen in alle pinnen, hebben we even een pin overzicht gemaakt: [geensnor.nl/ipfs](http://geensnor.nl/ipfs/). Hier staan alle IPFS pinnen van geensnor.nl die bij Pinanta zijn gepind. Elke nieuwe versie van (bijvoorbeeld) de website van Omloop de Snor, zorg voor een nieuwe pin. Het kan zijn dat we er af en toe wat opruimen. Als je erg gehecht bent aan een specifieke versie, kun je hem natuurlijk altijd zelf pinnen.

