## 如何使用

准备好 `zh-CN.json` 和 `en-US.json` 两个 JSON 文件，数据结构见下方 [NoticeData 字段](#noticedata-字段)。

```html
<script src="./dist/notice-widget.umd.cjs"></script>

<script>
  NoticeWidget.init({
    "zh-CN": "./locales/zh-CN.json",
    "en-US": "./locales/en-US.json",
  });

  NoticeWidget.setLang("en-US");
</script>
```

## 方法

| 方法      | 参数                                  | 说明                                                       |
| --------- | ------------------------------------- | ---------------------------------------------------------- |
| `init`    | `(locales: LocaleFiles, lang?: Lang)` | 传入各语言 JSON 文件 URL，初始化并渲染（默认语言 `zh-CN`） |
| `setLang` | `(lang: Lang)`                        | 切换语言，加载对应 JSON 文件并重新渲染                     |

### Lang

`"zh-CN" | "en-US"`

### LocaleFiles

`Record<Lang, string>` — 键为语言标识，值为对应语言 JSON 文件的 URL。

## NoticeData 字段

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
