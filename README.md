## 如何使用

```html
<script src="./dist/notice-widget.umd.cjs"></script>

<script>
  NoticeWidget.show({
    title: "🎉 Easysearch 2.0.2 发布，国密功能正式上线！",
    tag: {
      label: "New",
    },
    button: {
      label: "立即试用",
      url: "https://example.com",
    },
    menus: [
      { label: "下载", url: "https://example.com/download" },
      { label: "联系我们", url: "https://example.com/contact" },
    ],
    logo: "https://example.com/logo.svg",
    dropdownMenus: [
      {
        label: "产品",
        description: "查看所有产品",
        url: "https://example.com/products",
      },
    ],
    closable: true,
  });
</script>
```

## 配置项

| 参数            | 类型      | 必填 | 默认值    | 说明             |
| --------------- | --------- | ---- | --------- | ---------------- |
| `title`         | `string`  | 否   | -         | 通知标题         |
| `color`         | `string`  | 否   | `#333`    | 文字颜色         |
| `background`    | `string`  | 否   | `#f5f5f5` | 背景颜色         |
| `tag`           | `object`  | 否   | -         | 标签配置         |
| `button`        | `object`  | 否   | -         | 按钮配置         |
| `menus`         | `array`   | 否   | -         | 菜单列表         |
| `logo`          | `string`  | 否   | -         | Logo 图片地址    |
| `dropdownIcon`  | `object`  | 否   | -         | 下拉菜单图标配置 |
| `dropdownMenus` | `array`   | 否   | -         | 下拉菜单列表     |
| `divider`       | `object`  | 否   | -         | 分隔线配置       |
| `closeIcon`     | `object`  | 否   | -         | 关闭图标配置     |
| `closable`      | `boolean` | 否   | `true`    | 是否显示关闭按钮 |

### tag

| 参数         | 类型     | 必填 | 默认值    | 说明     |
| ------------ | -------- | ---- | --------- | -------- |
| `label`      | `string` | 是   | -         | 标签文本 |
| `color`      | `string` | 否   | `#fff`    | 文字颜色 |
| `background` | `string` | 否   | `#ff9900` | 背景颜色 |

### button

| 参数         | 类型     | 必填 | 默认值    | 说明         |
| ------------ | -------- | ---- | --------- | ------------ |
| `label`      | `string` | 是   | -         | 按钮文本     |
| `color`      | `string` | 否   | `#fff`    | 文字颜色     |
| `background` | `string` | 否   | `#1784fc` | 背景颜色     |
| `url`        | `string` | 否   | -         | 点击跳转链接 |

### menus

| 参数    | 类型     | 必填 | 默认值 | 说明     |
| ------- | -------- | ---- | ------ | -------- |
| `label` | `string` | 是   | -      | 菜单文本 |
| `url`   | `string` | 是   | -      | 菜单链接 |

### dropdownIcon

| 参数    | 类型     | 必填 | 默认值 | 说明     |
| ------- | -------- | ---- | ------ | -------- |
| `color` | `string` | 否   | `#999` | 图标颜色 |

### dropdownMenus

| 参数          | 类型     | 必填 | 默认值 | 说明     |
| ------------- | -------- | ---- | ------ | -------- |
| `label`       | `string` | 是   | -      | 菜单文本 |
| `description` | `string` | 是   | -      | 菜单描述 |
| `url`         | `string` | 是   | -      | 菜单链接 |

### divider

| 参数         | 类型     | 必填 | 默认值 | 说明       |
| ------------ | -------- | ---- | ------ | ---------- |
| `background` | `string` | 否   | `#bbb` | 分隔线颜色 |

### closeIcon

| 参数    | 类型     | 必填 | 默认值 | 说明     |
| ------- | -------- | ---- | ------ | -------- |
| `color` | `string` | 否   | `#666` | 图标颜色 |
