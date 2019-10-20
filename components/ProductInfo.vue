<template>
	<div>
		<div class="content">
			<div class="content-container">
				<div style="cursor: pointer;" v-on:click="toggle('details')">Shipping</div>
				<div class="myText" ref="myText" :style="[isActiveDetails ? { height : computedHeight } : {}]">
					<ul>
						<li>Dimensions: 1620 x 2030mm</li>
						<li>Weight: 2043g</li>
						<li>Material: 82% Pure Virgin Wool 18% Cotton. Unnapped, with Ultrasuede® trim</li>
						<li>Product Care: Dry clean</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
</template>


<script>
export default {
	data() {
		return {
			isActiveDetails: false,
			isActiveShipping: false,
			computedHeight: 0
		};
	},
	methods: {
		toggle(params) {
			if (params === "details")
				this.isActiveDetails = !this.isActiveDetails;
			else this.isActiveShipping = !this.isActiveShipping;
		},
		initHeight() {
			this.$refs["myText"].style.height = "auto";
			this.$refs["myText"].style.position = "absolute";
			this.$refs["myText"].style.visibility = "hidden";
			this.$refs["myText"].style.display = "block";

			const height = this.$refs["myText"].clientHeight + 15 + "px";

			this.computedHeight = height;

			this.$refs["myText"].style.height = 0;
			this.$refs["myText"].style.position = null;
			this.$refs["myText"].style.visibility = null;
			this.$refs["myText"].style.display = null;
		}
	},
	mounted: function() {
		this.initHeight();
	}
};
</script>

<style scoped>
.content {
	height: auto;
	margin-top: 2rem;
	margin-left: auto;
	margin-right: auto;
	width: 100%;
}
.content-container {
}
.myText {
	height: 0;
	overflow: hidden;
	transition: 0.7s;
	font-size: 14px;
}
ul {
	list-style-type: none;
}
</style>
