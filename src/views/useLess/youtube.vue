<template>
  <div class="header">
    <div class="logo-area">
      <div class="expand-icon">
        <ExpandIcon></ExpandIcon>
      </div>
      <div class="logo-icon">
        <YoutubeIcon></YoutubeIcon>
      </div>
    </div>
    <div class="search-area">
      <input type="text" placeholder="搜索" class="search-input" />
      <button class="search-icon">
        <SearchIcon></SearchIcon>
      </button>
    </div>
    <div class="btns-area">
      <div class="vedio-icon">
        <VedioIcon></VedioIcon>
      </div>
      <div class="bear-icon">
        <BearIcon></BearIcon>
      </div>
      <div class="user-pic"></div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'view-youtube-less'
}
</script>

<script setup lang="ts">
import ExpandIcon from '@/icons/svg/youtube/expandIcon.vue'
import YoutubeIcon from '@/icons/svg/youtube/youtubeIcon.vue'
import SearchIcon from '@/icons/svg/youtube/searchIcon.vue'
import VedioIcon from '@/icons/svg/youtube/vedioIcon.vue'
import BearIcon from '@/icons/svg/youtube/bearIcon.vue'
</script>

<style lang="less" scoped>
.header {
  height: 56px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  .logo-area {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    padding: 0 8px 0 8px;
    .expand-icon {
      border-color: transfer;
      border-width: 0;
      border-radius: 9999px;
      padding: 8px;
      width: 40px;
      height: 40px;
      &:hover {
        background-color: rgb(243 244 246);
      }

      @media (prefers-color-scheme: dark) {
        fill: #fff;
        &:hover {
          background-color: rgb(31 41 55);
        }
      }
    }
    .logo-icon {
      width: 120px;
      height: 20px;
      @media (prefers-color-scheme: dark) {
        fill: #fff;
      }
    }
  }
  .search-area {
    background-color: transparent;
    border: 1px solid rgb(31 41 55);
    border-radius: 24px;
    padding-left: 16px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    max-width: 640px;
    flex-grow: 1;
    height: 40px;
    input {
      background: none;
      background-color: transparent;
      line-height: 40px;
      outline: none;
      flex-grow: 1;
    }
    .search-icon {
      height: 100%;
      width: 64px;
      padding: 8px;
      border-bottom-right-radius: 24px;
      border-top-right-radius: 24px;
      border-color: transparent;
      background-color: rgb(243 244 246);
    }
  }
  .btns-area {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 160px;
    height: 40px;
    padding: 0 12px 0 12px;
    .vedio-icon,
    .bear-icon {
      height: 100%;
      padding: 8px;
      border-radius: 9999px;
      &:hover {
        background-color: rgb(243 244 246);
      }
      @media (prefers-color-scheme: dark) {
        &:hover {
          background-color: rgb(31 41 55);
        }
      }
    }
    .user-pic {
      background-image: url('../assets/images/unnamed.jpg');
      width: 28px;
      height: 28px;
      border-radius: 9999px;
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
      margin: 0 0 0 8px;
    }
  }
}
</style>
