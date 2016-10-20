webpackJsonp([33,4],{287:function(e,n){e.exports={rawContent:'\nMon site te plait, internaute ? Tu es jaloux-se de ma colonne latérale qui prend toute la hauteur de la page et tu cherches désespérément comment faire ? Tu as de la chance, tu es pile au bon endroit !\n\n\nToute l’astuce repose sur un trompe-l’œil. Vous pouvez donc commencer par faire votre colonne tout à fait normalement.\n\n```markup\n<div class="colonne">\n\t<div class="colonne-content">\n\t\tDu contenu !\n\t</div>\n</div>\n```\n\n```css\n.colonne {\n\twidth: 320px;\n\tbackground: #d5d5d5;\n\tfloat: left;\n}\n```\n\nOui, je sais : c’est assez impressionnant.\n\nVous pouvez bien sûr ajouter vos fioritures et votre contenu, mais globalement, tout ce dont vous avez besoin est là : une largeur, et un positionnement (Ici à gauche, mais vous pouvez le mettre à droite si vous voulez).\n\nPour l’instant, votre colonne ne va pas jusqu’en bas de votre écran, à moins que vous n’ayez beaucoup de contenu à l’intérieur. Alors pour ça, nous allons créer un petit trompe-l’œil au moyen d’un **pseudo-élément** (Si vous ne savez pas de quoi je parle, direction \'[Principes du CSS - Les sélecteurs](http://www.emmanuelbeziat.com/blog/principes-du-css-les-selecteurs-partie1-css2/)\').\n\n```css\n.colonne:after {\n\tcontent: ""\n\tposition: fixed;\n\twidth: inherit;\n\tbackground: inherit;\n\ttop: 0;\n\tleft: 0;\n\tbottom: 0;\n}\n```\n\nOn crée donc un pseudo-élément après notre colonne, avec un contenu vide. On lui attribue une position fixe, ce qui veut dire que l’élément sera lié à la fenêtre du navigateur, et non au contenu de votre page. Puis, on l’accroche à `0px` du haut de la fenêtre, du bas, et à gauche. Ainsi, cet élément ne bougera jamais, même si vous descendez dans la page : il fera toujours la largeur de la fenêtre. Enfin, on lui attribue la même largeur et la même couleur que notre colonne, via la valeur`inherit`.\n\nMais… Je ne vois plus ma colonne ! qu’est-ce qu’il se passe ? { .c-note .c-note--question }\n\nEn effet, si vous avez testé ce code, vous devez avoir remarqué que votre pseudo-élément couvre votre colonne et que celle-ci n’est plus visible. Pas de panique ! On va simplement positionner l’élément enfant `.colonne-content` pour ajouter une propriété `z-index`, qui va permettre de gérer la superposition des éléments. Plus la valeur est haute, plus l’élément est à l’avant-plan.\n\nComme la propriété `z-index` ne fonctionne que sur des éléments positionné, on ajoute une position relative :\n\n```css\n.colonne-content {\n\tposition: relative;\n\tz-index: 10;\n}\n```\n\nEt c’est tout ! Votre colonne fonctionne maintenant. En effet, votre "vraie" colonne va se comporter comme un élément normal, et se déplacer avec le reste de la page. Mais le pseudo-élément va continuer à rester ancrer à gauche de la fenêtre, et donner l’illusion que votre colonne prend toute la hauteur de votre site.\n\nComme quoi, le CSS, c’est aussi de la magie !\n\nVous pouvez voir l’exemple en action sur [ce Codepen](http://codepen.io/EmmanuelB/pen/zGMxEN){ target="_blank" }.\n\nMerci à [Lamecarlate](http://lamecarlate.net/){ target="_blank" } et [Clément](http://clement-galidie.fr/){ target="_blank" } pour leurs ajouts.\n',metaData:{title:"Colonne verticale sur toute la hauteur de page",image:"https://images.emmanuelbeziat.com/social-default-fb.jpg",date:"2015-07-21 21:55:38",tags:["html/css"],clients:[""],categories:["Tutoriels"],template:"post",description:"",disqus:!0,publish:!0}}}});