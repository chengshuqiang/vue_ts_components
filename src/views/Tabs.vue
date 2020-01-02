<template>
	<div class="tab-style ">
		<csq-tab position="left" value="tab-3" :change="_clickHandler">
			<csq-tab-pane disabled="true" label="选项一">1111111111111111111111</csq-tab-pane>
			<csq-tab-pane label="选项二">2222222222222222222222</csq-tab-pane>
			<csq-tab-pane label="选项三">3333333333333333333333</csq-tab-pane>
			<csq-tab-pane
				img-src-top="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAAA2UlEQVQ4T5XSvW7CMBDA8b8HnqBP0BUGnoAX6MYCYkbqjEA+L0it2imXhD4ACAm6VO0rJnEVFCO+koAX++z76XQnG6qVpmk/y7JhiJ1z7+F8azenl6o6AHbAM7AVkWkdPoNlkqq+AHvgyXu/cs4tWiuGBFUdA99AB3gTkY9LfFUxJMRxPPXeb6p4LiJfp7gWlklRFM2MMQdgjHm11q4DboRVz0vgs8ITa+3P4dw08iRJukVR/AI94E9ERq0Vm1BtxTZ0E96DruC96AyWKM/zY/MP/dWmCV++/QN+L1oPUB9MGAAAAABJRU5ErkJggg=="
				label="选项四"
			>
				4444444444444444444444
			</csq-tab-pane>
			<csq-tab-pane
				img-src-left="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAAA2UlEQVQ4T5XSvW7CMBDA8b8HnqBP0BUGnoAX6MYCYkbqjEA+L0it2imXhD4ACAm6VO0rJnEVFCO+koAX++z76XQnG6qVpmk/y7JhiJ1z7+F8azenl6o6AHbAM7AVkWkdPoNlkqq+AHvgyXu/cs4tWiuGBFUdA99AB3gTkY9LfFUxJMRxPPXeb6p4LiJfp7gWlklRFM2MMQdgjHm11q4DboRVz0vgs8ITa+3P4dw08iRJukVR/AI94E9ERq0Vm1BtxTZ0E96DruC96AyWKM/zY/MP/dWmCV++/QN+L1oPUB9MGAAAAABJRU5ErkJggg=="
				label="选项五"
			>
				5555555555555555555555
			</csq-tab-pane>
		</csq-tab>
	</div>
</template>

<script lang="ts">
/*
 * csq-tab标签配置：
 * value：配置默认显示内容
 * position:left 配置tab组件头部所在方向（默认为top）
 * @change="_clickHandler" 可打印出点击的信息
 *
 * csq-tab-pane:标签配置
 * label:标签头部内容
 * disabled:是否可点击
 * img-src-top:左侧图标
 * img-src-left:右侧图标
 * */
import { Component, Prop, Vue } from "vue-property-decorator";
import { Action, Getter, Mutation, State } from "vuex-class";
import { Tab, TabPane } from "@/components/tabs/index";
@Component({
	components: { "csq-tab": Tab, "csq-tab-pane": TabPane },
})
export default class Tabs extends Vue {
	_clickHandler(index: number, pane: any, tabName: String) {
		console.log(index, pane, tabName);
	}
}
</script>
<style lang="scss" scoped>
.tab-style {
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	background-color: #f3f3f3;
	padding: 30px;
}
</style>
