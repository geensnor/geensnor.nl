---
title: Wees eens wat kritischer op je extensies!
author: Erik
categories:
  - Internet
  - Security
---

Browserextensies, wie is er niet groot mee geworden? Sure, het is allemaal retehandig, maar het is niet helemaal zonder risico. Geensnor belicht de andere kant!

## Browserextensies?

Browserextensies zijn als kleine toverdoosjes voor je webbrowser! Ze voegen extra functies toe en maken je online leven een stuk makkelijker. Denk aan dingen zoals het blokkeren van vervelende advertenties, het veilig opslaan van je wachtwoorden, of zelfs het aanpassen van de look van je favoriete websites.

Je kunt ze eenvoudig installeren vanuit de webwinkel van je browser, zoals de Chrome Web Store of de Firefox Add-ons. Het is net alsof je je browser een upgrade geeft met handige tools die precies passen bij jouw surfstijl. Superpopulaire browserextensies zijn bijvoorbeeld Adblock en uBlock Origin.

## Risico's

Ik hoor je al denken, dat klinkt eigenlijk allemaal te mooi om waar te zijn en hoe kan ik ooit zonder. Dat weet ik ook niet, maar ik kan je wel wijzen op serieuze securityrisico's. Want welke rechten heb je die extensie eigenlijk gegeven toen je hem installeerde (ik gok dat je rechten hebt gegeven op alle tabbladen). En wie schrijft die extensie eigenlijk? (Gokje, een puber ergens op een zolderkamer in IJsland). In de praktijk is het vaak totaal onduidelijk wie de ontwikkelaar van een extensie is.

Browserextensies hebben (te) vaak flinke rechten gekregen op je systeem. Bijvoorbeeld toegang tot alle browserdata, over alle tabs. En die extensies worden volautomatisch bijgewerkt, dus iets wat nu veilig lijkt, is het dan opeens niet meer omdat de maker zelf de boel niet op orde had en iemand een louche commit mocht pushen. In [dit artikel](https://www.darkreading.com/cloud-security/more-than-half-of-browser-extensions-pose-security-risks) zijn 300.000 extensies onderzocht en hebben er meer dan de helft zulke vergaande rechten om de boel goed om zeep te helpen.

> The study showed 51% of all installed extensions were high risk and had the potential to cause extensive damage to the organizations using them. The extensions all had the ability to capture sensitive data from enterprise apps, run malicious JavaScript, and surreptitiously send protected data including banking details and login credentials to external parties.

En dat gaat dus ook wel eens serieus mis. Een malafide Roblox-extensie (200.000 installs), fake ChatGPT-extensie die je [FB-account hijackt](https://www.darkreading.com/application-security/chatgpt-browser-extension-hijacks-facebook-business-accounts) (9000+ installs).

## En nu dan?

Nu moet je het helemaal zelf weten wat je met je browser doet, maar mijn tip zou toch zijn om eens kritisch naar dat lijstje guitige icoontjes te kijken daar rechtsboven je browserwindow. Wat voor ontwikkelaars zitten er nou echt achter, hoe is het track record, hoeveel rechten heb je de extensie eigenlijk gegeven?

Als je eens echt kritisch kijkt, geef je onbekende software vergaande lees- (en schrijf)rechten op je browser. En aangezien je tegenwoordig al je gevoelige informatie via je browser deelt, mag je daar wel eens wat zuiniger mee omgaan.

In mijn browser zitten op het moment van schrijven 3 extensies (Statshunters, Shodan en Cookie Quick Manager), maar ik heb zojuist Shodan en die cookie-dinges ook maar uitgezet. Minder is veiliger... en sneller :)

## Weet niemand anders dit dan??

Natuurlijk wel, en ze schrijven er ook over!

- [Kaspersky "Dangerous Browser Extensions"](https://www.kaspersky.com/blog/dangerous-browser-extensions-2023/50059/)
- [Darkreading "More Than Half of Browser Extensions Pose Security Risks"](https://www.darkreading.com/cloud-security/more-than-half-of-browser-extensions-pose-security-risks)
- [Medium "Navigating the Hazards: Safeguarding Against the Risks of Browser Extensions"](https://medium.com/@hegde.sateesh/navigating-the-hazards-safeguarding-against-the-risks-of-browser-extensions-bfaa3701eda1)
