<template>
	<div>
		<Header />
		<div class="products animated fadeIn delay-0.2s">
			<ul class="overview">
				<li class="overview__item" v-for="product in stories" :key="product.full_slug">
					<nuxt-link class="overview__item-inner" :to="'/' + product.full_slug">
						<img
							v-if="product.content.images.length > 0"
							:src="product.content.images[0].filename | resize('300x0')"
							:alt="product.content.images[0].name"
						/>
						<div class="product-name">€{{product.content.price}}</div>
					</nuxt-link>
				</li>
			</ul>
		</div>
		<Footer />
	</div>
</template>




<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
export default {
	data() {
		return { stories: [] };
	},
	components: {
		Header,
		Footer
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
@import url("https://fonts.googleapis.com/css?family=Barlow&display=swap");
@import url("https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.2/animate.min.css");

.products {
	display: flex;
	justify-content: center;
	padding-top: 5rem;
	max-width: 100%;
}

.overview {
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	grid-gap: 5rem;
	margin: 0px;
	padding: 0px;
	margin-top: 20px;
	min-height: 100vh;
}

.overview__item {
	display: flex;
	width: auto;
	justify-content: center;
	align-items: center;
}

.overview__item-inner {
	display: flex;
	justify-content: center;
	padding: 0.5rem;
	margin-left: auto;
	margin-right: auto;
	text-decoration: none;
	color: #000;
	display: block;
	max-width: 100%;
}
.overview__item-inner img {
	max-width: 100%;
	max-height: 20rem;
	-webkit-filter: grayscale(0%); /* Safari 6.0 - 9.0 */
	filter: grayscale(0%) contrast(120%);

	opacity: 1;
	transition: filter 0.5s;
	transition: opacity 0.5s;
}
.overview__item-inner img:hover {
	-webkit-filter: grayscale(100%); /* Safari 6.0 - 9.0 */
	filter: grayscale(100%);
	opacity: 0.7;
	transition: filter 0.5s ease;
	transition: opacity 0.5s;
}
.overview__item-inner .product-name {
	font-family: "Barlow", sans-serif;
	text-transform: uppercase;
	text-align: center;
	font-size: 12px;
	min-width: 100%;
}
</style>
