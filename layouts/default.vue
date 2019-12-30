<template>
	<div class="body_wrapper">
		<Header />
		<nuxt />
		<Footer />
		<div
			hidden
			id="snipcart"
			data-api-key="NmM4YjBiYzAtMzhiMy00Y2MzLWFkMTktMzhkOWNhOTI1N2VmNjM3MTI4OTIzOTAwMTE2MDM4"
		>
			<div class="root"></div>
		</div>
		<script src="https://cdn.snipcart.com/themes/v3.0.5/default/snipcart.js"></script>
	</div>
</template>
<script>
import Header from "@/components/Header";
import Footer from "@/components/Footer";
export default {
	components: {
		Header,
		Footer
	}
};
</script>
<style>
html {
	font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont,
		"Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
	font-size: 16px;
	word-spacing: 1px;
	-ms-text-size-adjust: 100%;
	-webkit-text-size-adjust: 100%;
	-moz-osx-font-smoothing: grayscale;
	-webkit-font-smoothing: antialiased;
	box-sizing: border-box;
	/*background-color: #0b1015;
	color: white;*/
}
*,
*:before,
*:after {
	box-sizing: border-box;
	margin: 0;
}
.teaser,
.column {
	font-size: 2rem;
	text-align: center;
	line-height: 3;
	background: #ebeff2;
	border-radius: 10px;
	margin: 10px 5px;
}
.grid {
	display: flex;
}

.column {
	flex: 1;
}
/*.snipcart-item-line {
	background-color: white;
	border-bottom: 1px solid #ccc;
}
.snipcart-layout__header {
	background-color: black;
}
.snipcart-cart-header {
	background-color: saddlebrown;
}
.snipcart-cart__content {
	background-color: darkblue;
}
.snipcart-modal__container {
	background-color: gainsboro;
}*/
</style>

