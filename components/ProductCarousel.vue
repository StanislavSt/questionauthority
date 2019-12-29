
<template>
	<div class="carousel-view">
		<div v-for="(slide,index) in blok" class="slide" :key="slide.id">
			<img
				class="fade"
				:class="{'img_hidden' : index != currentIndex-1, 'img_shoe' : index == currentIndex + 1 }"
				:src="slide.src"
			/>
		</div>
		<div class="carousel-controls">
			<button @click="prevSlide()">prev</button>
			<button @click="nextSlide()">next</button>
		</div>
	</div>
</template>

<script>
export default {
	props: ["blok"],
	data() {
		return {
			currentIndex: 1
		};
	},
	methods: {
		nextSlide() {
			if (this.currentIndex + 1 <= this.blok.length) this.currentIndex++;
			else this.currentIndex = 1;
		},
		prevSlide() {
			if (this.currentIndex - 1 < 1) this.currentIndex = blok.length;
			else this.currentIndex--;
		}
	}
};
</script>

<style scoped>
.img_hidden {
	display: none;
}
.img_show {
	display: block;
}

img {
	width: 20rem;
	height: 20rem;
}
/* Fading animation */
.fade {
	-webkit-animation-name: fade;
	-webkit-animation-duration: 1.5s;
	animation-name: fade;
	animation-duration: 1.5s;
}

@-webkit-keyframes fade {
	from {
		opacity: 0.4;
	}
	to {
		opacity: 1;
	}
}

@keyframes fade {
	from {
		opacity: 0.4;
	}
	to {
		opacity: 1;
	}
}
</style>