<template>
	<div>
		<Header2 />
		<div class="content">
			<div class="content-container">
				<div style="cursor: pointer;" v-on:click="toggle('details')">+ Product details</div>
				<div class="myText" ref="myText" :style="[isActiveDetails ? { height : computedHeight } : {}]">
					<ul>
						<li>Dimensions: 1620 x 2030mm</li>
						<li>Weight: 2043g</li>
						<li>Material: 82% Pure Virgin Wool 18% Cotton. Unnapped, with Ultrasuede® trim</li>
						<li>Product Care: Dry clean</li>
					</ul>
				</div>
				<div style="cursor: pointer;" v-on:click="toggle('shipping')">+ Shipping</div>
				<div
					class="myText"
					ref="myText2"
					:style="[isActiveShipping ? { height : computedHeight } : {}]"
				>
					Orders placed Monday to Friday before 16:30 will be confirmed, wrapped and sent that day. Orders placed after 16:30 will be sent the following working day.
					Delivery options will be provided when checking out.
					Within the UK.
				</div>
			</div>
		</div>
		<Footer />
	</div>
</template>


<script>
import Header2 from "@/components/Header2.vue";
import Footer from "@/components/Footer.vue";
export default {
	data() {
		return {
			isActiveDetails: false,
			isActiveShipping: false,
			computedHeight: 0
		};
	},
	components: {
		Header2,
		Footer
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

			const height = this.$refs["myText"].clientHeight + 20 + "px";

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
	margin-top: 10rem;
	margin-left: auto;
	margin-right: auto;
	width: 30%;
}

.myText {
	height: 0;
	overflow: hidden;
	transition: 1s;
}
</style>
