vue-picture-preview
=============

移动端Vue.js图片预览插件 | Mobile-friendly picture file preview Vue.js plugin with horizontal nav and bottom title.

![img](http://xlogic.me/demo/vue-picture-preview-1.png)
![img](http://xlogic.me/demo/vue-picture-preview-2.png)
![img](http://xlogic.me/demo/vue-picture-preview-3.png)

## 安装

### npm

``` sh
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
<img v-for="img in imgs" v-preview="img" :src="img">
```

```javascript
export default {
    data () {
        return {
            imgs: ['http://covteam.u.qiniudn.com/ka2.jpg', 'http://covteam.u.qiniudn.com/poster.png']
        }
    }
}
```

## API

- **isTitleEnable**: (boolean, optional) 设置 *isTitleEnable="false"* 将禁用水平导航. 默认值: true.
- **isHorizontalNavEnable**: (boolean, optional) 设置 *isHorizontalNavEnable="false"* 将禁用底部标题. 默认值: true.