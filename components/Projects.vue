<!-- ProjectsSection.vue -->
<template>
  <div>
    <section class="py-5">
      <div class="container px-5 mb-5">
        <div class="text-center mb-5">
          <h1 class="display-5 fw-bolder mb-0">
            <span class="text-gradient d-inline">
              {{ $t("project.title") }}
            </span>
          </h1>
        </div>
        <div class="row gx-5 justify-content-center">
          <div class="col-lg-11 col-xl-9 col-xxl-8">
            <ProjectCard
              v-for="(project, index) in projects"
              :key="project.id || index"
              :project="project"
              :is-last="index === projects.length - 1"
              :show-spacing="true"
            />

            <!-- Empty state -->
            <div
              v-if="projects.length === 0 && !loading"
              class="text-center py-5"
            >
              <div class="empty-state">
                <h3 class="text-muted mb-3">
                  {{ $t("project.empty.heading") }}
                </h3>
                <p class="text-muted">
                  {{ $t("project.empty.description") }}
                </p>
              </div>
            </div>

            <!-- Loading state -->
            <div v-if="loading" class="text-center py-5">
              <div class="spinner-border text-primary" role="status">
                <span class="visually-hidden">Loading...</span>
              </div>
              <p class="mt-3 text-muted">
                {{ $t("project.loading.message") }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import ProjectCard from "@/components/ui/ProjectCard.vue";
import { useI18n } from "vue-i18n";

interface ProjectLink {
  type: string;
  label: string;
  url: string;
}

interface Project {
  id?: number;
  title: string;
  description: string;
  image?: string;
  technologies?: string[];
  links?: ProjectLink[];
}

const projects = ref<Project[]>([]);
const loading = ref(false);
const { t } = useI18n();
const sampleProjects: Project[] = [
  {
    id: 1,
    title: $t("project.list.1.title"),
    description: $t("project.list.1.description"),
    image:
      "https://img.freepik.com/free-photo/vertical-banners-sales-promo_23-2150653391.jpg?ga=GA1.1.2043908255.1756389541&semt=ais_hybrid&w=740&q=80",
    technologies: ["Vue.js", "Node.js", "MongoDB", "Stripe"],
    links: [
      {
        type: "demo",
        label: $t("project.list.1.links.0.label"),
        url: "https://example.com",
      },
      {
        type: "github",
        label: $t("project.list.1.links.1.label"),
        url: "https://github.com/example",
      },
    ],
  },
  {
    id: 2,
    title: $t("project.list.2.title"),
    description: $t("project.list.3.description"),
    image:
      "https://img.freepik.com/free-photo/online-shopping-concept_23-2151896814.jpg?ga=GA1.1.2043908255.1756389541&semt=ais_hybrid&w=740&q=80",
    technologies: ["React", "Firebase", "Material-UI"],
    links: [
      {
        type: "demo",
        label: $t("project.list.2.links.0.label"),
        url: "https://example.com",
      },
    ],
  },
  {
    id: 3,
    title: $t("project.list.3.title"),
    description: $t("project.list.2.description"),
    image:
      "https://img.freepik.com/free-vector/infographic_53876-25853.jpg?ga=GA1.1.2043908255.1756389541&semt=ais_hybrid&w=740&q=80",
    technologies: ["JavaScript", "Chart.js", "OpenWeather API"],
    links: [
      {
        type: "demo",
        label: $t("project.list.3.links.0.label"),
        url: "https://example.com",
      },
      {
        type: "github",
        label: $t("project.list.3.links.1.label"),
        url: "https://github.com/example",
      },
    ],
  },
];

const loadProjects = async () => {
  loading.value = true;
  try {
    await new Promise((resolve) => setTimeout(resolve, 1000));

    projects.value = sampleProjects;
    console.log("Projects loaded:", projects.value.length);
  } catch (error) {
    console.error("Error loading projects:", error);
  } finally {
    loading.value = false;
  }
};

onMounted(() => {
  loadProjects();
});

defineExpose({
  loadProjects,
});
</script>

<style scoped>
.text-gradient {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.empty-state {
  opacity: 0.7;
}

.spinner-border {
  width: 3rem;
  height: 3rem;
}

/* Animation for project cards */
.v-enter-active,
.v-leave-active {
  transition: all 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
</style>
