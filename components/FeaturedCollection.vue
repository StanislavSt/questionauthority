<template>
	<div class="section-featured-collection">
		<div class="featured-collection">
			<a class="section-right"></a>
			<a class="section-left"></a>
		</div>
	</div>
</template>

<script>
export default {};
</script>

<style scoped>
.section-featured-collection {
	height: 900px;
	width: 100%;
}
.featured-collection {
	height: 100%;
	width: 100%;
	display: flex;
}
.section-right {
	flex: 1;
	order: 2;
	background-repeat: no-repeat;
	background-size: cover;
	background-position: center top;
	background-image: url("../assets/Kiril/Urb/Negative0-12-11.jpg");
	transition: all 0.4s;
}
.section-left {
	flex: 2;
	order: 1;
	background-repeat: no-repeat;
	background-size: cover;
	background-position: center top;
	background-image: url("../assets/Kiril/Urb/Negative0-21-20.jpg");
	transition: all 0.4s;
}
.section-right:hover ~ .section-left {
	flex: 1;
	flex-shrink: 1;
}
</style>