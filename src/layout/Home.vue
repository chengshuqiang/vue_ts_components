<template>
	<div>
		<ul>
			<router-link tag="li" to="/user/1">1111</router-link>
			<router-link tag="li" to="/user/2">2222</router-link>
			<router-link tag="li" to="/user/3">3333</router-link>
			<router-link tag="li" to="/user/4">4444</router-link>
			<router-link tag="li" to="/user/5">5555</router-link>
		</ul>
		<router-view></router-view>
	</div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { Action, Getter, Mutation, State } from "vuex-class";

@Component
export default class Home extends Vue {}
</script>
<style lang="scss" scoped></style>
