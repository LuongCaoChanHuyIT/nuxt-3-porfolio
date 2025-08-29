<!-- ProjectCard.vue -->
<template>
  <div class="card overflow-hidden shadow rounded-4 border-0" :class="cardClasses">
    <div class="card-body p-0">
      <div class="d-flex align-items-center">
        <div class="p-5">
          <h2 class="fw-bolder">{{ project.title }}</h2>
          <p>{{ project.description }}</p>

          <!-- Technologies badges -->
          <div v-if="project.technologies?.length" class="mb-3">
            <span
              v-for="tech in project.technologies"
              :key="tech"
              class="badge bg-primary me-2 mb-2"
            >
              {{ tech }}
            </span>
          </div>

          <!-- Project links -->
          <div v-if="project.links?.length" class="d-flex gap-3 flex-wrap">
            <a
              v-for="link in project.links"
              :key="link.type"
              :href="link.url"
              class="btn btn-outline-primary btn-sm"
              target="_blank"
              rel="noopener noreferrer"
            >
              {{ link.label }}
            </a>
          </div>
        </div>

        <div class="image-container">
          <img
            class="project-image"
            :src="project.image || defaultImage"
            :alt="project.title"
            @error="handleImageError"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

// Define interfaces
interface ProjectLink {
  type: string
  label: string
  url: string
}

interface Project {
  id?: number
  title: string
  description: string
  image?: string
  technologies?: string[]
  links?: ProjectLink[]
}

interface Props {
  project: Project
  isLast?: boolean
  showSpacing?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  isLast: false,
  showSpacing: true,
})

const cardClasses = computed(() => ({
  'mb-5': props.showSpacing && !props.isLast,
}))

const defaultImage = 'https://dummyimage.com/300x400/343a40/6c757d'

const handleImageError = (event: Event) => {
  const img = event.target as HTMLImageElement
  img.src = defaultImage
}
</script>

<style scoped>
.card {
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15) !important;
}

.badge {
  font-size: 0.75rem;
}

.image-container {
  flex-shrink: 0;
  width: 300px;
  height: 400px;
  overflow: hidden;
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f8f9fa;
}

.project-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  transition: transform 0.3s ease;
  background-color: #ffffff;
}

.card:hover .project-image {
  transform: scale(1.05);
}

.d-flex.gap-3 {
  gap: 0.75rem;
}

/* Responsive styles */
@media (max-width: 768px) {
  .d-flex.align-items-center {
    flex-direction: column;
  }

  .p-5 {
    padding: 2rem !important;
  }

  .image-container {
    width: 100% !important;
    height: 250px;
    margin-top: 1rem;
    border-radius: 0.375rem;
  }

  .project-image {
    border-radius: 0.375rem;
  }
}

@media (max-width: 576px) {
  .d-flex.gap-3 {
    flex-direction: column;
    gap: 0.5rem;
  }

  .btn {
    text-align: center;
  }
}
</style>
