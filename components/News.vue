<template>
	<div class="news-container animated fadeIn">
		<div v-for="item in this.blok.stories" :key="item.id" class="image-container">
			<nuxt-link tag="img" :src="item.content.thumbnail" :to="'/' + item.full_slug"></nuxt-link>
			<div class="image-description">
				<div class="item">{{item.content.title}}</div>
			</div>
		</div>
	</div>
</template>
<script>
export default {
	props: ["blok"],
	data() {
		return {};
	}
};
</script>
<style scoped>
* {
	color: white;
	text-transform: uppercase;
	font-size: 12px;
}
.news-container {
	display: grid;
	grid-gap: 3rem;
	grid-template-columns: auto auto;
	width: 100rem;
	max-width: 100%;
	max-height: 100%;
	margin-left: auto;
	margin-right: auto;
	padding: 1rem;
}
.image-container {
	max-width: 100%;
	padding-top: 4rem;
	text-align: center;
}
.image-container img {
	width: 100%;
	margin: 0 auto;
	cursor: pointer;
	transition: opacity 0.5s ease-out;
	-moz-transition: opacity 0.5s ease-out;
	-webkit-transition: opacity 0.5s ease-out;
	-o-transition: opacity 0.5s ease-out;
}
.image-container img:hover {
	opacity: 0.6;
}
.image-container .image-description {
	display: flex;
	justify-content: center;
	padding-top: 0.5rem;
}
.image-container .image-description .item {
	background: black;
	font-size: 15px;
}
@media screen and (max-width: 720px) {
	.image-container {
		padding-top: 0;
	}
}
</style>