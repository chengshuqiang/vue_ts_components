<template>
	<div v-show="$parent.active === tabName" :class="[tabName === $parent.active ? 'active' : '', 'tab-pane']">
		<slot />
	</div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { Action, Getter, Mutation, State } from "vuex-class";

@Component
export default class TabPane extends Vue {
	// 父组件传递过来的label每一项头部的值
	@Prop() label: String;
	// 是否可点击
	@Prop() disabled: Boolean;
	// 图片
	@Prop() imgSrcLeft: String;
	// 图片
	@Prop() imgSrcTop: String;
	// 显示哪一个内容
	private tabName: String = "tab-" + (this.$parent as any).tabName;
	created() {
		this.tabName = "tab-" + (this.$parent as any).tabName;
		// 给子组件做标识，以便于判断当前是哪一项
		(this.$parent as any).tabName++;
	}
	mounted() {
		(this.$parent as any).panes.push(this);
	}
}
</script>
<style lang="scss" scoped></style>
