<template>
	<div>
		user{{ this.$route.params.id }}
		<button @click="btn">返回</button>
	</div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { Action, Getter, Mutation, State } from "vuex-class";

@Component
export default class User extends Vue {
	btn() {
		this.$router.push({ path: "/home" });
		// this.$router.go(-1);
	}
}
</script>
<style lang="scss" scoped></style>
