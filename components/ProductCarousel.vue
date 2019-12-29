<template>
	<div class="container">
		<transition-group tag="div" class="img-slider" name="slide">
			<div v-for="i in [currentIndex]" :key="i">
				<img :src="currentImg" />
			</div>
		</transition-group>
		<a class="prev" @click="prev" href="#"></a>
		<a class="next" @click="next" href="#"></a>
	</div>
</template>
<script>
export default {
	props: ["blok"],
	data() {
		return {
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
			return this.blok[Math.abs(this.currentIndex) % this.blok.length]
				.filename;
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
	height: 900px;
	width: 800px;
}
.img-slider img {
	position: absolute;
	top: 0;
	left: 0;
	bottom: 0;
	right: 0;
	height: 200px;
	width: 200px;
}
.container {
	position: relative;
	display: inline-block;
	padding: 0 2rem;
}
.prev,
.next {
	position: absolute;
	top: 50%;
	width: 30px;
	height: 40px;
	transition: 0.7s ease;
	cursor: pointer;
	background-repeat: no-repeat;
}
.next {
	right: 0;
	background-image: url("../assets/icons/next.png");
	background-position: right;
}
.prev {
	left: 0;
	background-image: url("../assets/icons/prev.png");
	background-position: left;
}
</style>