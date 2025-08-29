<template lang="">
  <div>
    <header class="py-5" :class="theme.isDark ? 'bg-black' : 'bg-white'">
      <div class="container px-5 pb-5">
        <div class="row gx-5 align-items-center">
          <div class="col-xxl-5">
            <!-- Header text content-->
            <div class="text-center text-xxl-start">
              <div
                class="badge bg-gradient-primary-to-secondary text-white mb-4"
              >
                <div class="text-uppercase">{{ $t("header.badge") }}</div>
              </div>
              <div class="fs-3 fw-light text-muted">
                {{ $t("header.subtitle") }}
              </div>
              <h1 class="display-3 fw-bolder mb-5">
                <span class="text-gradient d-inline">{{
                  $t("header.title")
                }}</span>
              </h1>
              <div
                class="d-grid gap-3 d-sm-flex justify-content-sm-center justify-content-xxl-start mb-3"
              >
                <NuxtLink
                  class="btn btn-primary btn-lg px-5 py-3 me-sm-3 fs-6 fw-bolder"
                  to="/resume"
                >
                  {{ $t("header.resume") }}
                </NuxtLink>

                <NuxtLink
                  class="btn btn-lg px-5 py-3 fs-6 fw-bolder"
                  :class="
                    theme.isDark ? 'btn-outline-light' : 'btn-outline-dark'
                  "
                  to="/projects"
                >
                  {{ $t("header.projects") }}
                </NuxtLink>
              </div>
            </div>
          </div>

          <div class="col-xxl-7">
            <div class="d-flex justify-content-center mt-5 mt-xxl-0">
              <div class="profile bg-gradient-primary-to-secondary">
                <img class="profile-img" :src="profileImg" />
                <div class="dots-1">
                  <!-- SVG Dots-->
                  <SvgDot />
                  <!-- END of SVG dots-->
                </div>
                <div class="dots-2">
                  <!-- SVG Dots-->
                  <SvgDot />
                  <!-- END of SVG dots-->
                </div>
                <div class="dots-3">
                  <!-- SVG Dots-->
                  <SvgDot />
                  <!-- END of SVG dots-->
                </div>
                <div class="dots-4">
                  <!-- SVG Dots-->
                  <SvgDot />
                  <!-- END of SVG dots-->
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  </div>
</template>

<script setup lang="">
import { useThemeStore } from "@/stores/theme";
import profileImg from "~/public/images/profile.png";
const theme = useThemeStore();
</script>
