import { RouteConfig } from "vue-router";

import Tab from "@/views/Tabs.vue";
import BackTop from "@/views/BackTop.vue";
import BreadCrumb from "@/views/BreadCrumb.vue";
import Canvas from "@/views/Canvas.vue";
import SlotContent from "@/views/SlotContent.vue";

const viewsRouter: RouteConfig[] = [];
viewsRouter.push(
	{
		path: "/tabs",
		name: "tabs",
		component: Tab,
		meta: {
			title: "tab标签页",
			Auth: true,
		},
	},
	{
		path: "/back_top",
		name: "back_top",
		component: BackTop,
		meta: {
			title: "返回顶端",
			Auth: true,
		},
	},
	{
		path: "/breadcrumb",
		name: "breadcrumb",
		component: BreadCrumb,
		meta: {
			title: "面包屑",
			Auth: true,
		},
	},
	{
		path: "/canvas",
		name: "canvas",
		component: Canvas,
		meta: {
			title: "电子签名",
			Auth: true,
		},
	},
	{
		path: "/slotcontent",
		name: "slotcontent",
		component: SlotContent,
		meta: {
			title: "插槽",
			Auth: true,
		},
	},
);
export default viewsRouter;
