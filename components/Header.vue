<template>
	<div class="sticky">
		<div class="date-container">{{timestamp}}</div>
		<div class="logo-container">
			<nuxt-link tag="img" :src="require('@/assets/QA_Logo_White.png')" to="/"></nuxt-link>
		</div>
		<div class="consume-container">CONSUME</div>
	</div>
</template>
<script>
export default {
	data: function() {
		return {
			timestamp: ""
		};
	},
	created() {
		setInterval(this.getNow, 1000);
	},
	methods: {
		getNow: function() {
			const today = new Date();
			const date =
				today.getFullYear() +
				"-" +
				(today.getMonth() + 1) +
				"-" +
				today.getDate();
			const time =
				today.getHours() +
				":" +
				today.getMinutes() +
				":" +
				today.getSeconds();
			const dateTime = date + " " + time;
			this.timestamp = dateTime;
		}
	}
};
</script>
<style scoped>
@import url("https://fonts.googleapis.com/css?family=Raleway:900&display=swap");
* {
	font-family: "Raleway", sans-serif;
	font-size: 18px;
	font-weight: bold;
	color: white;
}
.sticky {
	position: fixed;
	top: 0;
	padding: 0 1rem;
	display: flex;
	width: 100%;
	height: 2.3rem;
	z-index: 999;
	background: black;
}
.date-container,
.consume-container,
.logo-container {
	flex: 1;
	display: flex;
	align-items: center;
}
.consume-container {
	justify-content: flex-end;
}
.logo-container {
	justify-content: center;
}
.logo-container img {
	height: 100%;
	width: auto;
	object-fit: contain;
	cursor: pointer;
}
.logo-container img:hover {
	opacity: 0.7;
	filter: alpha(opacity=70); /* For IE8 and earlier */
}
@media screen and (max-width: 600px) {
	* {
		font-size: 14px;
	}
	.date-container {
		display: none;
	}
	.logo-container {
		justify-content: flex-start;
		max-width: 60px;
	}
}
</style>
