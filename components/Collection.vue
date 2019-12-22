<template>
	<div>
		<Header />
		<div class="container" v-editable="blok">
			<div class="title">{{blok.title}}</div>
		</div>
		<Footer />
	</div>
</template>
<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
export default {
	components: {
		Header,
		Footer
	},
	props: ["blok"],
	data() {
		return {};
	}
};
</script>