<template lang="">
  <div>
    <footer class="py-4 mt-auto" :class="theme.isDark ? 'bg-dark' : 'bg-light'">
      <div class="container px-5">
        <div class="row align-items-center justify-content-between flex-column flex-sm-row">
          <div class="col-auto">
            <div class="small m-0">{{ $t('footer.copyright') }}</div>
          </div>
          <div class="col-auto">
            <a class="small" href="#!">{{ $t('footer.privacy') }}</a>
            <span class="mx-1">&middot;</span>
            <a class="small" href="#!">{{ $t('footer.terms') }}</a>
            <span class="mx-1">&middot;</span>
            <a class="small" href="#!">{{ $t('footer.contact') }}</a>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { useThemeStore } from '@/stores/theme'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
const theme = useThemeStore()
</script>
