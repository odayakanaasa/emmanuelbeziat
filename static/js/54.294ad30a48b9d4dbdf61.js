webpackJsonp([54,4],{265:function(e,n){e.exports={rawContent:'\r\nLorsqu’on utilise du CSS, on peut se contenter des trois sélecteurs de base : les éléments, les identifiants et les classes. Souvent, sans le savoir, vous utilisez un sélecteur simple de descendance, par un espace entre deux de ces sélecteurs - hé oui ! Mais il existe d’autres sélecteurs plus avancés, nous allons les passer en revue.\r\n\r\n\r\nJe ne traite ici que du CSS 2.1. Le CSS3 apporte de nouveaux sélecteurs très intéressants et utiles, [qui sont listés dans cet article](http://www.emmanuelbeziat.com/blog/principes-du-css-les-selecteurs-partie-2-css3/).\r\n\r\n## Préambule\r\n\r\nPour petit rappel :\r\n\r\n```markup\r\n<balise attribut="valeur">\r\n```\r\n\r\nDonc si vous êtes là, c’est que vous savez construire une feuille de style. Et vous travaillez comme ceci, grosso modo :\r\n```css\r\n#page {\r\n\twidth: 800px;\r\n\toverflow: auto;\r\n}\r\n\r\n#page .bloc {\r\n\twidth: 100px;\r\n\tdisplay: inline-block;\r\n}\r\n```\r\n\r\nc’est une bonne base de travail ; mais il existe une utilisation plus avancée des sélecteurs. Figurez-vous que ceci veut dire quelque chose en CSS :\r\n\r\n```css\r\n#page > div * div + div li:first-child a[href~="index.html"]  {\r\n\tcolor: #ccc;\r\n}\r\n```\r\n\r\nCertes, c’est un tantinet plus long et complexe qu’écrire simplement la classe d’un élément.\r\n\r\nIl est important de noter que la séparation du contenu et de la mise en forme est au coeur même de l’utilisation du CSS et des principes sémantiques que le W3C met en place depuis des anneés. Par là même, l’idéal pour cette sémantique serait d’avoir un code html vide d’éléments de mise en forme - d’ailleurs, le W3C recommande l’absence de tout attribut `style` dans les balises html et préconise l’utilisation de classes et d’identifiants à la place.\r\n\r\nMais on peut minimiser au maximum l’utilisation de ces classes et de ces ID grâce à l’utilisation des sélecteurs. Dans l’exemple ci-dessus, j’ai volontairement exagéré la complexité, mais on peut faire beaucoup de choses avec simplicité - parfois même plus qu’avec des classes.\r\n\r\nDe plus, ça peut se révéler très utile dans certains cas. Songez à ceci :\r\n\r\n*   Vous n’aurez peut-être pas toujours accès au html et donc pas la possibilité de le modifier.\r\n*   Vous pouvez, grâce à ça, proposer un changement de design très facile, qui ne nécessite que peu de remaniement html sur votre site.\r\n*   Cela sert également à appliquer un style à des éléments très nombreux sans avoir besoin de toucher au html.\r\n\r\n## Les sélecteurs de descendance\r\n\r\n### Sélecteur de descendance\r\n\r\n```css\r\n.rouge span { color: red }\r\n```\r\n\r\nVous utilisez déjà très probablement ce sélecteur, sans même le savoir. En effet, mettre un élément à la suite d’un autre crée automatiquement un principe de descendance. Dans le cas présent, la `div` portant la classe `rouge` devient parente de l’élément `span` qui lui, devient enfant.\r\n\r\nDans cet exemple, toutes les balises `span` contenues dans la `div` seront affectés, et ce peu importe s’il y a d’autres balises entre eux ; sauf si un parent plus "proche" lui donne une information contradictoire, comme une autre couleur : c’est le principe d’héritage.\r\n\r\n```markup\r\n<div class="rouge">\r\n\t<div class="bleu">\r\n\t\t<span id="monID">Ce texte sera affecté</span>\r\n\t</div>\r\n\t<span>Ce texte sera affecté</span>\r\n</div>\r\n\r\n<span>Ce texte ne sera pas affecté</span>\r\n```\r\n\r\nDans le cas présent, le `span` portant l’id "monID" est enfant de la `div` "bleu", puis de la `div` "rouge". Voyons un petit schéma simple histoire de bien comprendre ce principe :\r\n\r\n<div class="showcode">\r\n\r\n*   Mes enfants seront rouges\r\n\r\n*   Mon parent m’a dit d’être rouge\r\n*   Mon parent m’a dit d’être rouge\r\n\r\n*   Le parent de mon parent m’a dit d’être rouge\r\n*   Le parent de mon parent m’a dit d’être rouge\r\n*   Mon parent m’a dit d’être rouge, mais mes enfants seront verts !\r\n\r\n*   Mon parent m’a dit d’être vert\r\n*   Mon parent m’a dit d’être vert\r\n*   Mon parent m’a dit d’être rouge\r\n*   Mes enfants seront bleus\r\n\r\n*   Mon parent m’a dit d’être bleu\r\n</div>\r\n\r\n### Selecteur d’enfant direct : ">"\r\n\r\n```css\r\n.rouge > span { color: red }\r\n```\r\n\r\nSur le même principe de lien enfant/parent, ce sélecteur (qui ne porte pas de nom particulier au demeurant, mais que j’appelle "sélecteur d’enfant direct" pour être plus clair) sert à agir uniquement sur les enfants directs d’un élément, à l’inverse du sélecteur simple qui agit de manière récursive (c’est-à-dire sur toute sa descendance, y compris les descendants de ses descendants).\r\n\r\n```markup\r\n<div class="rouge">\r\n\t<div class="bleu">\r\n\t\t<span>Ce texte ne sera pas affecté</span>\r\n\t</div>\r\n\r\n\t<span>Ce texte sera affecté</span>\r\n</div>\r\n\r\n<span>Ce texte ne sera pas affecté</span>\r\n```\r\n<div class="showcode">\r\n*   Mes enfants directs seront rouges\r\n\r\n*   <span style="color:red">Mon parent m’a dit d’être rouge</span>\r\n*   <span style="color:red">Mon parent m’a dit d’être rouge</span>\r\n\r\n*   On ne m’a rien dit\r\n*   On ne m’a rien dit\r\n*   Mon parent m’a dit d’être rouge\r\n</div>\r\n\r\n### Selecteur d’enfant indirect : "*"\r\n\r\n```css\r\n.rouge * span { color: red }\r\n```\r\n\r\nÀ l’inverse du sélecteur d’enfant direct, ce sélecteur agit de manière inverse et affecte tous ses descendants sauf ses enfants directs.\r\n\r\n```markup\r\n<div class="rouge">\r\n\t<div class="bleu">\r\n\t\t<span>Ce texte sera affecté</span>\r\n\t</div>\r\n\t<span>Ce texte ne sera pas affecté</span>\r\n</div>\r\n<span>Ce texte ne sera pas affecté</span>\r\n```\r\n<div class="showcode">\r\n\r\n*   Mes enfants descendants seront rouges\r\n\r\n*   On ne m’a rien dit\r\n*   On ne m’a rien dit\r\n\r\n*   Mon grand-parent m’a dit d’être rouge\r\n*   Mon grand-parent m’a dit d’être rouge\r\n*   Mon grand-parent m’a dit d’être rouge\r\n\r\n*   Mon grand-parent m’a dit d’être rouge\r\n*   Mon grand-parent m’a dit d’être rouge\r\n*   On ne m’a rien dit\r\n</div>\r\n\r\n### Selecteur d’adjacence directe : "+"\r\n\r\n```css\r\n.rouge span + span { color: red }\r\n```\r\n\r\nUn sélecteur un peu plus complexe cette fois-ci, mais très utile. Celui-ci sert à définir un lien d’adjacence entre deux balises ayant un parent direct commun. Les éléments adjacents au dernier cité ne seront pas affectés.\r\n\r\n```markup\r\n<div class="rouge">\r\n\t<div class="bleu">\r\n\t\t<span>Ce texte ne sera pas affecté</span>\r\n\t\t<span>Ce texte sera affecté</span>\r\n\t</div>\r\n\t<span>Ce texte ne sera pas affecté</span>\r\n\t<span>Ce texte sera affecté</span>\r\n</div>\r\n<span>Ce texte ne sera pas affecté</span>\r\n```\r\n<div class="showcode">\r\n\r\n*   Je n’ai rien dit à personne\r\n\r\n*   Mes frères seront rouges !\r\n*   Mon frère m’a dit d’être rouge\r\n*   Mon frère m’a dit d’être rouge</div>\r\n\r\nOn peut bien sûr utiliser ce sélecteur plusieurs fois. Par exemple, si on voulait affecter les éléments d’une liste seulement à partir du quatrième élément :\r\n\r\n```css\r\nli+li+li+li { color: red }\r\n```\r\n<div class="showcode">\r\n1.  Élément de liste\r\n2.  Élément de liste\r\n3.  Élément de liste\r\n4.  Élément de liste\r\n5.  Élément de liste\r\n6.  Élément de liste\r\n7.  Élément de liste\r\n8.  Élément de liste\r\n9.  Élément de liste\r\n</div>\r\n\r\nc’est un sélecteur dont je me sers régulièrement pour, entre autres, définir des marges automatiques entre deux éléments de même nature, comme des blocs d’un élément de menu.\r\n\r\n```css\r\n#sidebar div+div { margin-top: 15px }\r\n```\r\n\r\n## Les sélecteurs d’attributs\r\n\r\nOn peut également attribuer des propriétés à un (ou plusieurs) élément(s) html précis en fonction des attributs qu’ils portent. Ainsi on peut, encore une fois, se passer facilement d’ajouts de classes dans le html en se reposant sur ce qui existe déjà. Il suffit d’accoler le nom de l’attribut en question entre crochets [] à l’élément en question. On ne se soucie pas de la valeur de cet attribut.\r\n\r\n```css\r\na[title] { color: red }\r\n```\r\n\r\n```markup\r\n<a href="#">Ce lien ne sera pas affecté</a>\r\n<a href="#" title="">Ce lien sera affecté</a>\r\n<a href="#" title="Venez sur mon site !">Ce lien sera affecté</a>\r\n```\r\n\r\n```css\r\na[target] { color: red }\r\n```\r\n\r\n```markup\r\n<a href="#">Ce lien ne sera pas affecté</a>\r\n<a href="#" title="">Ce lien ne sera pas affecté</a>\r\n<a href="#" title="" target="">Ce lien sera affecté</a>\r\n```\r\n\r\nMais on peut également aller plus loin et cibler un élément dont l’attribut prend une valeur précise. c’est très utile pour les éléments d’un formulaire, qui sont définis, avec la même balise, par la valeur de leur type :\r\n\r\n```css\r\ninput[type="password"] { color: red }\r\n```\r\n\r\n```markup\r\n<input type="text" />\r\n<input type="password" /> <!-- Cet élément sera affecté -->\r\n<input type="submit" />\r\n```\r\n\r\nVous pouvez également définir le fait qu’un attribut doit contenir au moins une des valeurs énoncées.\r\n\r\n```css\r\na[rel~="copyright"] { color: red }\r\n```\r\n\r\n```markup\r\n<a href="#" rel="">Ce lien ne sera pas affecté</a>\r\n<a href="#" rel="copyright">Ce lien sera affecté</a>\r\n<a href="#" rel="copyright copyleft">Ce lien sera affecté</a>\r\n```\r\n\r\nSachez enfin qu’on peut combiner ces sélecteurs à volonté :\r\n\r\n```css\r\na[rel][target=_blank][title] { color: red }\r\n```\r\n\r\n## Les pseudo-classes\r\n\r\nLes pseudo-classes désignent des éléments que l’on n’aurait pas pu cibler sans ajouter une classe particulière.\r\n\r\n### :first-child\r\n\r\nTrès pratique dans certains cas, cette pseudo-classe cible un élément s’il est le premier enfant de son parent. Il faut donc bien faire attention, car il s’agit bien du premier enfant, et non du premier enfant d’un tel type. Par exemple :\r\n\r\n```css\r\ndiv p:first-child { color: red }\r\n```\r\n\r\n```markup\r\n<div>\r\n\t<p>Cet élément sera affecté</p>\r\n\t<p>Cet élément ne sera pas affecté</p>\r\n\t<p>Cet élément ne sera pas affecté</p>\r\n</div>\r\n```\r\n\r\nSi on voit maintenant, pour le même code CSS, ce code HTML :\r\n\r\n```markup\r\n<div>\r\n\t<h2>Ce titre ne sera pas affecté</h2>\r\n\t<p>Cet élément ne sera pas affecté</p>\r\n\t<p>Cet élément ne sera pas affecté</p>\r\n\t<p>Cet élément ne sera pas affecté</p>\r\n</div>\r\n```\r\n\r\nRien ne va se passer. En effet, le code CSS signifie "cibler tous les éléments `p` s’il s’agit du premier enfant de leur parent" et non "cibler tous les éléments `p` qui sont les premiers de ces éléments de type `p` enfants". Or dans ce cas, c’est `h2` qui est le premier enfant.\r\n\r\n### :active\r\n\r\nCette pseudo-classe est de moins en moins utilisée. Elle est héritée de la première version du CSS et servait à cibler un lien "actif" (donc un lien au moment où il était cliqué). On peut maintenant l’utiliser sur n’importe quel élément, mais c’est assez peu usité.\r\n\r\n```css\r\na:active { color: white }\r\n```\r\n\r\n### :link\r\n\r\nCette pseudo-classe est de moins en moins utilisée. Elle sert à cibler un lien qui n’a pas encore été visité par le visiteur actuel.\r\n\r\n```css\r\na:link { color: white }\r\n```\r\n\r\n### :visited\r\n\r\nCette pseudo-classe est de moins en moins utilisée. À l’inverse du précédent, elle sert à cibler un lien qui a déjà été visité par le visiteur actuel.\r\n\r\n```css\r\na:visited { color: violet }\r\n```\r\n\r\n### :focus\r\n\r\nCette pseudo-classe permet de cibler un élément qui a actuellement le "focus". Par exemple, lorsque vous cliquez dans un champ de texte, celui-ci prend automatiquement cette valeur dynamique de focus. c’est aussi le cas des liens, lorsqu’on navigue avec la touche "tab".\r\n\r\n```css\r\ninput:focus { background: green }\r\n```\r\n\r\n### :hover\r\n\r\nCette pseudo-classe est très utilisée. Elle déclenche un ensemble de propriétés au survol d’un élément par la souris. c’est par exemple très utilisé pour les menus, qui vont se dérouler ou changer de couleur au survol. On peut l’appliquer à tout élément html.\r\n\r\n```css\r\ndiv:hover { background: white }\r\n```\r\n\r\nIl est aussi possible de cibler des éléments au survol de leur parent. Dans le cas suivant, ce sont tous les liens contenus dans un élément de liste, au survol de la div qui les contient (et non au survol du lien) :\r\n\r\n```css\r\ndiv:hover li a { background: white }\r\n```\r\n\r\n## Les pseudo-éléments\r\n\r\nLes pseudo-éléments s’utilisent de la même manière que les pseudo-classes ; cette appellation désigne simplement des éléments que l’on n’aurait pas pu identifier sans ajouter un autre élément (comme span ou div, par exemple).\r\n\r\n### :first-letter\r\n\r\nOn peut se servir de `:first-letter` pour créer des lettrines. c’est d’ailleurs sa principale utilité. Dans l’exemple suivant, tous les éléments `p` verront leur première lettre affichée en rouge.\r\n\r\n```p:first-letter { color: red }\r\n```\r\n\r\n### :first-line\r\n\r\nPeu utilisé, ce pseudo-élément va agir sur la première ligne de texte d’un élément.\r\n\r\n```p:first-line { color: red }\r\n```\r\n\r\n### :after et :before\r\n\r\nVoici deux pseudo-éléments complémentaires très utiles. Ils s’utilisent avec la propriété `content` et servent à rajouter un élément avant (pour `:before`) ou après (pour `:after`) un autre élément.\r\n\r\n```span:before{ content: "→ " }\r\n```\r\n\r\nAinsi pour ce code :\r\n\r\n```markup\r\n<span>Test</span>\r\n```\r\n\r\nOn obtiendra ce résultat :\r\n\r\n<div class="showcode">→ Test</div>\r\n```css\r\na:after{ content: " >>" }\r\n```\r\n\r\n```markup\r\n<a href="#">Lien</a>\r\n<a href="#">Lien >></a>\r\n```\r\n\r\n## Le sélecteur universel : " * "\r\n\r\nCe sélecteur, à ne pas confondre avec le sélecteur d’enfant indirect que nous avons vu plus haut, cible tous les éléments.\r\n\r\n```css\r\n* { color: red }\r\n```\r\n\r\nCe sélecteur est donc très "lourd" (tout est relatif) à utiliser et vous ne devriez l’employer qu’avec une extrême parcimonie, voire jamais ! {.c-note .c-note--important}\r\n\r\nN’hésitez pas si vous avez des questions, le formulaire de commentaires est là !\r\n',metaData:{title:"Principes du CSS - Les sélecteurs (Partie1 : CSS2)",image:"https://images.emmanuelbeziat.com/social-default-fb.jpg",date:"2013-08-28 01:54:32",tags:["html/css"],clients:[""],categories:["Tutoriels"],template:"post",description:"",disqus:!0,publish:!0}}}});
//# sourceMappingURL=54.294ad30a48b9d4dbdf61.js.map