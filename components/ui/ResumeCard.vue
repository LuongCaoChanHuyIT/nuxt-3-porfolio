<template>
  <div class="card shadow border-0 rounded-4 mb-5">
    <div class="card-body p-5">
      <div class="row align-items-center gx-5">
        <div class="col text-center text-lg-start mb-4 mb-lg-0">
          <div class="p-4 rounded-4" :class="theme.isDark ? 'bg-dark' : 'bg-light'">
            <div class="fw-bolder mb-2" :class="colorClass">{{ period }}</div>
            <div v-if="title" class="small fw-bolder">{{ title }}</div>
            <div v-if="company" class="small text-muted">{{ company }}</div>
            <div v-if="location" class="small text-muted">{{ location }}</div>
            <div v-if="degree" class="fst-italic">
              <div class="small text-muted">{{ degree }}</div>
              <div class="small text-muted">{{ major }}</div>
            </div>
          </div>
        </div>
        <div class="col-lg-8">
          <slot />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useThemeStore } from '@/stores/theme'
defineProps<{
  period: string
  title?: string
  company?: string
  location?: string
  degree?: string
  major?: string
  colorClass?: string
}>()

const theme = useThemeStore()
</script>
