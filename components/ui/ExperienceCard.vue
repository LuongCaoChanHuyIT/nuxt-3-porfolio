<template>
  <div
    class="card shadow border-0 rounded-4 mb-5"
    :class="theme.isDark ? 'bg-dark text-light' : 'bg-white text-dark'"
  >
    <div class="card-body p-5">
      <div class="row align-items-center gx-5">
        <div class="col text-center text-lg-start mb-4 mb-lg-0">
          <div
            class="p-4 rounded-4 border"
            :class="
              theme.isDark ? 'bg-black border-light' : 'bg-light border-dark'
            "
          >
            <div class="text-primary fw-bolder mb-2">
              {{ experience.period }}
            </div>
            <div class="fw-bold small">{{ experience.position }}</div>
            <div class="text-muted small">{{ experience.company }}</div>
            <div class="text-muted small">{{ experience.location }}</div>
          </div>
        </div>

        <div class="col-lg-8">
          <div :class="theme.isDark ? 'text-light' : 'text-dark'">
            {{ experience.description }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useThemeStore } from "@/stores/theme";

interface Experience {
  period: string;
  position: string;
  company: string;
  location: string;
  description: string;
}

defineProps<{
  experience: Experience;
}>();

const theme = useThemeStore();
</script>
