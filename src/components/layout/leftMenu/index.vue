<template>
  <div class="flex flex-col justify-start items-start divide-y divide-stone-200 divide-solid">
    <div class="p-3 divide-y divide-stone-200 divide-solid">
      <div>
        <MenuItem v-for="headMenuItem in headMenuList">
          <template #icon> <component :is="headMenuItem.icon"></component> </template>
          <span class="text-sm text-gray-900 dark:text-white">{{ headMenuItem.text }}</span>
        </MenuItem>
      </div>
      <div class="pt-2">
        <div
          class="flex flex-row justify-start items-center w-[204px] h-10 px-3 cursor-pointer hover:bg-stone-100 dark:hover:bg-slate-100/10 mb-2 border border-none rounded-lg"
        >
          <span class="text-sm">你</span>
          <div class="h-full p-3">
            <ArrowRightIcon></ArrowRightIcon>
          </div>
        </div>
        <MenuItem v-for="youMenuItem in youMenuList">
          <template #icon> <component :is="youMenuItem.icon"></component> </template>
          <span class="text-sm text-gray-900 dark:text-white">{{ youMenuItem.text }}</span>
        </MenuItem>
      </div>
    </div>
    <div class="p-3">
      <div class="px-3 pb-1 pt-1.5 text-">订阅内容</div>
      <MenuItem v-for="subscribeItem in subscribeList">
        <template #icon>
          <img :src="subscribeItem.icon" class="w-6 h-6 border-0 rounded-full" />
        </template>
        <span class="text-sm text-gray-900 dark:text-white">{{ subscribeItem.text }}</span>
      </MenuItem>
    </div>
    <div class="p-3">
      <MenuItem v-for="tailMenuItem in tailMenuList">
        <template #icon> <component :is="tailMenuItem.icon"></component> </template>
        <span class="text-sm text-gray-900 dark:text-white">{{ tailMenuItem.text }}</span>
      </MenuItem>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'components-left-menu'
}
</script>

<script setup lang="ts">
import { ref, markRaw } from 'vue'
import MenuItem from './item.vue'
import HomePageIcon from '@/icons/svg/youtube/leftMenu/homePageIcon.vue'
import ShortsIcon from '@/icons/svg/youtube/leftMenu/shortsIcon.vue'
import SubscribeIcon from '@/icons/svg/youtube/leftMenu/subscribeIcon.vue'
import SettingIcon from '@/icons/svg/youtube/leftMenu/settingIcon.vue'
import ToReportIcon from '@/icons/svg/youtube/leftMenu/toReportIcon.vue'
import HelpIcon from '@/icons/svg/youtube/leftMenu/helpIcon.vue'
import FeedbackIcon from '@/icons/svg/youtube/leftMenu/feedbackIcon.vue'
import ArrowRightIcon from '@/icons/svg/youtube/arrowRightIcon.vue'

import UserIcon from '@/icons/svg/youtube/you/userIcon.vue'
import YouVedioIcon from '@/icons/svg/youtube/you/youVedioIcon.vue'
import HistoryIcon from '@/icons/svg/youtube/you/historyIcon.vue'
import WatchLateIcon from '@/icons/svg/youtube/you/watchLateIcon.vue'
import GiveLikeIcon from '@/icons/svg/youtube/you/giveLikeIcon.vue'
import FolderIcon from '@/icons/svg/youtube/leftMenu/folderIcon.vue'

import soothingRelaxationPic from '@/assets/images/subscribe/soothing_relaxation.jpg'

const headMenuList = ref([
  { icon: markRaw(HomePageIcon), text: '首页' },
  { icon: markRaw(ShortsIcon), text: 'Shorts' },
  { icon: markRaw(SubscribeIcon), text: '订阅内容' }
])
const tailMenuList = ref([
  { icon: markRaw(SettingIcon), text: '设置' },
  { icon: markRaw(ToReportIcon), text: '举报记录' },
  { icon: markRaw(HelpIcon), text: '帮助' },
  { icon: markRaw(FeedbackIcon), text: '发送反馈' }
])

const youMenuList = ref([
  { icon: markRaw(UserIcon), text: '你的频道' },
  { icon: markRaw(HistoryIcon), text: '历史记录' },
  { icon: markRaw(YouVedioIcon), text: '你的视频' },
  { icon: markRaw(WatchLateIcon), text: '稍后观看' },
  { icon: markRaw(GiveLikeIcon), text: '赞过的视频' },
  { icon: markRaw(FolderIcon), text: '电影' },
  { icon: markRaw(FolderIcon), text: '喜欢的音乐' },
  { icon: markRaw(FolderIcon), text: '教程' }
])

const subscribeList = ref([
  {
    icon: soothingRelaxationPic,
    text: 'Soothing Relaxation'
  }
])
</script>
