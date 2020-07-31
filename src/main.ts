import Vue from "vue";
import App from "./App.vue";
import router from "./router";

//运行markdown文档
// import MarkdownRun from 'vue-markdown-run'
// 组件样式
import "@/assets/css/index.scss";
Vue.config.productionTip = false;

new Vue({
	router,
	render: h => h(App),
}).$mount("#app");
