<template>
	<div class="back">
		<div class="card_content">
			<card v-for="(item, index) in 4" :key="index" img-src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" shadow="hover">
				<h4>技能提升·专业高级（二）</h4>
				<p>液化天然气生产必备技能</p>
				<span>视频</span>
				<b>321人学习</b>
			</card>
		</div>
	</div>
</template>

<script lang="ts">
/*
 * 控制卡片的阴影（always / hover / never）
 * shadow="always"
 *
 * */
import { Component, Prop, Vue } from "vue-property-decorator";
import { Action, Getter, Mutation, State } from "vuex-class";
import card from "@/components/card/index.vue";
@Component({ components: { card } })
export default class Card extends Vue {}
</script>
<style lang="scss" scoped>
.card_content {
	height: auto;
	display: flex;
	justify-content: space-between;
	.card {
		min-width: 230px;
		margin: 0 5px;
	}
	span {
		padding: 5px 10px;
		background: #aaccaa;
		color: white;
		font-size: 12px;
		border-radius: 11px;
	}
	b {
		float: right;
	}
}
.back {
	background-color: #e8e8e8;
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
}
</style>
