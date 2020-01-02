<template>
	<div class="backTop">
		<div>滚动页面试试</div>
		<csq-back-top text="1111" :height="20" :right="200" :bottom="300" />
	</div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { Action, Getter, Mutation, State } from "vuex-class";
import backTop from "@/components/backTop/backTop.vue";

@Component({
	components: {
		CsqBackTop: backTop,
	},
})
export default class BackTop extends Vue {}
</script>
<style lang="scss" scoped>
.backTop {
	height: 1000px;
}
</style>
