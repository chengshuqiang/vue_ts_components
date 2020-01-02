import Vue from "vue";
import VueRouter from "vue-router";
import Tab from "../views/Tabs.vue";

Vue.use(VueRouter);

const routes = [
	{
		path: "/tabs",
		name: "tabs",
		component: Tab,
		meta: {
			title: "tab",
		},
	},
];

const router = new VueRouter({
	mode: "history",
	base: process.env.BASE_URL,
	routes,
});

export default router;
