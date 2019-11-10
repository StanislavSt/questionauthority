<template>
	<div>
		<Header2 />
		<div class="video-container animated fadeIn delay-0.5s">
			<div class="video-title">Savage Ravage</div>
			<iframe
				src="https://player.vimeo.com/video/367024729?color=ff9933&title=0&byline=0&portrait=0"
				width="840"
				height="489"
				frameborder="0"
				allow="autoplay; fullscreen"
				allowfullscreen
			></iframe>
		</div>
		<div class="products animated fadeIn delay-0.2s">
			<div class="overview__item" v-for="product in stories.slice(0,2)" :key="product.full_slug">
				<nuxt-link class="overview__item-inner" :to="'/' + product.full_slug">
					<img
						v-if="product.content.images.length > 0"
						:src="product.content.images[0].filename | resize('400x0')"
						:alt="product.content.images[0].name"
					/>
					<div class="product-price">€{{product.content.price}}</div>
				</nuxt-link>
			</div>
		</div>
		<div class="small-products animated fadeIn delay-0.2s">
			<div class="overview__item" v-for="product in stories.slice(0,6)" :key="product.full_slug">
				<nuxt-link class="overview__item-inner" :to="'/' + product.full_slug">
					<img
						v-if="product.content.images.length > 0"
						:src="product.content.images[0].filename | resize('200x0')"
						:alt="product.content.images[0].name"
					/>
					<div class="product-price">€{{product.content.price}}</div>
				</nuxt-link>
			</div>
		</div>
		<div
			class="information-container"
		>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type</div>
		<Footer />
	</div>
</template>
<script>
import Header2 from "@/components/Header2.vue";
import Footer from "@/components/Footer.vue";
export default {
	components: {
		Header2,
		Footer
	},
	data() {
		return { stories: [] };
	},
	asyncData(context) {
		// Check if we are in the editing mode
		let editMode = false;

		if (
			context.query._storyblok ||
			context.isDev ||
			(typeof window !== "undefined" &&
				window.localStorage.getItem("_storyblok_draft_mode"))
		) {
			if (typeof window !== "undefined") {
				window.localStorage.setItem("_storyblok_draft_mode", "1");
				if (window.location == window.parent.location) {
					window.localStorage.removeItem("_storyblok_draft_mode");
				}
			}
			editMode = true;
		}
		return context.app.$storyapi
			.get(`cdn/stories/`, {
				starts_with: "products/",
				version: editMode ? "draft" : "published",
				cv: context.store.state.cacheVersio
			})
			.then(res => {
				return res.data;
			})
			.catch(res => {
				if (!res.response) {
					console.error(res);
					errorCallback({
						statusCode: 404,
						message: "Failed to receive content from the api."
					});
				} else {
					console.error(res.response.data);
					errorCallback({
						statusCode: res.response.status,
						message: res.response.data
					});
				}
			});
	}
};
</script>
<style scoped>
.video-container {
	padding-top: 10rem;
	text-align: center;
}
.products {
	display: flex;
	padding-top: 5rem;
	margin-left: auto;
	margin-right: auto;
	width: 50%;
	justify-content: space-between;
}
.small-products {
	padding-top: 5rem;
	display: grid;
	justify-content: center;
	width: auto;
	margin-left: auto;
	margin-right: auto;
	grid-template-columns: 16rem 16rem 16rem;
	grid-template-rows: repeat(2, 16rem);
}
.small-products img {
	display: block;
	margin: auto;
}
.product-price {
	text-align: center;
	font-size: 16px;
}
.information-container {
	padding-top: 5rem;
	width: 30%;
	margin: auto;
}
.video-container .video-title {
	font-size: 2rem;
	text-transform: uppercase;
	padding-bottom: 3rem;
}
</style>
