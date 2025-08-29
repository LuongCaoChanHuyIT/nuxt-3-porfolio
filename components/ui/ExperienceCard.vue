<template>
  <div class="card shadow border-0 rounded-4 mb-5">
    <div class="card-body p-5">
      <div class="row align-items-center gx-5">
        <div class="col text-center text-lg-start mb-4 mb-lg-0">
          <div class="p-4 rounded-4" :class="theme.isDark ? 'bg-dark' : 'bg-light'">
            <div class="text-primary fw-bolder mb-2">{{ experience.period }}</div>
            <div class="small fw-bolder">{{ experience.position }}</div>
            <div class="small text-muted">{{ experience.company }}</div>
            <div class="small text-muted">{{ experience.location }}</div>
          </div>
        </div>
        <div class="col-lg-8">
          <div>{{ experience.description }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useThemeStore } from '@/stores/theme'

interface Experience {
  period: string
  position: string
  company: string
  location: string
  description: string
}

defineProps<{
  experience: Experience
}>()

const theme = useThemeStore()
</script>
