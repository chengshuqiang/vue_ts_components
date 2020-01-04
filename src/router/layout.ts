import { RouteConfig } from "vue-router";

import Home from "@/layout/Home.vue";
import User from "@/layout/User.vue";
import NotFound from "@/layout/NotFound.vue";
import Login from "@/layout/Login.vue";

const layoutRouter: RouteConfig[] = [];
layoutRouter.push(
	{
		path: "/",
		redirect: "/home",
	},
	{
		path: "/home",
		component: Home,
		name: "Home",
		meta: {
			title: "首页",
			Auth: true,
		},
	},
	{
		path: "/login",
		component: Login,
		name: "Login",
		meta: {
			title: "登录",
		},
	},
	{
		// 动态路由匹配
		path: "/user/:id",
		component: User,
		name: "User",
		meta: {
			title: "用户详情",
			Auth: true,
		},
	},
	{
		// 匹配404页面
		path: "*",
		component: NotFound,
		name: "NotFound",
	},
);

export default layoutRouter;
