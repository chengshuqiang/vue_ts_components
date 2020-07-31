<template>
	<div>
		<Aside></Aside>
		<Nav></Nav>
		<div class="content"></div>
		<Footer></Footer>
	</div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { Action, Getter, Mutation, State } from "vuex-class";
import Aside from "@/layout/HomeComponents/Aside.vue";
import Nav from "@/layout/HomeComponents/Nav.vue";
import Footer from "@/layout/HomeComponents/Footer.vue";
@Component({ components: { Aside, Nav, Footer } })
export default class Home extends Vue {}
</script>
<style lang="scss" scoped></style>
