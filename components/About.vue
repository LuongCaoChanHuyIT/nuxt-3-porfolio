<template lang="">
  <div>
    <section class="py-5" :class="theme.isDark ? 'bg-dark' : 'bg-light'">
      <div class="container px-5">
        <div class="row gx-5 justify-content-center">
          <div class="col-xxl-8">
            <div class="text-center my-5">
              <h2 class="display-5 fw-bolder">
                <span class="text-gradient d-inline">{{ t('about.title') }}</span>
              </h2>
              <p class="lead fw-light mb-4">
                {{ t('about.contentTitle') }}
              </p>
              <p class="text-muted">
                {{ t('about.subcontent') }}
              </p>
              <div class="d-flex justify-content-center fs-2 gap-4">
                <a class="text-gradient" href="#!"><i class="bi bi-twitter"></i></a>
                <a class="text-gradient" href="#!"><i class="bi bi-linkedin"></i></a>
                <a class="text-gradient" href="#!"><i class="bi bi-github"></i></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script setup lang="ts">
import { useThemeStore } from '@/stores/theme'
import { useI18n } from 'vue-i18n'

const theme = useThemeStore()
const { t } = useI18n()
</script>
<style lang=""></style>
