<template>
	<div class="collection-wrapper">
		<div class="collection-container">
			<div class="images-container">
				<div v-for="(image,index) in post.images" :key="index" class="image-container">
					<img :src="image.filename" alt />
				</div>
			</div>
			<div class="collection-name-container">
				<div class="text-wrapper">
					<h2 v-if="post.title">{{post.title}}</h2>
					<p v-if="post.shot_by">Shot by: {{post.shot_by}}</p>
					<p v-if="post.models">Modelled by: {{post.models}}</p>
					<p v-if="post.additional_text">{{post.additional_text}}</p>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { getPost, getProducts } from "@/api";
export default {
	async asyncData(context) {
		const post = await getPost(context);
		return {
			post: post.story.content
		};
	}
};
</script>
<style scoped>
@import url("https://fonts.googleapis.com/css?family=Raleway:900&display=swap");

.collection-wrapper {
	margin-top: 10rem;
}
.collection-container {
	width: 60%;
	min-width: 780px;
	margin: 0 auto;
	display: flex;
}
.images-container {
	flex: 1.8;
}
.image-container img {
	width: 100%;
	margin-bottom: 1rem;
}
.collection-name-container {
	margin-left: 3rem;
	flex: 1;
}
.text-wrapper {
	border-top: 2px solid black;
	display: inline-block;
}
.text-wrapper > * {
	margin-top: 2rem;
}
.text-wrapper h2 {
	margin-top: 1rem;
	font-family: Raleway;
}
@media screen and (max-width: 780px) {
	.collection-wrapper {
		margin-top: 2rem;
	}
	.collection-container {
		flex-direction: column;
		width: 80%;
		min-width: 0;
	}
	.collection-name-container {
		order: 1;
		width: 100%;
		margin: 2rem 0;
	}
	.images-container {
		order: 2;
	}
}
</style>
