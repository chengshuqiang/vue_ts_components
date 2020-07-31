<template>
	<div class="aside"></div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { Action, Getter, Mutation, State } from "vuex-class";

@Component
export default class Aside extends Vue {}
</script>
<style lang="scss" scoped>
.aside {
	width: 240px;
	height: 100vh;
	border-right: 1px solid #cac;
	box-shadow: 3px 0px #2d8cf0;
}
</style>
