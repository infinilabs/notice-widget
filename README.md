## 如何使用

准备好 `zh-CN.json` 和 `en-US.json` 两个 JSON 文件，数据结构见下方 [NoticeData 字段](#noticedata-字段)。

```html
<script src="https://infinilabs.com/notice-widget/notice-widget.umd.cjs"></script>

<script>
  NoticeWidget.init({
    locales: {
      "zh-CN": "https://infinilabs.com/notice-widget/locales/zh-CN.json",
      "en-US": "https://infinilabs.com/notice-widget/locales/en-US.json",
    },
  });
</script>
```

## 方法

| 方法        | 参数                           | 说明                                                              |
| ----------- | ------------------------------ | ----------------------------------------------------------------- |
| `init`      | `(options: NoticeInitOptions)` | 初始化并渲染，支持语言 JSON、默认语言（`zh-CN`）和主题（`light`） |
| `setLocale` | `(locale: Locale)`             | 切换语言，加载对应 JSON 文件并重新渲染                            |
| `setTheme`  | `(theme: Theme)`               | 切换主题（`light` / `dark`），仅更新组件主题类名                  |

### Locale

`"zh-CN" | "en-US"`

### Theme

`"light" | "dark"`

### LocaleFiles

`Record<Locale, string>` — 键为语言标识，值为对应语言 JSON 文件的 URL。

### NoticeInitOptions

| 参数              | 类型                                      | 必填 | 默认值    | 说明                                                                |
| ----------------- | ----------------------------------------- | ---- | --------- | ------------------------------------------------------------------- |
| `locales`         | `LocaleFiles`                             | 是   | -         | 各语言 JSON 文件 URL 映射                                           |
| `locale`          | `Locale`                                  | 否   | `"zh-CN"` | 初始化语言                                                          |
| `theme`           | `Theme`                                   | 否   | `"light"` | 初始化主题（仅 `light` / `dark`）                                   |
| `themes`          | `{ light?: ThemeVars; dark?: ThemeVars }` | 否   | -         | 各主题的 CSS 变量覆盖配置                                           |
| `neutralizeFixed` | `boolean`                                 | 否   | `false`   | 若页面存在 `position: fixed` 元素与通知栏重叠，开启此项即可忽略重叠 |

## NoticeData 字段

| 参数            | 类型                                        | 必填 | 默认值 | 说明                        |
| --------------- | ------------------------------------------- | ---- | ------ | --------------------------- |
| `title`         | `string`                                    | 否   | -      | 通知标题                    |
| `tag`           | `string`                                    | 否   | -      | 标签文本                    |
| `button`        | `object`                                    | 否   | -      | 按钮配置                    |
| `menus`         | `array`                                     | 否   | -      | 菜单列表                    |
| `logo`          | `string \| { light: string; dark: string }` | 否   | -      | Logo 图片地址，可按主题区分 |
| `dropdownMenus` | `array`                                     | 否   | -      | 下拉菜单列表                |
| `closable`      | `boolean`                                   | 否   | `true` | 是否显示关闭按钮            |

### button

| 参数    | 类型     | 必填 | 默认值 | 说明         |
| ------- | -------- | ---- | ------ | ------------ |
| `label` | `string` | 是   | -      | 按钮文本     |
| `url`   | `string` | 否   | -      | 点击跳转链接 |

### menus

| 参数    | 类型     | 必填 | 默认值 | 说明     |
| ------- | -------- | ---- | ------ | -------- |
| `label` | `string` | 是   | -      | 菜单文本 |
| `url`   | `string` | 是   | -      | 菜单链接 |

### dropdownMenus

| 参数          | 类型     | 必填 | 默认值 | 说明     |
| ------------- | -------- | ---- | ------ | -------- |
| `label`       | `string` | 是   | -      | 菜单文本 |
| `description` | `string` | 是   | -      | 菜单描述 |
| `url`         | `string` | 是   | -      | 菜单链接 |

## ThemeVars 字段

通过 `themes.light` / `themes.dark` 传入，用于覆盖对应主题的默认 CSS 变量。

| 参数                            | 类型     | 对应 CSS 变量                       | 默认值（light） |
| ------------------------------- | -------- | ----------------------------------- | --------------- |
| `textColor`                     | `string` | `--text-color`                      | `#333`          |
| `bgColor`                       | `string` | `--bg-color`                        | `#f5f5f5`       |
| `borderColor`                   | `string` | `--border-color`                    | `#e4e4e4`       |
| `textHoverColor`                | `string` | `--text-hover-color`                | `#1784fc`       |
| `tag.textColor`                 | `string` | `--tag-text-color`                  | `#fff`          |
| `tag.bgColor`                   | `string` | `--tag-bg-color`                    | `#ff9900`       |
| `button.textColor`              | `string` | `--button-text-color`               | `#fff`          |
| `button.bgColor`                | `string` | `--button-bg-color`                 | `#1784fc`       |
| `divider.color`                 | `string` | `--divider-color`                   | `#bbb`          |
| `dropdownMenuIcon.color`        | `string` | `--dropdown-menu-icon-color`        | `#999`          |
| `dropdownMenuIcon.hoverColor`   | `string` | `--dropdown-menu-icon-hover-color`  | `#1784fc`       |
| `closeIcon.color`               | `string` | `--close-icon-color`                | `#666`          |
| `closeIcon.hoverColor`          | `string` | `--close-icon-hover-color`          | `#ff4d4f`       |
| `dropdownMenu.titleColor`       | `string` | `--dropdown-menu-title-color`       | `#333`          |
| `dropdownMenu.descriptionColor` | `string` | `--dropdown-menu-description-color` | `#999`          |
| `dropdownMenu.bgColor`          | `string` | `--dropdown-menu-bg-color`          | `#fff`          |
| `dropdownMenu.borderColor`      | `string` | `--dropdown-menu-border-color`      | `#f4f4f4`       |
| `dropdownMenu.arrowIconColor`   | `string` | `--dropdown-menu-arrow-icon-color`  | `#1784fc`       |
