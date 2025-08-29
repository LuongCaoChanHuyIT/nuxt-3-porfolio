<template lang="">
  <div>
    <section class="py-5">
      <div class="container px-5">
        <div class="rounded-4 py-5 px-4 px-md-5" :class="theme.isDark ? 'bg-dark' : 'bg-light'">
          <div class="text-center mb-5">
            <div
              class="feature bg-primary bg-gradient-primary-to-secondary text-white rounded-3 mb-3"
            >
              <i class="bi bi-envelope"></i>
            </div>
            <h1 class="fw-bolder">{{ $t('contact.title') }}</h1>
            <p class="lead fw-normal text-muted mb-0">{{ $t('contact.subtitle') }}</p>
          </div>
          <div class="row gx-5 justify-content-center">
            <div class="col-lg-8 col-xl-6">
              <form id="contactForm" @submit.prevent="sendEmail">
                <!-- Name -->
                <div class="form-floating mb-3">
                  <input class="form-control" id="name" type="text" v-model="form.name" required />
                  <label for="name">{{ $t('contact.name') }}</label>
                  <div class="invalid-feedback">{{ $t('contact.nameRequired') }}</div>
                </div>

                <!-- Email -->
                <div class="form-floating mb-3">
                  <input
                    class="form-control"
                    id="email"
                    type="email"
                    v-model="form.email"
                    required
                  />
                  <label for="email">{{ $t('contact.email') }}</label>
                  <div class="invalid-feedback">{{ $t('contact.emailRequired') }}</div>
                  <div class="invalid-feedback">{{ $t('contact.emailInvalid') }}</div>
                </div>

                <!-- Message -->
                <div class="form-floating mb-3">
                  <textarea
                    class="form-control"
                    id="message"
                    style="height: 10rem"
                    v-model="form.message"
                    required
                  ></textarea>
                  <label for="message">{{ $t('contact.message') }}</label>
                  <div class="invalid-feedback">{{ $t('contact.messageRequired') }}</div>
                </div>

                <!-- Success Message -->
                <div class="d-none" id="submitSuccessMessage">
                  <div class="text-center mb-3">
                    <div class="fw-bolder">{{ $t('contact.success.title') }}</div>
                    {{ $t('contact.success.text') }}
                    <br />
                    <a href="https://startbootstrap.com/solution/contact-forms">
                      https://startbootstrap.com/solution/contact-forms
                    </a>
                  </div>
                </div>

                <!-- Error Message -->
                <div class="d-none" id="submitErrorMessage">
                  <div class="text-center text-danger mb-3">{{ $t('contact.error') }}</div>
                </div>

                <!-- Submit -->
                <div class="d-grid">
                  <button class="btn btn-primary btn-lg" id="submitButton" type="submit">
                    {{ $t('contact.submit') }}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import emailjs from 'emailjs-com'
import { reactive } from 'vue'
import { useThemeStore } from '@/stores/theme'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
const theme = useThemeStore()

const form = reactive({
  name: '',
  email: '',
  message: '',
})

const sendEmail = () => {
  emailjs
    .send(
      'service_cyzy1hs',
      'template_787ov5h',
      {
        from_name: form.name,
        from_email: form.email,
        message: form.message,
      },
      'w5AAiIcDlB2e_VkDc'
    )
    .then(() => {
      alert(t('contact.sentSuccess'))
    })
    .catch(() => {
      alert(t('contact.sentFail'))
    })
}
</script>
