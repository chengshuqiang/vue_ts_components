<template>
	<div :style="{ right: right + 'px', bottom: bottom + 'px', opacity: show ? 1 : 0, visibility: show ? 'visible' : 'hidden' }" class="back-top" @click="ClickHandler">
		<a href="javascript:;" v-text="text" />
	</div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { Action, Getter, Mutation, State } from "vuex-class";
import { scrollReturnTop } from "@/components/mixins/dom";
@Component
export default class backTop extends Vue {
	private show: Boolean = false;
	@Prop({ type: String, default: "返回顶部" }) text: String;
	// 离浏览器的顶部高度
	@Prop({ type: Number, default: 100 }) height: Number;
	@Prop({ type: Number, default: 30 }) bottom: Number;
	@Prop({ type: Number, default: 30 }) right: Number;

	ClickHandler() {
		let that: any = this;
		smoothScroll();
		function smoothScroll() {
			const currentScroll: number = scrollReturnTop();
			if (currentScroll > 0) {
				/*
				 * 告诉浏览器你希望执行一个动画，并且要求浏览器在下次重绘之前调用指定函数更新动画，
				 * 该方法需要传入一个回调函数作为参数，该回调函数会在浏览器下一次重回之前执行
				 * */
				window.requestAnimationFrame(smoothScroll);
				window.scrollTo(0, currentScroll - currentScroll / 5);
			}
		}
	}
	_windowScroll() {
		// 当滚动条的滚动的高度大于默认高度，显示返回顶部
		if (scrollReturnTop() > this.height) {
			this.show = true;
		} else {
			this.show = false;
		}
	}
	mounted() {
		// 渲染完成之后，执行里面的方法
		this.$nextTick(() => {
			// 把当前组件插入页面
			document.body.appendChild(this.$el);
			// 判断显示
			this._windowScroll();
		});
		// 添加一个scroll事件执行this._windowScroll方法
		window.addEventListener("scroll", this._windowScroll);
	}
	destroyed() {
		// 组件销毁之后，删除scroll事件
		window.removeEventListener("scroll", this._windowScroll);
		// 如果当前组件还存在，就删除当前组件节点
		if (this.$el && this.$el.parentNode) {
			// 通过当前节点的父亲节点删除当前组件节点
			this.$el.parentNode.removeChild(this.$el);
		}
	}
}
</script>
<style lang="scss" scoped></style>
