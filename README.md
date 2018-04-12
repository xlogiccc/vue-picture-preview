vue-picture-preview
=============

移动端Vue.js图片预览插件 | Mobile-friendly picture file preview Vue.js plugin with horizontal nav and bottom title.

[![Github](https://img.shields.io/github/stars/xLogic92/vue-picture-preview.svg?style=social&label=Star)](https://github.com/xLogic92/vue-picture-preview) [![Github](https://img.shields.io/github/forks/xLogic92/vue-picture-preview.svg?style=social&label=Fork)](https://github.com/xLogic92/vue-picture-preview) [![Github](https://img.shields.io/github/watchers/xLogic92/vue-picture-preview.svg?style=social&label=Watch)](https://github.com/xLogic92/vue-picture-preview)

[![License](https://img.shields.io/npm/l/vue-picture-preview.svg?style=flat-square)](https://www.npmjs.org/package/vue-picture-preview) [![vue-picture-preview](https://img.shields.io/npm/v/vue-picture-preview.svg?style=flat-square)](https://www.npmjs.org/package/vue-picture-preview) [![NPM downloads](http://img.shields.io/npm/dm/vue-picture-preview.svg?style=flat-square)](https://npmjs.org/package/vue-picture-preview) [![NPM downloads](http://img.shields.io/npm/dt/vue-picture-preview.svg?style=flat-square)](https://npmjs.org/package/vue-picture-preview)

![img](https://raw.githubusercontent.com/xlogic92/vue-picture-preview/master/demo.gif)

## 安装

### NPM

```sh
npm install --save vue-picture-preview
```

## 使用
首先在项目的入口文件中引入, 调用 Vue.use 安装。

```javascript
import vuePicturePreview from 'vue-picture-preview'
Vue.use(vuePicturePreview)
```

在根组件添加 lg-preview 组件的位置

```HTML
<!-- Vue root compoment template -->
<div id="app">
    <router-view></router-view>
    <lg-preview></lg-preview>
</div>
```

对于所有图片都可以使用 v-preview 指令来绑定他们的预览功能

```HTML
<img v-for="(img,index) in imgs"
     v-preview="img.url"
     :src="img.url"
     :alt="img.title"
     :key="index"
     preview-title-enable="true"
     preview-nav-enable="true">
```

```javascript
export default {
    data () {
        return {
            imgs: [
                {
                  url: 'http://covteam.u.qiniudn.com/ka2.jpg',
                  title: 'pic1'
                },
                {
                  url: 'http://covteam.u.qiniudn.com/poster.png',
                  title: 'pic2'
                }
            ]
        }
    }
}
```

```css
<style scoped>
img {
   width: 100%;
   height: 100%;
}
</style>
```

## API

* **isTitleEnable**: (boolean, optional) 设置 _preview-title-enable="false"_ 将禁用底部标题. 默认值: true.
* **isHorizontalNavEnable**: (boolean, optional) 设置 _preview-nav-enable="false"_ 将禁用水平导航. 默认值: true.
