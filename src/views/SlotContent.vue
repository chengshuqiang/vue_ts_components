<template>
	<div>
		<!--
		后备内容
		<slotContent>1111</slotContent>-->
		<!--
		具名插槽
		<slotContent>
			<header slot="header">
				<h1>头部</h1>
			</header>
			<main slot="main">
				<h2>身子</h2>
			</main>
			<footer slot="footer">
				<h3>尾部</h3>
			</footer>
			<span slot="span">11111111111</span>
		</slotContent>-->

		<!--作用域插槽-->
		<!-- <slot-content v-slot="slotProps">{{ slotProps.userData.firstName }}</slot-content>-->
		<!-- <slot-content v-slot:default="slotProps">{{ slotProps.userData.firstName }}</slot-content>-->
		<slot-content v-slot="slotProps">
			{{ slotProps.userData.firstName }}
		</slot-content>
	</div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { Action, Getter, Mutation, State } from "vuex-class";
import slotContent from "@/components/slotcontent/index.vue";
@Component({
	components: {
		slotContent,
	},
})
export default class SlotContent extends Vue {}
</script>
<style lang="scss" scoped></style>
