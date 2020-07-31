<template>
	<div>
		<div class="content1 content"></div>
		<div class="content2 content"></div>
		<div class="content3 content"></div>
		<div class="content4 content"></div>
		<div class="content5 content"></div>
	</div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { Action, Getter, Mutation, State } from "vuex-class";

@Component
export default class Login extends Vue {}
</script>
<style lang="scss" scoped>
.content {
	height: 70px;
	width: 160px;
	margin: 0 auto 10px;
	border-radius: 35px;
}
.content1 {
	background: linear-gradient(to right, #299bf5, #8080ff);
}
.content2 {
	background: linear-gradient(to right, #8086ff, #81ccff);
}
.content3 {
	background: linear-gradient(to right, #9980e4, #eb808e);
}
.content4 {
	background: linear-gradient(to right, #f3b068, #ee8b81);
}
</style>
