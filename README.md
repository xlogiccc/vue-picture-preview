# vue-picture-preview

移动端、PC 端 Vue.js 图片预览插件 | Friendly picture file preview Vue.js plugin based on PhotoSwipe.

[![Github](https://img.shields.io/github/stars/xlogiccc/vue-picture-preview.svg?style=social&label=Star)](https://github.com/xlogiccc/vue-picture-preview) [![Github](https://img.shields.io/github/forks/xlogiccc/vue-picture-preview.svg?style=social&label=Fork)](https://github.com/xlogiccc/vue-picture-preview) [![Github](https://img.shields.io/github/watchers/xlogiccc/vue-picture-preview.svg?style=social&label=Watch)](https://github.com/xlogiccc/vue-picture-preview)

[![License](https://img.shields.io/npm/l/vue-picture-preview.svg?style=flat-square)](https://www.npmjs.org/package/vue-picture-preview) [![vue-picture-preview](https://img.shields.io/npm/v/vue-picture-preview.svg?style=flat-square)](https://www.npmjs.org/package/vue-picture-preview) [![NPM downloads](http://img.shields.io/npm/dm/vue-picture-preview.svg?style=flat-square)](https://npmjs.org/package/vue-picture-preview) [![NPM downloads](http://img.shields.io/npm/dt/vue-picture-preview.svg?style=flat-square)](https://npmjs.org/package/vue-picture-preview)



![demo](https://tva1.sinaimg.cn/large/006y8mN6ly1g95s5gzoc5j30xr0u00tk.jpg)



## 安装

```sh
npm install --save vue-picture-preview
```



## 使用

入口文件中全局引入

```javascript
import Vue from 'vue'
import vuePicturePreview from 'vue-picture-preview';

Vue.component('Previewer', vuePicturePreview);
```

按需局部引入

```javascript
import vuePicturePreview from 'vue-picture-preview';

export default {
  components: {
    Previewer: vuePicturePreview
  }
}
```

示例

```HTML
<div>
    <img
        class="previewer-demo-img"
        v-for="(item, index) in list"
        :src="item.src"
        width="100"
        @click="show(index)"
        :key="index"
      />
      <previewer ref="previewer" :list="list" :options="options"> </previewer>
</div>
```

```javascript
export default {
  data() {
    return {
      list: [
        {
          msrc:
            'https://tva1.sinaimg.cn/thumbnail/006y8mN6ly1g95rjyub5bj30go0b40wc.jpg',
          src:
            'https://tva1.sinaimg.cn/large/006y8mN6ly1g95rjyub5bj30go0b40wc.jpg',
          w: 600,
          h: 400
        },
        {
          msrc:
            'https://tva1.sinaimg.cn/thumbnail/006y8mN6ly1g95rmt8pq4j30go0b4n28.jpg',
          src:
            'https://tva1.sinaimg.cn/large/006y8mN6ly1g95rmt8pq4j30go0b4n28.jpg',
          w: 600,
          h: 400
        },
        {
          msrc:
            'https://tva1.sinaimg.cn/thumbnail/006y8mN6ly1g95rn3grt6j30go0b4n0w.jpg',
          src:
            'https://tva1.sinaimg.cn/large/006y8mN6ly1g95rn3grt6j30go0b4n0w.jpg',
          w: 600,
          h: 400
        }
      ],
      options: {
        getThumbBoundsFn(index) {
          // find thumbnail element
          let thumbnail = document.querySelectorAll('.previewer-demo-img')[
            index
          ];
          // get window scroll Y
          let pageYScroll =
            window.pageYOffset || document.documentElement.scrollTop;
          // optionally get horizontal scroll
          // get position of element relative to viewport
          let rect = thumbnail.getBoundingClientRect();
          // w = width
          return { x: rect.left, y: rect.top + pageYScroll, w: rect.width };
          // Good guide on how to get element coordinates:
          // http://javascript.info/tutorial/coordinates
        }
      }
    };
  },
  methods: {
    show(index) {
      // 显示特定index的图片，使用ref
      this.$refs.previewer.show(index);
    }
  }
};
```



## 属性

| 名字    | 类型     | 默认值 | 说明                                                         | 版本要求 |
| ------- | -------- | ------ | ------------------------------------------------------------ | -------- |
| list    | `array`  |        | 图片列表                                                     | 2.0.1    |
| options | `object` |        | [PhotoSwipe的配置](https://photoswipe.com/documentation/options.html) | 2.0.1    |



## 事件

| 名字             | 参数 | 说明                             | 版本要求 |
| ---------------- | ---- | -------------------------------- | -------- |
| @on-close        | -    | 关闭时触发                       | 2.0.1    |
| @on-index-change | -    | 切换图片后触发(首次打开不会触发) | 2.0.1    |



## 插槽

| 名字          | 说明                             | 版本要求 |
| ------------- | -------------------------------- | -------- |
| button-after  | 操作按钮之后，可以添加自定义图标 | 2.0.1    |
| button-before | 操作按钮之前，可以添加自定义图标 | 2.0.1    |



## 方法

| 名字            | 参数  | 说明             | 版本要求 |
| --------------- | ----- | ---------------- | -------- |
| goTo            | index | 跳转到特定图片   | 2.0.1    |
| prev            | -     | 跳转到上一张     | 2.0.1    |
| next            | -     | 跳转到下一张     | 2.0.1    |
| getCurrentIndex | -     | 获取当前图片索引 | 2.0.1    |



## 重要提示

- **注意避免使用过大图片**: 否则可能会出现卡顿黑屏的情况(尤其是在 Android 机子上)
- **建议为所有图片定义尺寸**: PhotoSwipe 本身要求设置宽高，本组件会尝试对没有设置宽高的图片先加载再显示，可能会造成性能问题或者宽带浪费。

