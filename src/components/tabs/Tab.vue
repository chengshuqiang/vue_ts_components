<template>
	<div :class="[position === 'left' ? 'tabs-left' : 'tabs-top']">
		<div class="tabs-nav">
			<!-- 这里渲染头 -->
			<div v-for="(pane, index) in panes" :key="index" :class="[active === pane.tabName ? 'active' : '', 'tabs-tab', pane.disabled ? 'disabled' : '']" @click="clickTab(index + 1, pane)">
				<img v-if="position !== 'left'" :src="pane.imgSrcTop" />
				{{ pane.label }}
				<img v-if="position !== 'top'" :src="pane.imgSrcLeft" />
			</div>
		</div>
		<div class="tabs-content">
			<slot />
		</div>
	</div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { Action, Getter, Mutation, State } from "vuex-class";

@Component
export default class Tab extends Vue {
	// 默认显示的哪一项(父组件传递过来的值)
	@Prop({ required: false, type: String, default: "tab-1" }) value: String;
	// 控制tab头部是横向还是纵向
	@Prop({ required: false, type: String, default: "top" }) position: String;
	// 触发事件
	@Prop({ type: Function, default: null }) change: Function;
	// 头部数据
	private panes: Array<any> = [];
	// 父组件的tabName (子组件的tabName：'tab-1',从1开始)
	private tabName: number = 1;
	// 存储tabName
	private active: String = this.value;
	clickTab(index: number, pane: any) {
		if (!pane.disabled) {
			this.active = pane.tabName;
			this.$emit("input", pane.tabName);
			// 这里触发事件
			this.change && this.change(index, pane, pane.tabName);
		}
	}
	create() {}
}
</script>
<style lang="scss" scoped></style>
