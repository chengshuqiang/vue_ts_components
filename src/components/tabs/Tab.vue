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
<style lang="scss" scoped>
.tabs-top {
	background-color: white;
	border-radius: 5px;
	overflow: hidden;
	.tabs-nav {
		position: relative;
		border-bottom: 2px solid #e4e7ed;
		height: 38px;
		.tabs-tab {
			float: left;
			padding: 0 20px;
			position: relative;
			line-height: 36px;
			cursor: pointer;
			z-index: 2;
			&:after {
				content: "";
				display: block;
				margin: 0 auto;
				height: 2px;
				background: #409eff;
				opacity: 0;
				width: 0;
				transition: all 0.3s;
			}
			/*选中*/
			&.active {
				&:after {
					opacity: 1;
					width: 100%;
				}
			}
			/*禁用*/
			&.disabled {
				cursor: not-allowed;
				color: #999;
			}
		}
	}
	.tabs-content {
		padding: 20px;
	}
}
.tabs-left {
	display: flex;
	.tabs-nav {
		width: 30%;
		background-color: white;
		border-radius: 5px;
		overflow: hidden;
		.tabs-tab {
			padding: 0 20px;
			line-height: 36px;
			cursor: pointer;
			position: relative;
			z-index: 2;
			overflow: hidden;
			img {
				float: right;
				margin-top: 10px;
			}
			&:after {
				content: "";
				display: block;
				width: 2px;
				background: #409eff;
				position: absolute;
				top: 0px;
				left: 0;
				opacity: 0;
				height: 0;
				transition: all 0.3s;
			}
			/*选中*/
			&.active {
				&:after {
					opacity: 1;
					height: 40px;
				}
			}
			/*禁用*/
			&.disabled {
				cursor: not-allowed;
				color: #999;
			}
		}
	}
	.tabs-content {
		margin-left: 10px;
		width: calc(100% - 30% - 10px);
		background-color: white;
		border-radius: 5px;
		padding: 20px;
	}
}
</style>
