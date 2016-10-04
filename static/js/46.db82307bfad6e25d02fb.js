webpackJsonp([46,4],{271:function(e,n){e.exports={rawContent:'\nLorsqu’on utilise du CSS, on peut se contenter des trois sélecteurs de base : les éléments, les identifiants et les classes. Souvent, sans le savoir, vous utilisez un sélecteur simple de descendance, par un espace entre deux de ces sélecteurs - hé oui ! Mais il existe d’autres sélecteurs plus avancés, nous allons les passer en revue.\n\nJe ne traite ici que du CSS 3\\. Je vous recommande d’avoir lu préalablement l’article concernant les [sélecteurs du CSS2](http://www.emmanuelbeziat.com/blog/principes-du-css-les-selecteurs-partie1-css2/ "Principes du CSS – Les sélecteurs (Partie1 : cSS2)").\n\n\n## Les espaces de noms (namespace)\n\n```css\nnamespace|div {\n\tcolor: red\n}\n```\n\nUne des grandes nouveautés apportées par cette nouvelle version est la gestion des espaces de noms. Les programmeurs sauront de quoi je parle. Pour faire simple, on peut définir un espace de nom particulier et n’appliquer des propriétés qu’aux balises dans cet espace de nom.\n\n**Exemple :** Définissons un espace de nom pour une page particulière :\n\n```css\n@namespace produits url(http://www.monsite.com/produits.html);```\n\nPuis un espace de nom pour une autre page :\n\n```css\n@namespace membre url(http://www.monsite.com/membre.html);```\n\nIl est désormais possible d’appliquer des modifications qui ne seront spécifiques qu’à ces pages :\n\n```css\n/* propriétés qui ne seront appliqués que sur les balises h1\nde la page définie par l’espace de nom "produits" */\nproduits|h1 { color: red }\n\n/* uniquement les balises h1 dans la page définie par "membre" */\nmembre|h1 { color: red }\n\n/* uniquement les balises h1 qui ne sont PAS dans un espace de nom\n(donc autre que dans les pages définies plus haut */\n|h1 { color: red }\n\n/* tout élément h1 dans n’importe quel espace de nom */\n*|h1 { color: red }\n\n/* par défaut */\nh1 {color: red}\n```\n\nÀ noter qu’il est possible de définir un nom d’espace par défaut :\n\n```css\n@namespace "http://www.monsite.com"```\n\nTous les sélecteurs css qui n’ont pas d’espace de nom spécifié seront donc attribués à celui-ci.\n\n## Les sélecteurs\n\n### Sélecteur d’adjacence indirecte : "~"\n\n```css\nh1 ~ pre {\n\tcolor: red\n}\n```\n\nDans la même idée que les sélecteurs d’adjacence `+`, celui-ci permet d’atteindre tout élément (ici `pre`) de même niveau que l’élément référent (ici `h1`). La différence étant qu’ici, l’élément cible n’a pas besoin d’être directement adjacent à l’élément référent.\n\n```markup\n<h1>Titre</h1>\n<p>Pas affecté</p>\n<pre>Affecté</pre>\n<p>Pas affecté</p>\n```\n\n### Sélecteur d’attribut\n\n```css\na[href^=https] {\n\tcolor: red\n}\n```\n\nCe sélecteur permet de choisir un élément dont la valeur de l’attribut commence par ce que vous avez défini. Dans l’exemple, tous les liens dont l’adresse commence par "https".\n\n```markup\n<a href="http://www.monsite.com">Ce lien ne sera pas affecté</a>\n<a href="https://www.monsite.com">Ce lien sera affecté</a>\n```\n\nÉvidemment, ça ne se limite pas qu’aux liens.\n\n```css\na[href$=.pdf] {\n\tcolor: red\n}\n```\n\nAvec celui-ci, on peut choisir à l’inverse un élément dont la valeur de l’attribut fini par ce que vous avez défini. L’exemple au-dessus permet donc de choisir tous les liens vers un fichier PDF.\n\n```markup\n<a href="monfichier.doc">Ce lien ne sera pas affecté</a>\n<a href="monfichier.pdf">Ce lien sera affecté</a>\n<a href="monfichier.pdf.doc">Ce lien ne sera pas affecté</a>\n```\n\n```css\na[href*=monsite] {\n\tcolor: red\n}\n```\n\nCelui-ci enfin, permet de sélectionner l’élément dont l’attribut désigné comporte au moins la chaîne de caractère définie.\n\n```markup\n<a href="http://www.lesite.com">Ce lien ne sera pas affecté</a>\n<a href="http://www.monsite.com">Ce lien sera affecté</a>\n```\n\n## Les pseudo-classes\n\n### :last-child\n\nÀ la manière de `:first-child`, cette pseudo-classe cible un élément s’il est le dernier enfant de son parent.\n\n```css\ndiv p:last-child {\n\tcolor: red;\n}\n```\n\n```markup\n<div>\n\t<p>Cet élément ne sera pas affecté</p>\n\t<p>Cet élément ne sera pas affecté</p>\n\t<p>Cet élément sera affecté</p>\n</div>\n```\n\nSi on voit maintenant, pour le même code CSS, ce code HTML :\n\n```markup\n<div>\n\t<p>Cet élément ne sera pas affecté</p>\n\t<p>Cet élément ne sera pas affecté</p>\n\t<p>Cet élément ne sera pas affecté</p>\n\t<h2>Ce titre ne sera pas affecté</h2>\n</div>\n```\n\nRien ne va se passer. En effet, le code CSS signifie "cibler tous les éléments `p` s’il s’agit du dernier enfant de leur parent" et non "cibler tous les éléments `p` qui sont les derniers de ce éléments de type `p` enfants". Or dans ce cas, c’est `h2` qui est le dernier enfant.\n\n### :first-of-type\n\nL’élément manquant à `:first-child`. Cette pseudo-classe permet cette fois-ci de cibler chaque premier élément d’un type donné, pour son parent (par exemple, le premier <span> dans un paragraphe).\n\n```css\ndiv *:first-of-type {\n\tcolor: red\n}\n```\n\n```markup\n<div>\n\t<p>Cet élément sera affecté</p>\n\t<p>Cet élément ne sera pas affecté</p>\n\t<p>Cet élément ne sera pas affecté</p>\n\t<span>Cet élément sera affecté</span>\n</div>\n\n<div>\n\t<h2>Ce titre sera affecté</h2>\n\t<p>Cet élément sera affecté</p>\n\t<p>Cet élément ne sera pas affecté</p>\n\t<span>Cet élément sera affecté</span>\n\t<p>Cet élément ne sera pas affecté</p>\n</div>\n```\n\n### :last-of-type\n\nLe parfait opposé de `:first-of-type`. Cette pseudo-classe permet cette fois-ci de cibler chaque dernier élément d’un type donné, pour son parent.\n\n```css\ndiv p:last-of-type {\n\tcolor: red\n}\n```\n\n```markup\n<div>\n\t<p>Cet élément ne sera pas affecté</p>\n\t<p>Cet élément ne sera pas affecté</p>\n\t<p>Cet élément sera affecté</p>\n</div>\n\n<div>\n\t<p>Cet élément ne sera pas affecté</p>\n\t<p>Cet élément ne sera pas affecté</p>\n\t<p>Cet élément sera affecté</p>\n\t<h2>Ce titre ne sera pas affecté</h2>\n</div>\n```\n\n### :only-of-type\n\nUn peu plus particulier cette-fois ci, cette pseudo-classe permet d’affecter un élément qui est le seul de son type par rapport à son parent.\n\n```css\ndiv p:only-of-type {\n\tcolor: red\n}\n```\n\n```markup\n<div>\n\t<p>Cet élément ne sera pas affecté</p>\n\t<p>Cet élément ne sera pas affecté</p>\n\t<p>Cet élément ne sera pas affecté</p>\n</div>\n\n<div>\n\t<h2>Ce titre ne sera pas affecté</h2>\n\t<p>Cet élément sera affecté</p>\n\t<h2>Ce titre ne sera pas affecté</h2>\n</div>\n```\n\n### :only-child\n\nComme son nom l’indique, cette pseudo-classe n’agit que sur un élément qui est le seul enfant de son parent.\n\n```css\ndiv p:only-child {\n\tcolor: red\n}\n```\n\n```markup\n<div>\n\t<p>Cet élément ne sera pas affecté</p>\n\t<p>Cet élément ne sera pas affecté</p>\n</div>\n\n<div>\n\t<p>Cet élément sera affecté</p>\n</div>\n```\n\n### :nth-child(n)\n\nUn peu particulier, cette pseudo-classe permet de cibler un élément qui est le _n_ième enfant de son parent. Par exemple, si on veut choisir le second élément d’une liste :\n\n```css\nli:nth-child(2) {\n\tcolor: red\n}\n```\n\n```markup\n<ul>\n\t<li>Cet élément ne sera pas affecté</li>\n\t<li>Cet élément sera affecté</li>\n\t<li>Cet élément ne sera pas affecté</li>\n</ul>\n```\n\n### :nth-last-child(n)\n\nMême chose que précédement, mais cette fois le décompte de _n_ commence en partant du dernier enfant. Par exemple, si on veut cibler l’avant-dernier élément d’une liste :\n\n```css\nli:nth-last-child(2) {\n\tcolor: red\n}\n```\n\n```markup\n<ul>\n\t<li>Cet élément ne sera pas affecté</li>\n\t<li>Cet élément ne sera pas affecté</li>\n\t<li>Cet élément ne sera pas affecté</li>\n\t<li>Cet élément sera affecté</li>\n\t<li>Cet élément ne sera pas affecté</li>\n</ul>\n```\n\n### :nth-of-type(n)\n\nSimilaire à `:nth-child(_n_)` , celle-ci permet de cibler le _n_ième enfant d’un type défini. Par exemple, si on veut choisir le troisième paragraphe :\n\n```css\np:nth-of-type(3) {\n\tcolor: red\n}\n```\n\n```markup\n<div>\n\t<p>Cet élément ne sera pas affecté</p>\n\t<p>Cet élément ne sera pas affecté</p>\n\t<p>Cet élément sera affecté</p>\n\t<p>Cet élément ne sera pas affecté</p>\n</div>\n```\n\nSachant qu’il s’agit de type et non de nombre d’enfant, on peut s’en servir même lorsqu’il y a des balises entre deux :\n\n```markup\n<div>\n\t<span>balise</span>\n\t<p>Cet élément ne sera pas affecté</p>\n\t<span>balise</span>\n\t<p>Cet élément ne sera pas affecté</p>\n\t<span>balise</span>\n\t<p>Cet élément sera affecté</p>\n\t<p>Cet élément ne sera pas affecté</p>\n</div>\n```\n\n### :nth-last-of-type(n)\n\nCette fois-ci, vous pouvez cibler le dernier d’un type, en partant du dernier de ce même type. Par exemple pour un avant-dernier paragraphe :\n\n```css\np:nth-last-of-type(3) {\n\tcolor: red\n}\n```\n\n```markup\n<div>\n\t<p>Cet élément ne sera pas affecté</p>\n\t<p>Cet élément ne sera pas affecté</p>\n\t<p>Cet élément sera affecté</p>\n\t<p>Cet élément ne sera pas affecté</p>\n</div>\n```\n\nSachant qu’il s’agit de type et non de nombre d’enfant, on peut s’en servir même lorsqu’il y a des balises entre deux :\n\n```markup\n<div>\n\t<span>balise</span>\n\t<p>Cet élément ne sera pas affecté</p>\n\t<span>balise</span>\n\t<p>Cet élément ne sera pas affecté</p>\n\t<span>balise</span>\n\t<p>Cet élément sera affecté</p>\n\t<p>Cet élément ne sera pas affecté</p>\n</div>\n```\n\n### :not(selecteur)\n\nUn peu particulier encore une fois, cette pseudo-classe permet d’affecter tout élément qui n’est pas du type spécifié. Un exemple :\n\n```css\n:not(p) {\n\tcolor: red\n}\n```\n```markup\n<div>\n\t<ul>\n\t\t<li>Cet élément sera affecté</li>\n\t\t<li>Cet élément sera affecté.\n\t\t\t<p>Cet élément ne sera pas affecté</p>\n\t\t</li>\n\t</ul>\n\t<p>Cet élément ne sera pas affecté</p>\n</div>\n```\n\n### :empty\n\nUne pseudo-classe toute simple qui permet de cibler tout élément qui n’a aucun enfant.\n\n```css\np:empty {\n\tcolor: red\n}\n```\n```markup\n<div>\n\t<p>Cet élément sera affecté</p>\n\t<p>Cet élément sera affecté</p>\n\t<p>Cet élément ne sera pas affecté\n\t\t<span>car il contient un enfant</span>\n\t</p>\n</div>\n```\n\n### :enabled\n\nCelle-ci permet de cibler tout élément qui est, soit par défaut, soit précisément via html, défini comme "actif". c’est surtout utile pour les éléments de formulaire.\n\n```input:enabled {\n\tbackground: white\n}\n```\n\n```markup\n<!-- cet élément sera affecté -->\n<input type="text" />\n<!-- cet élément ne sera pas affecté, il est désactivé -->\n<input type="text" disabled="disabled" />\n```\n\n### :disabled\n\nÀ l’inverse, cette pseudo-classe permet de cibler un élément défini comme désactivé.\n\n```css\ninput:disabled {\n\tbackground: grey\n}\n```\n```markup\n<!-- cet élément ne sera pas affecté, il n’est pas désactivé -->\n<input type="text" />\n<!-- cet élément sera affecté, il est désactivé -->\n<input type="text" disabled="disabled" />\n```\n\n## Conclusion… ?\n\nTout en essayant d’être complet, je n’ai pas été exhaustif. Le CSS3 est une norme loin d’être terminée, qui évolue encore, et qui pourrait voir d’autres éléments s’ajouter par la suite. Comme toujours, n’oubliez pas qu’on peut toujours mixer plusieurs sélecteurs !\n',metaData:{title:"Principes du CSS - Les sélecteurs (Partie 2 : CSS3)",image:"https://images.emmanuelbeziat.com/social-default-fb.jpg",date:"2014-02-04 08:55:02",tags:["html/css"],clients:[""],categories:["Tutoriels"],template:"post",description:"",disqus:!0,publish:!0}}}});
//# sourceMappingURL=46.db82307bfad6e25d02fb.js.map