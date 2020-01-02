<template>
	<div class="breadcrumb clearfix">
		<template v-for="(item, index) in breadData">
			<router-link v-if="item.href" :key="index" :to="item.href" :class="{ 'last-child': breadData.length === index + 1 }" v-text="item.title" />
			<span v-else :key="index" v-text="separator" />
			<span v-if="breadData.length > index + 1" :key="index + 100" class="separator" v-text="separator" />
		</template>
	</div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { Action, Getter, Mutation, State } from "vuex-class";
class interfaceBread {
	title: String;
	href: String;
}
@Component
export default class breadCrumb extends Vue {
	@Prop({ type: Array }) private breadData: interfaceBread[];
	@Prop({ type: String }) private separator: String;
}
</script>
<style lang="scss" scoped></style>
