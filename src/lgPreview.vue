<template>
  <transition name="lg-preview-fade">
    <div class="lg-preview-wrapper" v-show="preview.show" @click="leave" @touchmove.prevent>
      <div class="lg-preview-loading" v-show="preview.loading">
        <div></div>
      </div>
      <img class="lg-preview-img" v-if="preview.current.src" :src="preview.current.src" :alt="preview.current.title" v-show="!preview.loading">
      <div class="lg-preview-title" v-if="preview.isTitleEnable&&preview.current.title" v-show="!preview.loading">
        {{preview.current.title}}
      </div>
      <div class="lg-preview-nav-left" v-if="preview.isHorizontalNavEnable" v-show="!preview.loading">
        <span class="lg-preview-nav-arrow" @click.stop="preAction"></span>
      </div>
      <div class="lg-preview-nav-right" v-if="preview.isHorizontalNavEnable" v-show="!preview.loading">
        <span class="lg-preview-nav-arrow" @click.stop="nextAction"></span>
      </div>
    </div>
  </transition>
</template>

<script>
import './css/lgPreview.css';

export default {
  name: 'Preview',
  computed: {
    preview() {
      return window.LOGIC_EVENT_BUS.LOGIC_PREVIEW;
    }
  },
  methods: {
    leave(e) {
      if ((this.preview.show) && (e.target.className.indexOf('lg-preview-nav-arrow') !== 0)) {
        this.close();
      }
    },
    close() {
      this.preview.show = false;
    },
    preAction() {
      this.preview.loading = true;
      let index = this.preview.list.indexOf(this.preview.current);
      if (index === 0) {
        this.preview.loading = false;
        return;
      }
      index--;
      this.preview.current = this.preview.list[index];
      let img = new window.Image();
      img.src = this.preview.current.src;
      img.onload = () => {
        setTimeout(() => {
          window.LOGIC_EVENT_BUS.LOGIC_PREVIEW.loading = false;
        }, 500);
      };
    },
    nextAction() {
      this.preview.loading = true;
      let index = this.preview.list.indexOf(this.preview.current);
      if (index === this.preview.list.length - 1) {
        this.preview.loading = false;
        return;
      }
      index++;
      this.preview.current = this.preview.list[index];
      let img = new window.Image();
      img.src = this.preview.current.src;
      img.onload =  () => {
        setTimeout(() => {
          window.LOGIC_EVENT_BUS.LOGIC_PREVIEW.loading = false;
        }, 500);
      };
    },
  }
};
</script>
