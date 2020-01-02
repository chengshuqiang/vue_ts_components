import Vue from "vue";
import VueRouter from "vue-router";
import Tab from "../views/Tabs.vue";
import BackTop from "@/views/BackTop.vue";
import BreadCrumb from "@/views/BreadCrumb.vue";
Vue.use(VueRouter);

const routes = [
	{
		path: "/tabs",
		name: "tabs",
		component: Tab,
		meta: {
			title: "tab标签页",
		},
	},
	{
		path: "/back_top",
		name: "back_top",
		component: BackTop,
		meta: {
			title: "返回顶端",
		},
	},
	{
		path: "/breadcrumb",
		name: "breadcrumb",
		component: BreadCrumb,
		meta: {
			title: "面包屑",
		},
	},
];

const router = new VueRouter({
	mode: "history",
	base: process.env.BASE_URL,
	routes,
});

export default router;
