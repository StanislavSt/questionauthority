<template>
	<div class="container-gallery">
		<a
			href="https://www.facebook.com/questionauthoritysf/photos/a.494778897292773/1712915928812391/?type=3&theater"
		>
			<img class="image" src="@/assets/Pictures/Pic3.jpg" alt />
		</a>
		<a
			href="https://www.facebook.com/questionauthoritysf/photos/a.494778897292773/1712915928812391/?type=3&theater"
		>
			<img class="image" src="@/assets/Pictures/Pic4.jpg" alt />
		</a>
		<a
			href="https://www.facebook.com/questionauthoritysf/photos/a.494778897292773/1712915928812391/?type=3&theater"
		>
			<img class="image" src="@/assets/Pictures/Pic6.jpg" alt />
		</a>

		<a
			href="https://www.facebook.com/questionauthoritysf/photos/a.494778897292773/1712915928812391/?type=3&theater"
		>
			<img class="image" src="@/assets/Pictures/Pic2.jpg" alt />
		</a>
		<a
			href="https://www.facebook.com/questionauthoritysf/photos/a.494778897292773/1712915928812391/?type=3&theater"
		>
			<img class="image" src="@/assets/Pictures/Pic6.jpg" alt />
		</a>
		<a
			href="https://www.facebook.com/questionauthoritysf/photos/a.494778897292773/1712915928812391/?type=3&theater"
		>
			<img class="image" src="@/assets/Pictures/Pic4.jpg" alt />
		</a>
		<a
			href="https://www.facebook.com/questionauthoritysf/photos/a.494778897292773/1712915928812391/?type=3&theater"
		>
			<img class="image" src="@/assets/Pictures/Pic3.jpg" alt />
		</a>
		<a
			href="https://www.facebook.com/questionauthoritysf/photos/a.494778897292773/1712915928812391/?type=3&theater"
		>
			<img class="image" src="@/assets/Pictures/Pic4.jpg" alt />
		</a>
		<a
			href="https://www.facebook.com/questionauthoritysf/photos/a.494778897292773/1712915928812391/?type=3&theater"
		>
			<img class="image" src="@/assets/Pictures/Pic3.jpg" alt />
		</a>
		<a
			href="https://www.facebook.com/questionauthoritysf/photos/a.494778897292773/1712915928812391/?type=3&theater"
		>
			<img class="image" src="@/assets/Pictures/Pic6.jpg" alt />
		</a>
	</div>
</template>


<script>
export default {
	data() {
		return {};
	}
};
</script>

<style scoped>
.container-gallery {
	padding: 9rem 1rem 1rem 1rem;
	width: 50rem;
	max-width: 100%;
	display: grid;
	justify-content: center;
	grid-template-columns: repeat(5, 9rem);
	grid-template-rows: repeat(2, 9rem);
	grid-gap: 0.1rem;
	margin-left: auto;
	margin-right: auto;
}
.container-gallery img {
	-webkit-filter: grayscale(100%); /* Safari 6.0 - 9.0 */
	filter: grayscale(100%);
	width: 100%;
	height: 100%;
	transition: filter 0.5s;
}
.container-gallery img:hover {
	-webkit-filter: grayscale(0); /* Safari 6.0 - 9.0 */
	filter: grayscale(0) saturate(150%);
	transition: filter 0.5s;
}

@media screen and (max-width: 700px) {
	.container-gallery {
		grid-template-columns: repeat(5, 7rem);
		grid-template-rows: repeat(2, 7rem);
	}
}
@media screen and (max-width: 560px) {
	.container-gallery {
		grid-template-columns: repeat(5, 6rem);
		grid-template-rows: repeat(2, 6rem);
	}
}
@media screen and (max-width: 480px) {
	.container-gallery {
		grid-template-columns: repeat(5, 5rem);
		grid-template-rows: repeat(2, 5rem);
	}
}
@media screen and (max-width: 420px) {
	.container-gallery {
		grid-template-columns: repeat(5, 3.5rem);
		grid-template-rows: repeat(2, 3.5rem);
	}
}
</style>
