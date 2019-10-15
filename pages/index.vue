<template>
	<div>
		<Header />
		<div class="image-container">
			<nuxt-link to="/Kiril">
				<img src="@/assets/Kiril_Art.jpg" alt />
			</nuxt-link>
			<div class="image-description">
				<div class="item">Question Authority</div>
				<div class="item">X</div>
				<div class="item">Kiril kiryakov</div>
			</div>
		</div>
		<div class="image-container">
			<nuxt-link to="/SavageRavage">
				<img src="@/assets/SavageRavage.jpg" alt />
			</nuxt-link>
			<div class="image-description">
				<div class="item">Question Authority</div>
				<div class="item">X</div>
				<div class="item">Savage Ravage</div>
			</div>
		</div>
		<Footer />
	</div>
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
export default {
	data() {
		return {};
	},
	components: {
		Header,
		Footer
	}
};
</script>

<style scoped>
.image-container {
	padding: 5rem 5rem 10rem 5rem;
	margin-left: auto;
	margin-right: auto;
	width: auto;
	text-align: center;
}
.image-container img {
	width: 30%;
}
.image-container .image-description {
	display: flex;
	justify-content: space-between;
	width: 450px;
	margin-left: auto;
	margin-right: auto;
	width: 29.5%;
	padding-top: 0.5rem;
}
.image-container .image-description .item {
	justify-content: space-between;
	text-transform: uppercase;
	font-size: 12px;
}
</style>
