---
id: 618
title: 'NCSC&#8230;daar maak je vrienden mee!'
date: 2014-10-15T20:49:32+02:00
author: Erik
layout: post
guid: https://www.geensnor.nl/wp/?p=618
permalink: /ncsc-daar-maak-je-vrienden-mee/
categories:
  - Internet
---
<img class="alignnone" src="https://www.linuxpro.nl/site/wp-content/uploads/2013/12/ncsc.png" alt="" width="230" height="173" />

En toen hadden we de NCSC (Nationaal cyber security centrum) in de mail van de redactie alhier. Commotie&#8230;er gebeurd weer eens wat 🙂

> <p style="padding-left: 30px;">
>   <em>Op verzoek van het Nationaal Cyber Security Centrum (NCSC) van de Nederlandse Overheid en SIDN, de beheerder van .nl-domein, informeren wij u over het volgende: uw website &#8211; geensnor.nl &#8211; is slachtoffer geworden van een zogenaamde SQL-injectie. Het NCSC adviseert u om direct maatregelen te nemen en SIDN ondersteunt dit van harte.</em>
> </p>
> 
> <p style="padding-left: 30px;">
>   <em>Wat is een SQL-injectie?</em><br /> <em>&#8230;..(uitlegje . red.)</em>
> </p>
> 
> <p style="padding-left: 30px;">
>   <em>Wat kunt u doen?</em><br /> <em>(handige factsheets mede mogelijk gemaakt door  de overheid. red. )</em>
> </p>
> 
> <p style="padding-left: 30px;">
>   <em>Het gaat om de onderstaande link(s):</em>
> </p>
> 
> <p style="padding-left: 30px;">
>   <em>02.06.2014 &#8211; &#8220;https://www.geensnor.nl/geensnor/index.php?page=bericht&iid=11718&quote=-1%27&#8221;</em>
> </p>

Wij hebben direct onze beste mensen op de situatie gezet. Dit soort zaken moet je inderdaad niet onderschatten! De hemel geprezen en we hebben echt geluk gehad&#8230;want de situatie is weer onder controle! Pfffff oog van de naald..wat ik je brom.

Frappant echter wel dat het allemaal een storm in een glas water bleek. Er was namelijk helemaal geen SQL injectie, er was nooit toegang tot de DB en het enige wat er misging is dat je via een querystring in de URL iets direct in het reactieveld kon meegeven. Iets wat misschien slordig is maar absoluut geen hack. Er is geen beveiliging doorbroken en geen toegang tot systemen geweest. Eigenlijk gewoon bang makerij vanuit de overheid dus.