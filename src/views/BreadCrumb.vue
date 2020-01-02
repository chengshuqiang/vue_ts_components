<template>
	<div>
		<bread-crumb :bread-data="breadCrumbData" separator=">" />
	</div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { Action, Getter, Mutation, State } from "vuex-class";
import breadCrumb from "@/components/breadcrumb/breadCrumb.vue";
class interfaceBread {
	title: String;
	href: String;
}
@Component({
	components: {
		breadCrumb,
	},
})
export default class BreakCrumb extends Vue {
	private breadCrumbData: Array<interfaceBread> = [
		{ title: "11111221", href: "/1" },
		{ title: "222222", href: "/2" },
		{ title: "333333", href: "/3" },
		{ title: "444444", href: "/4" },
	];
}
</script>
<style lang="scss" scoped></style>
