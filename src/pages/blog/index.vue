<template>
	<section class="blog">
		<div class="post-list">
			<article class="post-list__item" v-for="post in posts" :key="post.slug">
				<h1 class="post-list__title"><nuxt-link :to="'/blog/'+post.slug">{{ post.title }}</nuxt-link></h1>

				<div class="post-list__infos">
					<div class="post-list__date">Posté le <time>{{ post.date | moment('Do MMMM YYYY') }}</time></div>

					<div class="post-list__tags">
						<span class="c-tag" v-for="tag in post.tags" :key="tag">{{ tag }}</span>
					</div>
				</div>
			</article>
		</div>
	</section>
</template>

<script>
import axios from 'axios'

export default {
	name: 'blogList',

	asyncData () {
		return axios.get('https://rest.emmanuelbeziat.com/posts')
		.then((res) => {
			return { posts: res.data }
		})
	},

	transition (to, from) {
		if (!from) return 'slide-left'
		return +to.query.page < +from.query.page ? 'slide-right' : 'slide-left'
	},

	head () {
		return {
			title: 'Blog'
		}
	}
}
</script>
