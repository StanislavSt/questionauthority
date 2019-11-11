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
	height: 4rem;
	position: fixed;
	top: 0;
	z-index: 999;
}
.sticky div {
	font-family: "Raleway", sans-serif;
	font-size: 22px;
	font-weight: bold;
	margin: 0 2rem 0.3% 2rem;
}
.logo-container {
	text-align: center;
	display: block;
}
.logo-container img {
	width: auto;
	height: 100%;
}
.logo-container img:hover {
	opacity: 0.7;
	filter: alpha(opacity=70); /* For IE8 and earlier */
}
</style>
