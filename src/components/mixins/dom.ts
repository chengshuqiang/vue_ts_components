/*
 * 节点操作的一些方法
 * */

//获取滚动条的位置
export function scrollReturnTop(): number {
	return document.documentElement.scrollTop || document.body.scrollTop;
}
// 返回元素偏移位置
export function getOffset(el: any) {}
