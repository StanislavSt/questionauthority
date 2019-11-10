<template>
	<div class="sticky">
		<div class="date-container">11.10.2019</div>
		<div class="logo-container">
			<nuxt-link to="/">
				<img src="@/assets/QA_Logo.png" alt />
			</nuxt-link>
		</div>
		<div class="consume-container">CONSUME</div>
	</div>
</template>
<script>
export default {
	data: function() {
		return {};
	}
};
</script>
<style scoped>
@import url("https://fonts.googleapis.com/css?family=Raleway:900&display=swap");
.sticky {
	padding: 0 1rem 0 1rem;
	display: flex;
	justify-content: space-between;
	width: 100%;
	position: fixed;
	top: 0;
}
.sticky div {
	font-family: "Raleway", sans-serif;
	font-size: 22px;
	font-weight: bold;
}
.logo-container {
	display: flex;
}
.logo-container img {
	justify-content: flex-start;

	max-width: 100%;
	height: auto;
	width: 10rem;
}
</style>
