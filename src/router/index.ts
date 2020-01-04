import Vue from "vue";
import VueRouter from "vue-router";
import viewsRouter from "@/router/viewsRouter";
import layoutRouter from "@/router/layout";
Vue.use(VueRouter);

const routes = [...layoutRouter, ...viewsRouter];

const router = new VueRouter({
	mode: "history",
	base: process.env.BASE_URL,
	routes,
});
// 路由守卫
router.beforeEach((to, form, next) => {
	console.log(to);
	if (to.meta.title) {
		document.title = to.meta.title;
	}
	next();
	/*// 判断是否需要登录
	if (to.matched.some(record => record.meta.Auth)) {
		console.log("11111111111");
		// 判断是否存在token
		if (localStorage.getItem("token")) {
			// 不存在，跳转到登录
			next({ path: "/login", query: { redirect: to.fullPath } });
		} else {
			next();
		}
	} else {
		next();
	}*/
});
export default router;
