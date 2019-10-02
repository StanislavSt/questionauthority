<template>
	<div>
		<Header />
		<div class="image-container">
			<img src="@/assets/Kiril_Art.png" alt />
			<div class="image-description">
				<div class="item">Question Authority</div>
				<div class="item">X</div>
				<div class="item">Kiril kiryakov</div>
			</div>
		</div>
	</div>
</template>

<script>
import Header from "@/components/Header.vue";
export default {
	data() {
		return {};
	},
	components: {
		Header
	}
};
</script>

<style scoped>
.image-container {
	padding: 5rem;
	margin-left: auto;
	margin-right: auto;
	width: auto;
	text-align: center;
}
.image-container img {
	max-width: 90%;
}
.image-container .image-description {
	display: flex;
	justify-content: space-between;
	width: 450px;
	margin-left: auto;
	margin-right: auto;
	max-width: 90%;
}
.image-container .image-description .item {
	justify-content: space-between;
	text-transform: uppercase;
	font-size: 12px;
}
</style>
