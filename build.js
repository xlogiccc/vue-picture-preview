
/* eslint-disable */
const rollup = require('rollup');
const babel = require('rollup-plugin-babel');
const eslint = require('rollup-plugin-eslint').eslint;
const resolve = require('rollup-plugin-node-resolve');
const commonjs = require('rollup-plugin-commonjs');
// const uglify = require('rollup-plugin-uglify');
const postcss = require('rollup-plugin-postcss');
const vue = require('rollup-plugin-vue');

// PostCSS plugins
const simpleVars = require('postcss-simple-vars');
const nested = require('postcss-nested');
const presetEnv = require('postcss-preset-env');
const cssnano = require('cssnano');

rollup
  .rollup({
    input: 'src/index.js', // 打包入口文件
    plugins: [
      postcss({
        plugins: [
          simpleVars(),
          nested(),
          presetEnv(),
          cssnano({
            autoprefixer: false,
            'postcss-zindex': false
          })
        ],
        extensions: ['.css']
      }),
      vue(),
      resolve(),
      commonjs(), // 支持CommonJS模块语法
      eslint({
        exclude: ['src/css/**']
      }),
      babel({
        exclude: 'node_modules/**'
      })
    ],
    external: [
      // 不被打包的库，比如在项目中会被引入
      'vue'
    ]
  })
  .then(function(bundle) {
    bundle.write({
      format: 'cjs', // 指定要打包成什么格式
      file: 'dist/vue-picture-preview.js' // 编译完的文件需要被存放的路径
    });
    bundle.write({
      name: 'vuePicturePreview',
      format: 'iife', // 指定要打包成什么格式
      file: 'dist/vue-picture-preview.min.js' // 编译完的文件需要被存放的路径
    });
  });
