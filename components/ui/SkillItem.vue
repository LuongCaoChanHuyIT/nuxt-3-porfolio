<template>
  <div class="col mb-4 mb-md-0">
    <div
      class="d-flex align-items-center rounded-4 p-3 h-100"
      :class="theme.isDark ? 'bg-black text-white' : 'bg-light'"
    >
      {{ skill }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { useThemeStore } from "@/stores/theme";

defineProps<{
  skill: string;
}>();

const theme = useThemeStore();
</script>
