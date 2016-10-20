webpackJsonp([48,4],{272:function(e,n){e.exports={rawContent:'\nRécemment dans les milieux autorisés, un certain bout de code a fait son apparition. Rapidement intégré dans les thèmes WordPress, le Framework Bootstrap, Normalize et maints autres projets, `box-sizing` est devenu un "indispensable" dans une feuille de style aujourd’hui, alors seulement qu’on commence enfin à mettre la technique du _Reset CSS_ de côté.\n\nMais Est-ce vraiment une bonne idée ?\n\n\n## Souvenons-nous\n\nUn jour, un gugusse fort inspiré a eu une idée <del>merdique</del> révolutionnaire en découvrant le sélecteur universel `*`. Fort embêté par quelques marges automatiques, notamment celle sur body (Pour ceux qui l’ignoreraient, body a un margin automatique de 8px), il s’est dit que, plutôt que de penser à mettre quelques `margin: 0;` là où il en avait besoin, ce serait plus simple de tout péter avec ce petit sélecteur. c’est ainsi qu’est né le premier des reset CSS :\n\n```css\n* {\n\tmargin: 0;\n\tpadding: 0;\n}\n```\n\nEn suivit celui d’Eric Meyer qui, à l’époque d’IE6, avait le bon goût de tenter de corriger intelligement les différences de marges automatiques d’un navigateur à l’autre. Seulement voilà  : à tout péter comme un gros babouin avec ces reset, il en résulte un problème conséquent : les marges automatiques ne sont pas faites pour les clebs et quand on les vire toutes, le texte devient complètement illisible. L’interaction normale des éléments html les uns envers les autres est un poil compromise, les paragraphes ne sont plus des paragraphes, etc.. À l’époque du html4 où internet était un vaste réseau de pages persos MultiMania pleines de gifs "codées" via des logiciels WYSIWYG, on ne se posait pas trop la question : on rustinait ça comme de grosses otaries à coup de `<br />` et hop, on avait des marges.\n\nPuis est venu le temps du xhtml, où l’accent était mis sur **la sémantique du html**, la **séparation de la mise en forme**… Toujours habitués à utiliser des Reset, il a bien fallu se dire qu’après avoir foutu en l’air toutes les marges, il fallait ensuite les remettre manuellement. Quarante lignes pour retirer toutes les marges (Merci Meyer), quatre-vingt pour remettre des marges (Vous comprendrez que je trouve le principe débile) et de futures longues heures à débuguer ça parce que telle ou telle balise aura été oublié, parce que les marges qu’on a mises ne fonctionnent pas comme attendu et diverses raisons supplémentaires.\n\nAlors que les navigateurs se sont standardisés entretemps, il a fallu presque dix ans pour qu’apparaisse l’idée d’une feuille de style de base qui redéfinirait directement et correctement les marges automatiques plutôt que de carrément les supprimer.\n\nEt je trouve personnellement qu’aujourd’hui, on se passe très bien des deux.\n\n### Un point sur le sélecteur universel\n\nLe sélecteur universel `*` (À ne pas confondre avec le [sélecteur d’enfant indirect](http://www.emmanuelbeziat.com/blog/principes-du-css-les-selecteurs-partie1-css2/#selecteur-enfant-indirect)) n’a que peu d’utilité dans un cas pratique. On s’en sert très peu, voire quasiment jamais. Ses manifestations les plus courantes sont généralement les plus mauvaises, comme dans le cas de ce reset sauvage.\n\n> "Toi là, vil élément ! Peu importe qui tu es, tu n’auras plus aucune marge !\n>\n> - Mais monsieur, je suis un élément _inline_, ça n’a aucune utilité sur moi, je n’ai aucune marge !\n>\n> - Je t’ai pas demandé ton avis, petit bouseux. SUIVANT ! Toi là, vil élément…"\n\nLe résultat est donc d’attribuer des propriétés à tous les éléments de la page, sans se soucier d’un besoin quelconque. En effet, les éléments comme `<div>`, `<span>`, `<a>`, etc. n’ont aucune marge par défaut. Quelle utilité donc d’alourdir le rendu et la feuille de style avec des propriétés qui n’ont pas lieu d’être ?\n\n## Le parallèle avec le passé\n\nPartant de ce qu’on a vu du passé, analysons le présent : le CSS3 est arrivé avec ses grands sabots et, comme à chaque nouveauté, tout a été écumé par mode : les designs de sites arborant de beaux gradients générés en CSS, les coins arrondis dans tous les sens plus que de raison, les ombres sous les blocs ou les textes, les animations… Tout y passe, comme si le fait de rendre quelque chose possible aisément le rendait indispensable.\n\nAprès la cosmétique douteuse, on s’est rendu compte qu’il y avait aussi du pratique. Et alors est arrivé la mode de `box-sizing: border-box;`.\n\n### Quel intérêt ?\n\nLe fait est que définir `width` à un élément concerne en fait la largeur de son contenu, indépendamment de ses marges et de ses bordures. Ainsi, si on attribue à un bloc ce code CSS :\n\n```css\nelement {\n\twidth: 100px;\n\tpadding: 10px;\n\tborder: 2px solid white;\n}\n```\n\nLa largeur totale réelle de l’élément sera de 124px : 100px de large, deux fois 10px de padding (gauche et droite), et deux fois 2px de bordure.\n\nIl suffit donc de prendre en compte ce fait et de modifier retirer 24px à la largeur attribuée :\n\n```css\nelement {\n\twidth: 76px;\n\tpadding: 10px;\n\tborder: 2px solid white;\n}\n```\n\nAinsi, notre élément fera bien 100px de large. Mais désormais, grâce à `box-sizing` il existe un autre moyen :\n\n```css\nelement {\n\tbox-sizing: border-box;\n\twidth: 100px;\n\tpadding: 10px;\n\tborder: 2px solid white;\n}\n```\n\nEn effet, la valeur `border-box` force le navigateur à prendre en compte la largeur attribuée sur l’ensemble de l’élément plutôt que sur son seul contenu (par opposition donc à son autre valeur, celle attribuée aux éléments par défaut : `content-box`). L’élément fera donc bien 100px de largeur, avec une marge interne de 10px de chaque côté et une bordure de 2px.\n\nEt c’est super pratique, dans le cas par exemple des formulaires si l’on souhaite que les champs aient une largeur de 100% (un des rares cas où `width: 100%` est valable) tout en ayant une marge intérieure pour que le texte ne soit pas collé au bord.\n\n## Ne pas faire n’importe quoi\n\nDe là a fleuri ce petit bout de code en début de nombreuses feuilles de style, comme je le disais en début d’article :\n\n```css\n*,\n*:after,\n*:before {\n\t-webkit-box-sizing: border-box;\n\t-moz-box-sizing: border-box;\n\tbox-sizing: border-box;\n}\n```\n\nRetour de la méthode paladin des croisades :\n\n> "Toi là, vil élément ! Peu importe qui tu es, toi et tes éventuels pseudo-éléments aurez un modèle de contenu "border-box" !\n>\n> - Mais monsieur, je suis un élément _inline_, ça n’a aucune utilité sur moi… Je ne prend même pas les marges en compte !\n>\n> - Je t’ai pas demandé ton avis, petit con. SUIVANT ! Toi là, vil élément…"\n\nLe rendu de la page sera donc alourdi par un travail inutile qui ajoutera à **tous** les éléments un `box-sizing`.\n\n**Oui mais, si on a décrété que faire ça avec les marges était mal, pourquoi ça serait bien avec autre chose ?**\n\n### L’effet kiss-kool : compatibilité\n\nIl y a encore des gens coincés à la dernière décade, qui surfent avec Internet Explorer 7\\. Si vous devez en tenir compte, oubliez directement `box-sizing` ! Faute de quoi, vous développerez votre site avec des valeurs width sans vous soucier d’y soustraire les marges. De fait, lorsque vous regarderez votre site via ce navigateur qui ne prend pas cette propriété en compte, toutes les largeurs de vos éléments seront faussées ! Moche, hein ?\n\n## Conclusion\n\n(Vous avez remarqué ? Je termine beaucoup d’articles avec une conclusion.)\n\nAdonc, comme un cycle, la bêtise de l’emploi du sélecteur universel pour attribuer des propriétés cools et bien à la mode revient. Et je ne vois **toujours pas** en quoi ce serait une bonne idée, cette fois. Je laisse Vaas vous expliquer :\n\n@[youtube](kNdGM6tOoT4)\n\nAlors, plutôt que de mettre `box-sizing: border-box;` partout, utilisez-le simplement lorsque vous en avez besoin.\n',metaData:{title:"Doucement sur le box-sizing !",image:"https://images.emmanuelbeziat.com/social-default-fb.jpg",date:"2014-01-10 13:27:20",tags:["html/","bonnes pratiques"],clients:[""],categories:["Diatribes"],template:"post",description:"",disqus:!0,publish:!0}}}});