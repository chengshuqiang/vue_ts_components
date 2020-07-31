<template>
	<div class="back">
		<div class="card_content">
			<card v-for="(item, index) in 13" :key="index" img-src="http://bbs-fd.zol-img.com.cn/t_s800x5000/g4/M04/09/00/Cg-4WVE4lvyIHszpAABsHDCstNAAAFjeQAVpiMAAGw0289.jpg" shadow="hover">
				<h4>技能提升·专业高级（{{ index + 1 }}）</h4>
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
	margin: 0 auto;
	width: 1440px;
	height: auto;
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	&:after {
		content: "";
		width: 39%;
		border: 1px solid transparent;
	}
	.card {
		width: 19%;
		margin-bottom: 20px;
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
