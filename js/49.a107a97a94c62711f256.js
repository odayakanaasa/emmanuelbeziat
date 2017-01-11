webpackJsonp([49,4],{280:function(e,r){e.exports={rawContent:'\r\nJ’ai reçu récemment une demande d’explication sur ma méthode pour créer les barres de progression sur mon site (sous les compétences, en page d’accueil).\r\n\r\nBien que tout simple, je me suis dit que ça pourrait intéresser du monde. En avant guinguette !\r\n\r\n\r\n## Le html\r\n\r\nAlors on va la faire simple. Pour moi j’ai utilisé une liste non-ordonnée html, simplement parce qu’il s’agissait d’une liste de compétences (Ouais, c’est pas compliqué le html, voyez ?). Inutile de préciser que ça marcherait avec n’importe quoi. Aussi, pour l’exemple, je vais utiliser de bonnes vieilles `div`.\r\n\r\n```markup\r\n<div class="barre" data-length="30"></div>\r\n<div class="barre" data-length="20"></div>\r\n<div class="barre" data-length="50"></div>\r\n<div class="barre" data-length="80"></div>\r\n<div class="barre" data-length="40"></div>\r\n```\r\n\r\n### Data-length ?\r\n\r\nAlors certains se posent peut-être une question intéressante, par exemple "mais kaisseucé ?".\r\n\r\nL’attribut `data-` permet de stocker des données sur des éléments, tout simplement. [D’autres en parlent bien mieux que moi](http://www.alsacreations.com/article/lire/1397-html5-attribut-data-dataset.html){ target="_blank" rel="noopener" } !\r\n\r\nc’est arbitraire, j’aurais aussi bien pu utiliser une classe, mais je trouvais ça tellement plus _pimp_ d’utiliser de beaux `data-` que j’y ai été à cœur joie. Dans les faits, ça se prête très bien au CSS avec les [sélecteurs d’attributs](http://www.emmanuelbeziat.com/blog/principes-du-css-les-selecteurs-partie1-css2/#selecteur-attribut) (va lire mon tutoriel sur les sélecteurs, va !).\r\n\r\n## Le CSS\r\n\r\nMa foi, ce n’est pas plus compliqué que ça. On va utiliser le positionnement relatif et absolu, et le pseudo-élément :after (se référer au tutoriel sur les sélecteurs, encore une fois).\r\n\r\nOn commence par donner le style de fond à la `div`, ainsi qu’un positionnement relatif pour pouvoir ensuite positionner le pseudo-élément.\r\n\r\n```css\r\n.barre {\r\n\twidth: 300px;\r\n\tbackground: grey;\r\n\tborder: 2px solid grey;\r\n\tposition: relative;\r\n\theight: 10px;\r\n}\r\n```\r\n\r\nMaintenant, on donne un style au pseudo-élément, qui devient notre barre "intérieure" :\r\n\r\n```css\r\n.barre:after {\r\n\tcontent: ""\r\n\tposition: absolute;\r\n\tbackground: orange;\r\n\tleft: 0;\r\n\ttop: 0;\r\n\tbottom: 0;\r\n}\r\n```\r\n\r\nReste ensuite à leur attribuer une largeur, en fonction de la valeur de notre `data-length`. Je ne vous mets que les dizaines (parce que ça n’a pas beaucoup d’intérêt de faire plus, à mon sens ; et aussi parce que j’ai la flemme de me cogner les 90 autres valeurs.).\r\n\r\n```css\r\n.barre[data-length="10"]:after { width: 10% }\r\n.barre[data-length="20"]:after { width: 20% }\r\n.barre[data-length="30"]:after { width: 30% }\r\n.barre[data-length="40"]:after { width: 40% }\r\n.barre[data-length="50"]:after { width: 50% }\r\n.barre[data-length="60"]:after { width: 60% }\r\n.barre[data-length="70"]:after { width: 70% }\r\n.barre[data-length="80"]:after { width: 80% }\r\n.barre[data-length="90"]:after { width: 90% }\r\n.barre[data-length="100"]:after { width: 100% }\r\n```\r\n\r\n## Conclusion\r\n\r\nEt voilà ! On peut imaginer des animations pour remplir les barres petit à petit, récupérer la valeur de data-length en js dynamiquement et tout ça, mais c’était juste pour expliquer le principe.\r\n\r\nPour voir le tout en action, vous pouvez aller sur [mon CodePen](http://codepen.io/EmmanuelB/pen/nwivz "CodePen"){ target="_blank" rel="noopener" }.\r\n',metaData:{title:"Des barres de progression toutes simples en CSS",image:"https://images.emmanuelbeziat.com/social-default-fb.jpg",date:"2014-02-06 04:37:43",tags:["html/css"],clients:[""],categories:["Tutoriels"],template:"post",description:"",disqus:!0,publish:!0}}}});