---
title: Automatisch deployen met je static site
author: Joris
permalink: /static-en-actions/
categories:
 - Geensnor
 - Internet
---
Als je zoals geensnor.nl een static site [hebt](/geensnor-gaat-static/), kun je niet zomaar meer dynamische dingen doen. Uitgesteld publiceren of automatisch een berichtje plaatsen op [Twitter](https://twitter.com/geensnor) werken niet meer omdat je site gewoon een beetje static staat te staan de hele tijd. Hoe zorg je er dan voor dat de boel af en toe toch nog een beetje in beweging komt? Een beetje "action" zo je wilt.....

## GitHub Actions
Nou, dat kan dus met [GitHub Actions](https://github.com/features/actions). Met GitHub Actions kun je je software workflow automatiseren. Het maakt gebruik van [YAML](https://en.wikipedia.org/wiki/YAML) en met behulp van  kun je eigenlijk alles in elkaar scripten. Er is zelfs een volwaardig [IFTTT](https://ifttt.com/) alternatief, volledig gebaseerd op GitHub Actions: [Actionsflow](https://github.com/actionsflow/actionsflow). 

## Automatisch naar Netlify
De onvolprezen ontwikkelafdeling van geensnor.nl heeft het onderstaande scriptje in de [repository](https://github.com/geensnor/geensnor.nl/blob/master/.github/workflows/main.yml) gezet. Hierdoor wordt elke nacht om 12:01 een Webhook van Netlify aangeroepen die de hele handel van GitHub afhaalt en opnieuw op [Netlify](https://geensnor.netlify.app/) zet. Op die manier wordt de site opnieuw in elkaar gezet en worden nieuwe berichten gepubliceerd. Je zou hier bijvoorbeeld ook nog wat voor Slack, Telegram, Twitter ofzo aan toe kunnen voegen. 



```
name: Trigger Netlify Build
on:
  schedule:
    - cron: '1 0 * * *' # Elke nacht om 0:01
jobs:
  build:
    name: Request Netlify Webhook
    runs-on: ubuntu-latest
    steps:
      - name: Curl request
        run: curl -X POST -d {} ${{ secrets.BUILD_HOOK }}
```

Voor nu zorgt dit script er in elk geval voor dat de bezoekers van geensnor.nl verzekerd zijn van de meest actuele content op hun favorite weblog!