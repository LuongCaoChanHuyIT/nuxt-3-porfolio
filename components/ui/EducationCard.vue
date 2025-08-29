<template>
  <div class="card shadow border-0 rounded-4 mb-5">
    <div class="card-body p-5">
      <div class="row align-items-center gx-5">
        <div class="col text-center text-lg-start mb-4 mb-lg-0">
          <div class="p-4 rounded-4" :class="theme.isDark ? 'bg-dark' : 'bg-light'">
            <div class="text-secondary fw-bolder mb-2">{{ education.period }}</div>
            <div class="mb-2">
              <div class="small fw-bolder">{{ education.institution }}</div>
              <div class="small text-muted">{{ education.location }}</div>
            </div>
            <div class="fst-italic">
              <div class="small text-muted">{{ education.degree }}</div>
              <div class="small text-muted">{{ education.field }}</div>
            </div>
          </div>
        </div>
        <div class="col-lg-8">
          <div>{{ education.description }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useThemeStore } from '@/stores/theme'

interface Education {
  period: string
  institution: string
  location: string
  degree: string
  field: string
  description: string
}

defineProps<{
  education: Education
}>()

const theme = useThemeStore()
</script>
