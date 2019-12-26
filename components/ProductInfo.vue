<template>
	<div>
		<div class="content">
			<div class="content-container">
				<div>
					<span class="main" v-on:click="toggle('details')">Material</span>
				</div>
				<div class="myText" ref="myText" :style="[isActiveDetails ? { height : computedHeight } : {}]">
					<ul>
						<li v-if="blok.dimensions !='' && blok.dimensions">Dimensions: {{blok.dimensions}}</li>
						<li v-if="blok.weight !=''  && blok.weight">Weight: {{blok.weight}}</li>
						<li v-if="blok.material !='' && blok.material">Material: {{blok.material}}</li>
						<li v-if="blok.product_care !='' && blok.product_care">Product Care: {{blok.product_care}}</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
</template>


<script>
export default {
	props: ["blok"],
	data() {
		return {
			isActiveDetails: true,
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
* {
	font-size: 0.9rem;
}
.main {
	cursor: pointer;
	font-weight: bold;
	font-size: 0.9rem;
}
.main:hover {
	color: grey;
}
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
	padding: 0.5rem 0 0 0;
}
</style>
