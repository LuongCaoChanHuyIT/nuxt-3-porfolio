<template>
  <div class="mb-5">
    <div class="d-flex align-items-center mb-4">
      <div class="feature bg-primary bg-gradient-primary-to-secondary text-white rounded-3 me-3">
        <i :class="iconClass"></i>
      </div>
      <h3 class="fw-bolder mb-0">
        <span class="text-gradient d-inline">{{ title }}</span>
      </h3>
    </div>

    <div class="row row-cols-1 row-cols-md-3 mb-4" v-if="skills.length > 3">
      <SkillItem
        v-for="(skill, index) in skills.slice(0, 3)"
        :key="`${title}-${index}`"
        :skill="skill"
      />
    </div>

    <div class="row row-cols-1 row-cols-md-3" v-if="skills.length > 3">
      <SkillItem
        v-for="(skill, index) in skills.slice(3)"
        :key="`${title}-second-${index}`"
        :skill="skill"
      />
    </div>

    <div class="row row-cols-1 row-cols-md-3" v-else>
      <SkillItem v-for="(skill, index) in skills" :key="`${title}-${index}`" :skill="skill" />
    </div>
  </div>
</template>

<script setup lang="ts">
import SkillItem from './SkillItem.vue'

defineProps<{
  title: string
  iconClass: string
  skills: string[]
}>()
</script>
