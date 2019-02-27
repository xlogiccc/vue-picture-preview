var rollup = require('rollup');
var babel = require('rollup-plugin-babel');
var uglify = require('rollup-plugin-uglify');
var npm = require('rollup-plugin-node-resolve');
var commonjs = require('rollup-plugin-commonjs');
var vue = require('rollup-plugin-vue');

rollup.rollup({
    entry: 'index.js', // 打包入口文件
    plugins: [
        vue(),
        npm({ jsnext: true, main: true }),
        uglify(), // 压缩代码
        commonjs(), // 支持CommonJS模块语法
        babel({  // babel配置
            exclude: 'node_modules/**',
            presets: [ 'es2015-rollup' ]
        })
    ],
    external: [ // 不被打包的库，比如在项目中会被引入
        'vue'
    ]
}).then(function(bundle) {
    bundle.write({
        // output format - 'amd', 'cjs', 'es6', 'iife', 'umd'
        // amd – 使用像requirejs一样的银木块定义
        // cjs – CommonJS，适用于node和browserify / Webpack
        // es6 (default) – 保持ES6的格式
        // iife – 使用于<script> 标签引用的方式
        // umd – 适用于CommonJs和AMD风格通用模式
        format: 'cjs',  // 指定要打包成什么格式
        dest: 'dist/vue-picture-preview.js' // 编译完的文件需要被存放的路径
    });
    bundle.write({
        // output format - 'amd', 'cjs', 'es6', 'iife', 'umd'
        // amd – 使用像requirejs一样的银木块定义
        // cjs – CommonJS，适用于node和browserify / Webpack
        // es6 (default) – 保持ES6的格式
        // iife – 使用于<script> 标签引用的方式
        // umd – 适用于CommonJs和AMD风格通用模式
        moduleName: 'vuePicturePreview',
        format: 'iife',  // 指定要打包成什么格式
        dest: 'dist/vue-picture-preview.min.js' // 编译完的文件需要被存放的路径
    });
});
