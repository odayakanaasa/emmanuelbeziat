webpackJsonp([30,4],{290:function(e,n){e.exports={rawContent:'\nLorsqu’on crée un design dont la particularité est que le pied de page soit toujours au bas de l’écran, on se heurte à un petit soucis de conception : comment définir une hauteur minimale à la fenêtre ?\n\nNous allons voir plusieurs solutions possibles, à choisir en fonction de vos besoins.\n\n\nCe tutoriel date un peu (2013), mais je suis en train de lui faire une petite remise à jour, incluant de nouvelles méthodes plus modernes et plus efficaces. Je n’ai pas encore détaillé toutes ces nouvelles méthodes, mais le code est disponible. {.c-note .c-note--info}\n\nTout d’abord, comprenons bien de quoi l’on parle dans ce tutoriel, et pour cela, nous allons d’abord illustrer le problème.\n\nLorsqu’un site possède une hauteur totale plus grande que l’écran sur lequel il est vu, on peut alors descendre la page vers le bas, jusqu’au bas de la page en question ; là, le défilement est arrêté, le pied-de-page, ou "footer" en anglais, est alors fixé naturellement au bas de la page et de l’écran.\n\n![Illustration du tutoriel](https://images.emmanuelbeziat.com/tuto1-01.png) ![Illustration du tutoriel](https://images.emmanuelbeziat.com/tuto1-02.png) { .text-align-center }\n\nMais dans le cas où la hauteur totale de la page est inférieure à la hauteur de l’écran, alors le pied-de-page, toujours placé au bas de la page, n’atteint pas le bas de l’écran.\n\n![Illustration du tutoriel](https://images.emmanuelbeziat.com/tuto1-03.png) { .text-align-center }\n\nSi certains design ne sont pas gênés par cette éventualité, ce n’est pas le cas de tous. Pour palier à ce problème, nous allons devoir faire en sorte que le design adopte la taille du contenu si la taille de la page est supérieure à la taille de l’écran, mais que la taille minimale de la page ne puisse pas être inférieure cette dernière.\n\n![Illustration du tutoriel](https://images.emmanuelbeziat.com/tuto1-04.png) { .text-align-center }\n\nNous allons maintenant voir comment faire ceci.\n\n## La vieille méthode (IE 7+)\n\n### Le html\n\nNous partons sur cette base html :\n\n```markup\n<div class="page">\n\t<div class="bloc-principal">\n\t\t<header class="site-header"></header>\n\t\t<main class="site-content">\n\t\t\t<div class="sidebar"></div>\n\t\t\t<div class="texte"></div>\n\t\t</main><!-- contenu -->\n\t</div><!-- fin bloc-principal -->\n\t<footer class="main-footer"></footer>\n</div><!-- fin page -->\n```\n\nCe n’est qu’un exemple de site de base ; vous pouvez bien sûr utiliser votre propre site.\n\n![Illustration du tutoriel](https://images.emmanuelbeziat.com/tuto1-05.png) { .text-align-center }\n\nPourquoi mettre le pied de page (footer) en dehors du bloc principal ? {.c-note .c-note--question}\n\nToute l’astuce est là, c’est le fait de placer le pied-de-page en dehors du bloc du contenu qui va permettre de le fixer au bas de la page, mais aussi de l’empêcher de passer par-dessus le texte du contenu.\n\n### Le CSS en action\n\nLa première étape est donc de donner à `<html>` une hauteur de 100% (correspondant à toute la hauteur de la fenêtre), qui servira de hauteur de référence pour les balises enfants et les valeurs en pourcentage que nous allons leur donner par la suite. En effet, la valeur relative "100%" doit correspondre à quelque chose : c’est donc "100% de la fenêtre" pour `<html>`. La première balise enfant étant `<body>`, nous lui attribuons également cette valeur pour qu’elle adote une hauteur de "100% de `<html>`". Ainsi, nous pourrons positionner le footer facilement au bas de l’écran dans sa position "minimale".\n\n```css\nhtml, body { height: 100% }\n```\n\nN’oubliez pas d’ajouter ultérieurement un `margin: 0` sur `body` afin de ne pas avoir de barre de défilement.\n\nIl nous faut ensuite donner à notre conteneur principal, "page", une hauteur de 100%. Mais nous n’allons pas utiliser la propriété height, car celle-ci défini une hauteur définitive ; à la place, nous ferons usage de `min-height`, qui défini une hauteur minimale pour le conteneur : ainsi, Si la fenêtre est plus grande que la page, alors le conteneur prendra toute la hauteur disponible, mais ne sera jamais plus petite que 100% -soit la taille du contenu de la page- et ne chevauchera donc jamais ledit contenu.\n\nIl faut également préparer le positionnement du pied-de-page au bas du conteneur, aussi nous appliquons un paramètre de position relative à page.\n\n```css\n.page {\n\tmin-height: 100%;\n\tposition: relative;\n}\n```\n\nNous passons maintenant au conteneur `bloc-principal`. L’astuce consiste à lui attribuer une marge interne de la hauteur du pied-de-page (ici, 100px). Cela a pour but de bien définir la fin du conteneur à la fin de son contenu. Sans ce paramètre, vous vous rendrez compte que le pied-de-page se superposerait au bas du contenu sur 120px, soit sa propre hauteur.\n\n```css\n.bloc-principal {\n\tpadding-bottom: 100px;\n}\n```\n\nMaintenant, nous nous attaquons au pied-de-page. Il faut que celui-ci ait tout d’abord une hauteur définie (même s’il s’agit d’un pourcentage), puis il faut lui affecter un positionnement absolu. Comme son parent direct, le conteneur `page`, est en positionnement relatif, `footer` se sert de cette référence pour savoir où se positionner. Enfin, grâce au positionnement absolu, il suffira d’accrocher le conteneur au bas du bloc parent. On ajoute également `left` et `right` afin que le bloc prenne toute la largeur.\n\n```css\n.site-footer {\n\theight: 100px;\n\tposition: absolute;\n\tbottom: 0;\n\tleft: 0;\n\tright: 0;\n}\n```\n\nEt nous y voici ! Il est à noter que le pied de page doit avoir du contenu pour être affiché, à cause de son positionnement absolu.\n\nVous pouvez voir le code en action sur [Codepen](http://codepen.io/EmmanuelB/pen/rfCey){ target="_blank" }.\n\n## La méthode intermédiaire (IE 8+)\n\nVoici une méthode utilisant les propriétés `display: table-*` :\n\n```markup\n<body>\n\t<div class="page">\n\t\t<header class="site-header"></header>\n\n\t\t<main class="site-content"></main>\n\n\t\t<footer class="site-footer"></footer>\n\t</div>\n</body>\n```\n\n```css\nhtml,\nbody {\n\theight: 100%\n}\n\nbody {\n\tmargin: 0\n}\n\n.page {\n\tdisplay: table;\n\twidth: 100%;\n\theight: 100%;\n}\n\n.site-header,\n.site-content,\n.site-footer {\n\tdisplay: table-row\n}\n```\n\nAinsi, on obtient le même résultat, avec moins d’efforts. Il sera toutefois nécessaire de spécifier une hauteur (ou une hauteur maximale) au header et au footer.\n\n## La méthode moderne (IE 9+)\n\nCette méthode nécessite qu’on connaisse la hauteur du pied de page.\n\nNous avons besoin de cette base html :\n\n```markup\n<div class="bloc-principal">\n\t<div class="site-header"></div>\n\t<main class="contenu">\n\t</main>\n</div>\n<div class="site-footer"></div>\n```\n\nPuis nous allons utiliser une simple astuce à base de `vh` et de `calc()`. Pour expliquer très sommairement, `vh` permet de définir une hauteur relative au _viewport_ (la fenêtre de navigation), et `calc()` permet de faire une opération simple en CSS. Pour toute information complémentaire, consultez votre moteur de recherche préféré !\n\nPartons du principe que notre pied de page fait ici 40px de haut.\n\n```css\nbody {\n\tmargin: 0\n}\n\n.bloc-principal {\n\tmin-height: calc(100vh - 40px)\n}\n```\n\nHé oui, c’est tout. On dit au bloc principal de faire au minimum la totalité de la hauteur de la fenêtre, moins la hauteur du pied de page. Malin, non ?\n\n## La méthode moderne améliorée (IE 10+)\n\nPour celle-ci, on va utiliser `flexbox`, une propriété toute récente, dont je vous invite à [vérifier la compatibilité](http://caniuse.com/#feat=flexbox "CanIUse Flexbox ?"){ target="_blank" }.\n\nFlexbox n’est pas sensé être utilisé pour un gabarit de page, c’est normalement le module CSS `grid` à qui revient cette charge. Cependant, l’écriture des spécifications de `flexbox` est presque terminé et la propriété est implémentée dans tous les navigateurs modernes, alors que `grid` est encore en _working draft_, et n’est implémenté que dans Internet Explorer 10+ et Edge. {.c-note .c-note--important}\n\n```markup\n<body>\n\t<div class="page">\n\t\t<header class="site-header"></header>\n\n\t\t<main class="site-content"></main>\n\n\t\t<footer class="site-footer"></footer>\n\t</div>\n</body>\n```\n\nNous allons donc simplement appliquer `display: flex;` à `body`, et spécifier le comportement de ses descendants direct en tant que colonnes. Puis nous diront simplement à `.site-content` d’utiliser toute la hauteur disponible.\n\n```css\nbody {\n\tmargin: 0;\n\tdisplay: flex;\n\tflex-direction: column;\n\tmin-height: 100vh;\n}\n\n.site-content {\n\tflex: 1;\n}\n```\n\nc’est tout !\n\n## La méthode de demain\n\nÀ priori, il viendra un temps où nous utiliseront le module grid afin de faire le squelette de notre site (Et flexbox sera utilisé pour la gestion fine du contenu). Pour en savoir plus, je vous suggère de lire [cet article sur Alsacréations](http://www.alsacreations.com/article/lire/1388-css3-grid-layout.html){ target="_blank" }.\n',metaData:{title:"Un site qui prend toute la hauteur disponible",image:"https://images.emmanuelbeziat.com/social-default-fb.jpg",date:"2015-10-25 22:35:01",tags:["html/css"],clients:[""],categories:["Tutoriels"],template:"post",description:"",disqus:!0,publish:!0}}}});