---
layout: post
title: Automatisch deployen met je static site
author: Joris
permalink: /static-en-actions/
categories:
 - Geensnor
 - Internet
---

Stukje code
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

