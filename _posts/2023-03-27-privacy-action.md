---
title: Privacy Action!
author: Joris
categories:
  - Internet
  - Geensnor
---

Geensnor.nl heeft geen cookiemelding. Die hebben we niet omdat we ook geen cookies gebruiken. Soms willen we echter wel een leuke YouTube video plaatsen om de verhalen hier extra schwung te geven. Dan is het wel opletten geblazen, want YouTube wil toch graag zoveel mogelijk cookies en andere rommel over je heen storten. Om de redacteuren van Geensnor hierbij te helpen, hebben we sinds kort een speciale [GitHub Action](https://docs.github.com/en/actions).

![Plaatje van Midjourney om de boel wat op de leuken. Voegt weinig toe, ik weet het....](../assets/posts/privacy-action.jpg)

De Action kijkt of er er ergens in een post het domein `https://www.youtube.com` voorkomt. Als hij er een vindt, vervangt hij die door `https://www.youtube-nocookie.com`. Dit domein plaatst namelijk geen cookies waardoor we weer GDPR compliant zijn! Kan me voorstellen dat iedereen met een fatsoenlijke blog zoiets wil, en daarom staat deze Action onder aan dit bericht. De redacteuren kunnen natuurlijk ook gewoon goed opletten, maar toen de Action de eerste keer [draaide](https://github.com/geensnor/geensnor.nl/commit/decd649ac461da2a26405d9c289b7a49c7731024) heeft hij er toch maar weer mooi 15 posts recht gezet! Met een redactie als die van Geensnor kun je natuurlijk ook bijna niet voorkomen dat er af en toe iets doorheen schiet... Gelukkig hebben

## De action

Hieronder staat de Action als je hem wil gebruiken.

```yaml
name: YouTube no cookie find and replace
on: [push, pull_request]
jobs:
  yt-check:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Find and Replace www.youtube.com
        uses: jacobtomlinson/gha-find-replace@v3
        with:
          find: "https://www.youtube.com"
          replace: "https://www.youtube-nocookie.com"
          include: "_posts/**"
          regex: true
      - name: Push changes
        uses: ad-m/github-push-action@v0.6.0
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          branch: ${{ github.ref }}
      - uses: EndBug/add-and-commit@v9
```
