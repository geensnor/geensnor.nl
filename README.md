# Geensnor.nl

De website van [geensnor.nl](https://www.geensnor.nl).

Met pareltjes als:

- Geensnor.nl maakt gebruik van de [Geensnor Astro Componenten](https://github.com/geensnor/astro-componenten) en die componenten maken weer gebruik van de [Geensnor Design Tokens](https://github.com/geensnor/tokens). Allemaal gruwelijk onhandig als er ergens iets verkeerd staat, maar dat mag de pret niet drukken.
- We halen met behulp van een [maatwerk Remark plugin](https://github.com/geensnor/geensnor.nl/blob/main/remark-rules/remark-lint-no-utm.js) alle UTM-parameters (Urchin Tracking Module) uit de links. Hiermee gooien we flink wat zand in de raderen in de advertentiemachine van Google.
- We gebruiken onze eigen [Vale regels](https://github.com/geensnor/geensnor-stijl-vale) om de geheel eigen prozastijl van Geensnor te controleren en te borgen.
- We gebruiken [human.json](https://codeberg.org/robida/human.json) om te bewijzen dat er echte mensen achter al dit moois zitten. 
- De [Astro broken link checker](https://github.com/imazen/astro-broken-link-checker) zorgt ervoor dat de interne links goed blijven werken.
- Uiteraard zijn [Prettier](https://prettier.io/), [ESLint](https://eslint.org/) en [Remark](https://remark.js.org/) van de partij om het een en ander in goede banen te leiden.