<template>
	<div>
		<!--
		后备内容
		<a href="#">
			aaaaa
			<slot>这是一个a标签，当父组件里面没有内容时，这里面的内容显示</slot>
		</a>-->
		<!--具名插槽
		<slot name="header" />
		<slot name="main" />
		<slot name="footer" />
		<slot name="span" />-->
		<!--
			插槽作用域:
			1.将数据绑定在slot上面(绑定在slot元素上的特性被称为插槽prop)
			2.
		-->
		<div>
			<slot :userData="userData">{{ userData.lastName }}</slot>
		</div>
	</div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { Action, Getter, Mutation, State } from "vuex-class";
class InterfaceData {
	lastName: String;
	firstName: String;
}
@Component
export default class index extends Vue {
	private userData: InterfaceData = { lastName: "lastName", firstName: "firstName" };
}
</script>
<style lang="scss" scoped></style>
