<template>
	<div class="container">
		<transition-group tag="div" class="img-slider" name="slide">
			<div v-for="i in [currentIndex]" :key="i">
				<img :src="currentImg" />
			</div>
		</transition-group>
		<a class="prev" @click="prev" href="#">&#10094; Previous</a>
		<a class="next" @click="next" href="#">&#10095; Next</a>
	</div>
</template>
<script>
export default {
	data() {
		return {
			images: [
				"https://cdn.pixabay.com/photo/2015/12/12/15/24/amsterdam-1089646_1280.jpg",
				"https://cdn.pixabay.com/photo/2016/02/17/23/03/usa-1206240_1280.jpg",
				"https://cdn.pixabay.com/photo/2015/05/15/14/27/eiffel-tower-768501_1280.jpg",
				"https://cdn.pixabay.com/photo/2016/12/04/19/30/berlin-cathedral-1882397_1280.jpg"
			],
			timer: null,
			currentIndex: 0
		};
	},
	methods: {
		next: function() {
			this.currentIndex += 1;
		},
		prev: function() {
			this.currentIndex -= 1;
		}
	},
	computed: {
		currentImg() {
			return this.images[
				Math.abs(this.currentIndex) % this.images.length
			];
		}
	}
};
</script>

<style scoped>
.slide-leave-active,
.slide-enter-active {
	transition: 1s;
}
.slide-enter {
	transform: translate(100%, 0);
}
.slide-leave-to {
	transform: translate(-100%, 0);
}
.img-slider {
	overflow: hidden;
	position: relative;
	height: 400px;
	width: 800px;
}
.img-slider img {
	position: absolute;
	top: 0;
	left: 0;
	bottom: 0;
	right: 0;
}
.container {
	position: relative;
	display: inline-block;
}
.prev,
.next {
	cursor: pointer;
	position: absolute;
	width: auto;
	color: white;
	font-weight: bold;
	font-size: 10px;
	transition: 0.7s ease;
	border-radius: 0 4px 4px 0;
	text-decoration: none;
	user-select: none;
}
.next {
	top: 50%;
	right: 0;
}
.prev {
	left: 0;
	top: 50%;
}
.prev:hover,
.next:hover {
	background-color: rgba(0, 0, 0, 0.9);
}
</style>