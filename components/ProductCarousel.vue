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
	transition: 0.7s;
	position: absolute;
	width: 100%;
	height: 100%;
	object-fit: contain;
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
	height: 75vw;
	width: 100%;
}
.img-slider img {
	position: absolute;
	width: 100%;
	height: 100%;
	object-fit: contain;
}
.container {
	display: none;
	width: 100%;
	position: relative;
	padding: 0 1.2rem;
}
.prev,
.next {
	position: absolute;
	top: 50%;
	width: 15px;
	height: 25px;
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
@media screen and (max-width: 1000px) {
	.container {
		display: block;
	}
}
</style>