<template>
	<div>
		<div
			class="information-container"
		>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</div>
		<div class="signature">
			<img src="@/assets/QA_Signature.png" alt />
		</div>
	</div>
</template>
<style scoped>
.signature {
	padding: 2rem 1rem 0 1rem;
	width: 30rem;
	max-width: 100%;
	margin-left: auto;
	margin-right: auto;
}
.signature img {
	height: 100%;
	width: 100%;
}
.information-container {
	font-family: "Raleway", sans-serif;
	font-size: 16px;
	font-weight: bold;
	padding: 5rem 1rem;
	width: 40rem;
	max-width: 100%;
	margin: auto;
	text-align: center;
}
@media screen and (max-width: 560px) {
	.information-container {
		font-size: 13px;
		padding: 3rem 1rem;
	}
}
</style>