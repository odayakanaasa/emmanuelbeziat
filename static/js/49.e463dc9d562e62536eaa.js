webpackJsonp([49,4],{164:function(e,t){e.exports={rawContent:'\nL’astuce CSS du jour, c’est à **Christian Schaefer** et **TheCSSNinja** qu’on la doit.\n\n> [@paul_irish](https://twitter.com/paul_irish) Easy. Apply "pointer-events: none" to the body on scrollstart and remove it on scrollend. [@tabatkins](https://twitter.com/tabatkins)\n> &mdash; Christian Schaefer (@derSchepp) [12 Novembre 2013](https://twitter.com/derSchepp/statuses/400394164350644224)\n\n\n## c’est quoi donc le problème, dis ?\n\nIl est question ici d’un problème que certains d’entre vous ont pu rencontrer, si vous avez bossé sur un portfolio ou n’importe quel site avec beaucoup de contenu réagissant à l’action du visiteur et plus précisément au survol du curseur (ce qu’on appelle, dans le jargon des _développeux_, le "hover") : lorsque l’on _scrolle_ dans la page, si le curseur survole lesdits éléments, une latence se fait sentir. Et effectivement, si on utilise les outils de _monitoring_ des différents navigateurs, on remarque que ça prend pas mal de ressources d’un seul coup (en plus d’être moche à l’utilisation).\n\n## Mais que faire ?\n\nSuivant le _tweet_ mis en lumière plus haut, et l’article de TheCSSNinja, voici un simple petit bout de code à appliquer dans vos pages web pour résoudre le problème. En substance, il s’agit d’appliquer une classe sur body, qui désactive la réactivité des éléments aux actions du curseur, et de la retirer lorsque le défilement est terminé.\n\nVoici le code CSS en question :\n\n```css\n.disable-hover {\n\tpointer-events: none;\n}\n```\n\nNotez que la propriété pointer-events cause une erreur dans la validateur CSS du W3C. {.c-note .c-note--important}\n\nMaintenant, un peu de Javascript :\n\n```javascript\nvar body = document.body,\n\ttimer;\n\nwindow.addEventListener(\'scroll’, function() {\n\n\tclearTimeout(timer);\n\n\tif(!body.classList.contains(\'disable-hover\'))\n\t\tbody.classList.add(\'disable-hover\')\n\n\ttimer = setTimeout(function(){\n\t\tbody.classList.remove(\'disable-hover\')\n\t}, 200);\n\n}, false);\n```\n\nEt voilà !\n\n## Conclusature\n\nJe n’avais jamais été confronté moi-même à ce "bug", attendu que mon navigateur principal (IE) désactive de lui-même les _pointer events_ lorsqu’on fait défiler une page. Piqué de curiosité en lisant l’article, j’ai donc fait le test sur Chrome et Firefox, pour constater qu’effectivement… Ouch. Je reprend donc ici la moelle de l’article en question, d’une part afin de ne pas oublier cette astuce, d’autre part afin que les anglophobes puissent en bénéficier aussi.\n\nSource : [TheCSSNinja.com](http://www.thecssninja.com/javascript/pointer-events-60fps){ target="_blank" } - Thanks !\n',metaData:{title:"Désactiver le :hover pour un scroll fluide",image:"https://images.emmanuelbeziat.com/social-thumbnail.jpg",date:"2013-11-28 17:07:44",tags:["html/css","javascript","bonnes pratiques"],clients:[""],categories:["Tutoriels"],template:"post",description:"",disqus:!0,publish:!0}}}});
//# sourceMappingURL=49.e463dc9d562e62536eaa.js.map