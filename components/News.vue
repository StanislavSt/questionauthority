<template>
	<div class="news-wrapper">
		<div class="text">Collections</div>
		<div class="news-container animated fadeIn">
			<div v-for="item in this.blok.stories" :key="item.id" class="image-container">
				<nuxt-link tag="img" :src="item.content.thumbnail" :to="'/' + item.full_slug"></nuxt-link>
				<div class="image-description">
					<div class="item">{{item.content.title}}</div>
				</div>
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
@import url("https://fonts.googleapis.com/css?family=Raleway:600,900&display=swap");
* {
	font-family: "Raleway", sans-serif;
	color: white;
	text-transform: uppercase;
	font-size: 12px;
}
.news-container {
	display: grid;
	grid-template-columns: auto auto;
	grid-gap: 3rem;
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
.text {
	margin-top: 5rem;
	text-align: center;
	font-size: 32px;
	text-transform: uppercase;
	color: black;
}
@media screen and (max-width: 780px) {
	.image-container {
		padding-top: 0;
	}
	.news-container {
		grid-template-columns: auto;
	}
	.image-container .image-description .item {
		font-size: 14px;
	}
	.text {
		font-size: 5vw;
		margin-top: 2rem;
	}
}
</style>