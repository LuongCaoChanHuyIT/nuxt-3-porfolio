<template lang="">
  <div :data-bs-theme="theme.isDark ? 'dark' : 'light'">
    <nav
      class="navbar navbar-expand-lg py-3"
      :class="theme.isDark ? 'navbar-dark bg-black' : 'navbar-light bg-white'"
    >
      <div class="container px-5">
        <a class="navbar-brand" href="index.html"
          ><span class="fw-bolder text-primary">{{
            $t("navbar.namePorfolio")
          }}</span></a
        >
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ms-auto mb-2 mb-lg-0 small fw-bolder">
            <li class="nav-item">
              <router-link to="/" class="nav-link">{{
                $t("navbar.home")
              }}</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/resume" class="nav-link">{{
                $t("navbar.about")
              }}</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/projects" class="nav-link">{{
                $t("navbar.projects")
              }}</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/contact" class="nav-link">{{
                $t("navbar.contact")
              }}</router-link>
            </li>
          </ul>
          <button
            class="btn btn-outline-primary btn-sm ms-3"
            @click="locale.value = locale.value === 'en' ? 'vi' : 'en'"
          >
            {{ locale.value === "en" ? "VI" : "EN" }}
          </button>
          <button
            class="btn btn-outline-primary btn-sm ms-3"
            @click="theme.toggleDark()"
          >
            {{ theme.isDark ? $t("theme.light") : $t("theme.dark") }}
          </button>
        </div>
      </div>
    </nav>
  </div>
</template>
<script setup lang="ts">
import { useThemeStore } from "@/stores/theme";
const { locale } = useI18n();
const theme = useThemeStore();

console.log(locale, "asdfasdf");
</script>

<style lang=""></style>
