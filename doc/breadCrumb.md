#### BreadCrumb 面包屑

#### 用法
```html
    <bread-crumb :bread-data="breadCrumbData" separator=">" />
```
```typescript
    import breadCrumb from "@/components/breadcrumb/breadCrumb.vue";
    class interfaceBread {
        title: String;
        href: String;
    }
    @Component({
        components: {
            breadCrumb,
        },
    })
    private breadCrumbData: Array<interfaceBread> = [
            { title: "111111", href: "/1" },
            { title: "222222", href: "/2" },
            { title: "333333", href: "/3" },
            { title: "444444", href: "/4" },
        ];
```
:bread-data="breadCrumbData" :绑定数据
 separator=">"：面包屑中间的字符串