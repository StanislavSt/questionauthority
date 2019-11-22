<template>
	<div class="sticky">
		<div class="date-container">{{timestamp}}</div>
		<div class="logo-container">
			<nuxt-link to="/">
				<img src="@/assets/QA_Logo_White.png" alt />
			</nuxt-link>
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
	display: flex;
	justify-content: space-between;
	width: 100%;
	height: 2.3rem;
	position: fixed;
	top: 0;
	z-index: 999;
	background: black;
}
.sticky div {
	margin: -0.1rem 2rem 0.1rem 2rem;
}
.date-container,
.consume-container {
	flex: 1;
	display: flex;
	align-items: center;
}
.consume-container {
	justify-content: flex-end;
}
.logo-container {
	text-align: center;
}
.logo-container img {
	height: 100%;
	object-fit: contain;
}
.logo-container img:hover {
	opacity: 0.7;
	filter: alpha(opacity=70); /* For IE8 and earlier */
}
</style>
