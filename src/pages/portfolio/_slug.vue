<template>
	<div class="blog">
		<article class="post">
			<header class="post__header">
				<h1 class="post__title">{{ post.title }}</h1>

				<div class="post__infos">
					<div class="flex">
						<div class="post__tags">
							<span class="c-tag" v-for="tag in post.tags" :key="tag">{{ tag }}</span>
						</div>

						<div class="post__tags">
							<span class="c-tag" v-for="client in post.clients" :key="client">{{ client }}</span>
						</div>
					</div>
				</div>
			</header>

			<div class="post__content" v-html="post.content"></div>

			<footer class="post__footer">
				<router-link :to="'/portfolio'" class="post__navigation--previous icon-arrow-left">Revenir au portfolio</router-link>
			</footer>

		</article>
	</div>
</template>

<script>
import axios from 'axios'
import markdown from '~/plugins/vue-md-render'

export default {
	name: 'portfolioSingle',

	validate ({ params }) {
		return isNaN(params.slug)
	},

	async asyncData ({ params }) {
		try {
			let { data } = await axios.get(`https://rest.emmanuelbeziat.com/portfolio/${params.slug}/`)
			data.content = markdown.render(data.content)
			return { post: data }
		}
		catch (e) {
			error({
				statusCode: 204,
				message: 'No content reached'
			})
		}
	},

	transition (to, from) {
		if (!from) return 'slide-left'
		return +to.query.page < +from.query.page ? 'slide-right' : 'slide-left'
	},

	head () {
		return {
			title: this.post.title,
			meta: [
				{ name: 'description', content: this.post.description, hid: 'description' },
				{ name: 'twitter:title', content: this.post.title, hid: 'twTitle' },
				{ name: 'twitter:url', content: 'https://www.emmanuelbeziat.com/portfolio/'+this.post.slug, hid: 'twUrl' },
				{ name: 'twitter:description', content: this.description, hid: 'twDesc'},

				// Facebook
				{ property: 'og:title', content: this.post.title, hid: 'ogTitle' },
				{ property: 'og:url', content: 'https://www.emmanuelbeziat.com/portfolio/'+this.post.slug, hid: 'ogUrl' },
				{ property: 'og:description', content: this.post.description, hid: 'ogDesc' }
			]
		}
	}
}
</script>
