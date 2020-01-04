<template>
	<div :class="shadow ? 'is-' + shadow + '-shadow' : 'is-always-shadow'" class="card">
		<img class="img" :src="imgSrc" title="技能提升·专业高级（二）" alt="技能提升·专业高级（二）" />
		<div class="card__body">
			<slot></slot>
		</div>
	</div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { Action, Getter, Mutation, State } from "vuex-class";

@Component
export default class index extends Vue {
	@Prop() shadow: String;
	@Prop() imgSrc: String;
}
</script>
<style lang="scss" scoped></style>
