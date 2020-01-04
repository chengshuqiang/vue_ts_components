import { RouteConfig } from "vue-router";

import Tab from "@/views/Tabs.vue";
import BackTop from "@/views/BackTop.vue";
import BreadCrumb from "@/views/BreadCrumb.vue";
import SlotContent from "@/views/SlotContent.vue";
import Signature from "@/views/Signature.vue";
import Card from "@/views/Card.vue";
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
		path: "/signature",
		name: "signature",
		component: Signature,
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
	{
		path: "/card",
		name: "card",
		component: Card,
		meta: {
			title: "卡片",
			Auth: true,
		},
	},
);
export default viewsRouter;
