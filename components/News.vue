<template>
	<div class="news-container animated fadeIn">
		<div class="image-container">
			<nuxt-link tag="img" :src="require('@/assets/QA_Comfort.png')" to="/absolute-comfort"></nuxt-link>
			<div class="image-description">
				<div class="item">Question Authority - Absolute Comfort</div>
			</div>
		</div>
		<div class="image-container">
			<nuxt-link tag="img" :src="require('@/assets/SavageRavage.png')" to="/SavageRavage"></nuxt-link>
			<div class="image-description">
				<div class="item">Question Authority &nbsp; &nbsp;X &nbsp; &nbsp;Savage Ravage</div>
			</div>
		</div>
		<div class="image-container">
			<nuxt-link tag="img" :src="require('@/assets/QA_WhiteTee.jpg')" to="/SavageRavage"></nuxt-link>
			<div class="image-description">
				<div class="item">Question Authority &nbsp; &nbsp;X &nbsp; &nbsp;Kiril Kiryakov</div>
			</div>
		</div>
		<div class="image-container">
			<nuxt-link tag="img" :src="require('@/assets/QAINSTA1.jpg')" to="/SavageRavage"></nuxt-link>
			<div class="image-description">
				<div class="item">Question Authority - Concept I</div>
			</div>
		</div>
	</div>
</template>
<script>
export default {};
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
	width: 50rem;
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
}
</style>