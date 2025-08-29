<template>
  <div>
    <div class="container px-5 my-5">
      <div class="text-center mb-5">
        <h1 class="display-5 fw-bolder mb-0">
          <span class="text-gradient d-inline">{{ $t("resume.title") }}</span>
        </h1>
      </div>
      <div class="row gx-5 justify-content-center">
        <div class="col-lg-11 col-xl-9 col-xxl-8">
          <section>
            <div class="d-flex align-items-center justify-content-between mb-4">
              <h2 class="text-primary fw-bolder mb-0">
                {{ $t("resume.sections.experience") }}
              </h2>
              <a class="btn btn-primary px-4 py-3" href="#!">
                <div class="d-inline-block bi bi-download me-2"></div>
                {{ $t("resume.downloadButton") }}
              </a>
            </div>

            <ExperienceCard
              v-for="(experience, index) in experiences"
              :key="`exp-${index}`"
              :experience="experience"
            />
          </section>

          <section>
            <h2 class="text-secondary fw-bolder mb-4">
              {{ $t("resume.sections.education") }}
            </h2>

            <EducationCard
              v-for="(education, index) in educations"
              :key="`edu-${index}`"
              :education="education"
            />
          </section>

          <div class="pb-5"></div>

          <section>
            <div
              class="card shadow border-0 rounded-4 mb-5"
              :class="theme.isDark ? 'bg-dark' : 'bg-white'"
            >
              <div class="card-body p-5">
                <SkillSection
                  :title="$t('resume.sections.professionalSkills')"
                  icon-class="bi bi-tools"
                  :skills="professionalSkills"
                />

                <SkillSection
                  :title="$t('resume.sections.languages')"
                  icon-class="bi bi-code-slash"
                  :skills="programmingLanguages"
                />
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import ExperienceCard from "@/components/ui/ExperienceCard.vue";
import EducationCard from "@/components/ui/EducationCard.vue";
import SkillSection from "@/components/ui/SkillSection.vue";
import { useThemeStore } from "@/stores/theme";
const theme = useThemeStore();

// Experience data
const experiences = ref([
  {
    period: $t("resume.experiences.0.period"),
    position: $t("resume.experiences.0.position"),
    company: $t("resume.experiences.0.company"),
    location: $t("resume.experiences.0.location"),
    description: $t("resume.experiences.0.description"),
  },
  {
    period: $t("resume.experiences.1.period"),
    position: $t("resume.experiences.1.position"),
    company: $t("resume.experiences.1.company"),
    location: $t("resume.experiences.1.location"),
    description: $t("resume.experiences.1.description"),
  },
]);

// Education data
const educations = ref([
  {
    period: $t("resume.educations.0.period"),
    institution: $t("resume.educations.0.institution"),
    location: $t("resume.educations.0.location"),
    degree: $t("resume.educations.0.degree"),
    field: $t("resume.educations.0.field"),
    description: $t("resume.educations.0.description"),
  },
  {
    period: $t("resume.educations.1.period"),
    institution: $t("resume.educations.1.institution"),
    location: $t("resume.educations.1.location"),
    degree: $t("resume.educations.1.degree"),
    field: $t("resume.educations.1.field"),
    description: $t("resume.educations.1.description"),
  },
]);

// Skills data
const professionalSkills = ref([
  $t("resume.skills.professional.0"),
  $t("resume.skills.professional.1"),
  $t("resume.skills.professional.2"),
  $t("resume.skills.professional.3"),
  $t("resume.skills.professional.4"),
  $t("resume.skills.professional.5"),
]);

const programmingLanguages = ref([
  "HTML",
  "CSS",
  "JavaScript",
  "Python",
  "Ruby",
  "Node.js",
]);
</script>

<style lang=""></style>
