webpackJsonp([50,4],{269:function(e,t){e.exports={rawContent:'\r\nL’astuce CSS du jour, c’est à **Christian Schaefer** et **TheCSSNinja** qu’on la doit.\r\n\r\n> [@paul_irish](https://twitter.com/paul_irish) Easy. Apply "pointer-events: none" to the body on scrollstart and remove it on scrollend. [@tabatkins](https://twitter.com/tabatkins)\r\n> &mdash; Christian Schaefer (@derSchepp) [12 Novembre 2013](https://twitter.com/derSchepp/statuses/400394164350644224)\r\n\r\n\r\n## c’est quoi donc le problème, dis ?\r\n\r\nIl est question ici d’un problème que certains d’entre vous ont pu rencontrer, si vous avez bossé sur un portfolio ou n’importe quel site avec beaucoup de contenu réagissant à l’action du visiteur et plus précisément au survol du curseur (ce qu’on appelle, dans le jargon des _développeux_, le "hover") : lorsque l’on _scrolle_ dans la page, si le curseur survole lesdits éléments, une latence se fait sentir. Et effectivement, si on utilise les outils de _monitoring_ des différents navigateurs, on remarque que ça prend pas mal de ressources d’un seul coup (en plus d’être moche à l’utilisation).\r\n\r\n## Mais que faire ?\r\n\r\nSuivant le _tweet_ mis en lumière plus haut, et l’article de TheCSSNinja, voici un simple petit bout de code à appliquer dans vos pages web pour résoudre le problème. En substance, il s’agit d’appliquer une classe sur body, qui désactive la réactivité des éléments aux actions du curseur, et de la retirer lorsque le défilement est terminé.\r\n\r\nVoici le code CSS en question :\r\n\r\n```css\r\n.disable-hover {\r\n\tpointer-events: none;\r\n}\r\n```\r\n\r\nNotez que la propriété pointer-events cause une erreur dans la validateur CSS du W3C. {.c-note .c-note--important}\r\n\r\nMaintenant, un peu de Javascript :\r\n\r\n```javascript\r\nvar body = document.body,\r\n\ttimer;\r\n\r\nwindow.addEventListener(\'scroll’, function() {\r\n\r\n\tclearTimeout(timer);\r\n\r\n\tif(!body.classList.contains(\'disable-hover\'))\r\n\t\tbody.classList.add(\'disable-hover\')\r\n\r\n\ttimer = setTimeout(function(){\r\n\t\tbody.classList.remove(\'disable-hover\')\r\n\t}, 200);\r\n\r\n}, false);\r\n```\r\n\r\nEt voilà !\r\n\r\n## Conclusature\r\n\r\nJe n’avais jamais été confronté moi-même à ce "bug", attendu que mon navigateur principal (IE) désactive de lui-même les _pointer events_ lorsqu’on fait défiler une page. Piqué de curiosité en lisant l’article, j’ai donc fait le test sur Chrome et Firefox, pour constater qu’effectivement… Ouch. Je reprend donc ici la moelle de l’article en question, d’une part afin de ne pas oublier cette astuce, d’autre part afin que les anglophobes puissent en bénéficier aussi.\r\n\r\nSource : [TheCSSNinja.com](http://www.thecssninja.com/javascript/pointer-events-60fps){ target="_blank" } - Thanks !\r\n',metaData:{title:"Désactiver le :hover pour un scroll fluide",image:"https://images.emmanuelbeziat.com/social-default-fb.jpg",date:"2013-11-28 17:07:44",tags:["html/css","javascript","bonnes pratiques"],clients:[""],categories:["Tutoriels"],template:"post",description:"",disqus:!0,publish:!0}}}});
//# sourceMappingURL=50.9313b8bce77f0185f072.js.map