---
title: Geensnor op Astro
author: Joris
date: 2026-03-25
categories:
  - Internet
  - Geensnor
---

![Astro, heel vet](/src/assets/posts/astro.png)

Nadat [De Digitale Tuin](https://www.dedigitaletuin.nl) al jaren over was, hebben we nu ook de blog overgezet naar Astro. Stukje consolidatie van de stack zullen we maar zeggen. Tot voor kort maakte we gebruik van Jekyll, maar daar was geen land meer mee te bezeilen.

## Nieuwe features

As-is overgaan van Jekyll op Astro is natuurlijk onze eer te na. We willen mee in de vaart der volkeren! Vandaar ook dat we een behoorlijke partij nieuwe features hebben gerealiseerd op Astro. Zoals daar zijn:

- Geensnor.nl maakt gebruik van de [Geensnor Astro Componenten](https://github.com/geensnor/astro-componenten) en die componenten maken weer gebruik van de [Geensnor Design Tokens](https://github.com/geensnor/tokens). Allemaal gruwelijk onhandig als er ergens iets verkeerd staat, maar dat mag de pret niet drukken.
- We halen met behulp van een [maatwerk Remark plugin](../../../remark-rules/remark-lint-no-utm.js) alle UTM-parameters (Urchin Tracking Module) uit de links. Hiermee gooien we flink wat zand in de raderen in de advertentiemachine van Google.
- We gebruiken onze eigen [Vale regels](https://github.com/geensnor/geensnor-stijl-vale) om de geheel eigen prozastijl van Geensnor te controleren en te borgen.
- Uiteraard zijn [Prettier](https://prettier.io/), [ESLint](https://eslint.org/) en [Remark](https://remark.js.org/) van de partij om het een en ander in goede banen te leiden.
- Astro kent een paar mooi [View Transitions](https://docs.astro.build/en/guides/view-transitions/) waar we dankbaar gebruik van hebben gemaakt. Zo transit je veel mooier van view naar view.
- We gebruiken [human.json](https://codeberg.org/robida/human.json) om te bewijzen dat er echte mensen achter al dit moois zitten. Hierover later nog meer want dat verdient een eigen post!
