import Prism from 'prismjs'
import 'prismjs/plugins/toolbar/prism-toolbar.js'
import 'prismjs/plugins/show-language/prism-show-language.min.js'
import 'prismjs/components/prism-bash.min.js'
import 'prismjs/components/prism-php.min.js'

const markdown = require('markdown-it')({
	html: true,
	breaks: true,
	linkify: true,
	highlight: function (str, lang) {
		if (process.BROWSER_BUILD) {
			Prism.highlightAll()

			setTimeout(function () {
				Prism.highlightAll()
			}, 10)

			setTimeout(function () {
				Prism.highlightAll()
			}, 250)
		}
		return '<pre class="language-' + lang + '"><code class="language-' + lang + '">' + markdown.utils.escapeHtml(str) + '</code></pre>'
	}
})
.use(require('markdown-it-attrs'))
.use(require('markdown-it-block-embed'), {
	containerClassName: 'video',
	serviceClassPrefix: 'video--',
	outputPlayerSize: false,
	allowFullScreen: true
})
.use(require('markdown-it-anchor'), {
	permalink: false,
	permalinkClass: 'icon-link post__anchor',
	permalinkSymbol: ''
})

export default markdown
