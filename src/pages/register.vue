<script setup>
import { VForm } from 'vuetify/components'
import authV2RegisterIllustrationBorderedDark from '@images/pages/auth-v2-register-illustration-bordered-dark.png'
import authV2RegisterIllustrationBorderedLight from '@images/pages/auth-v2-register-illustration-bordered-light.png'
import authV2RegisterIllustrationDark from '@images/pages/auth-v2-register-illustration-dark.png'
import authV2RegisterIllustrationLight from '@images/pages/auth-v2-register-illustration-light.png'
import authV2MaskDark from '@images/pages/misc-mask-dark.png'
import authV2MaskLight from '@images/pages/misc-mask-light.png'
import { useAppAbility } from '@/plugins/casl/useAppAbility'
import AuthProvider from '@/views/pages/authentication/AuthProvider.vue'
import axios from '@axios'
import { useGenerateImageVariant } from '@core/composable/useGenerateImageVariant'
import { VNodeRenderer } from '@layouts/components/VNodeRenderer'
import { themeConfig } from '@themeConfig'
import {
  emailValidator,
  requiredValidator,
  confirmedValidator
} from '@validators'

const refVForm = ref()
const email = ref(null)
const password = ref(null)
const name = ref(null)
const nOPP = ref(null)
const repeatPassword = ref(null)
const privacyPolicies = ref(false)

// Router
const route = useRoute()
const router = useRouter()

// Ability
const ability = useAppAbility()

// Form Errors
const errors = ref({
  email: undefined,
  password: undefined,
})

const register = () => {
  axios.post('/auth/register', {
    name: name.value,
    email: email.value,
    password: password.value,
    nOPP: nOPP.value,
    accept: privacyPolicies.value
  }).then(r => {
    const { accessToken, userData, userAbilities } = r.data

    localStorage.setItem('userAbilities', JSON.stringify(userAbilities))
    ability.update(userAbilities)
    localStorage.setItem('userData', JSON.stringify(userData))
    localStorage.setItem('accessToken', JSON.stringify(accessToken))

    // Redirect to `to` query if exist or redirect to index route
    router.replace(route.query.to ? String(route.query.to) : '/')
    
    return null
  }).catch(e => {
    const { errors: formErrors } = e.response.data

    errors.value = formErrors
    console.error(e.response.data)
  })
}

const imageVariant = useGenerateImageVariant(authV2RegisterIllustrationLight, authV2RegisterIllustrationDark, authV2RegisterIllustrationBorderedLight, authV2RegisterIllustrationBorderedDark, true)
const authThemeMask = useGenerateImageVariant(authV2MaskLight, authV2MaskDark)
const isPasswordVisible = ref(false)
const isRPasswordVisible = ref(false)

const onSubmit = () => {
  refVForm.value?.validate().then(({ valid: isValid }) => {
    if (isValid)
      register()
  })
}
</script>

<template>
  <VRow
    no-gutters
    class="auth-wrapper"
  >
    <VCol
      lg="8"
      class="d-none d-lg-flex"
    >
      <div class="position-relative auth-bg rounded-lg w-100 ma-8 me-0">
        <div class="d-flex align-center justify-center w-100 h-100">
          <VImg
            max-width="441"
            :src="imageVariant"
            class="auth-illustration mt-16 mb-2"
          />
        </div>

        <VImg
          class="auth-footer-mask"
          :src="authThemeMask"
        />
      </div>
    </VCol>

    <VCol
      cols="12"
      lg="4"
      class="d-flex align-center justify-center"
    >
      <VCard
        flat
        :max-width="500"
        class="mt-12 mt-sm-0 pa-4"
      >
        <VCardText>
          <VNodeRenderer
            :nodes="themeConfig.app.logo"
            class="mb-6"
          />
          <h5 class="text-h5 font-weight-semibold mb-1">
            Começe Aqui 🚀
          </h5>
          <p class="mb-0">
            Revolucione a gestão do seu dia-a-dia profissional!
          </p>
        </VCardText>

        <VCardText>
          <VForm
            ref="refVForm"
            @submit.prevent="onSubmit"
          >
            <VRow>
              <!-- Full Name -->
              <VCol cols="12">
                <VTextField
                  v-model="name"
                  :rules="[requiredValidator]"
                  label="Nome Completo"
                />
              </VCol>

              <!-- email -->
              <VCol cols="12">
                <VTextField
                  v-model="email"
                  :rules="[requiredValidator, emailValidator]"
                  label="Email"
                  type="email"
                />
              </VCol>

              <!-- email -->
              <VCol cols="12">
                <VTextField
                  v-model="nOPP"
                  :rules="[requiredValidator]"
                  label="N.º Cédula Ordem dos Psicólogos"
                  type="text"
                />
              </VCol>

              <!-- password -->
              <VCol cols="12">
                <VTextField
                  v-model="password"
                  :rules="[requiredValidator]"
                  label="Password"
                  :type="isPasswordVisible ? 'text' : 'password'"
                  :append-inner-icon="isPasswordVisible ? 'tabler-eye-off' : 'tabler-eye'"
                  @click:append-inner="isPasswordVisible = !isPasswordVisible"
                /> <br />
                <VTextField
                  v-model="repeatPassword"
                  :rules="[requiredValidator, confirmedValidator(repeatPassword, password)]"
                  label="Repita a Password"
                  :type="isRPasswordVisible ? 'text' : 'password'"
                  :append-inner-icon="isRPasswordVisible ? 'tabler-eye-off' : 'tabler-eye'"
                  @click:append-inner="isRPasswordVisible = !isRPasswordVisible"
                />

                <div class="d-flex align-center mt-2 mb-4">
                  <VCheckbox
                    id="privacy-policy"
                    v-model="privacyPolicies"
                    inline
                  />
                  <VLabel
                    for="privacy-policy"
                    class="pb-1"
                    style="opacity: 1;"
                  >
                    <span class="me-1">Aceito os</span>
                    <a
                      href="javascript:void(0)"
                      class="text-primary"
                    >termos e condições</a>
                  </VLabel>
                </div>

                <VBtn
                  block
                  type="submit"
                >
                  Registar
                </VBtn>
              </VCol>

              <!-- create account -->
              <VCol
                cols="12"
                class="text-center text-base"
              >
                <span>Já tem conta?</span>
                <RouterLink
                  class="text-primary ms-2"
                  :to="{ name: 'login' }"
                >
                  Aceder
                </RouterLink>
              </VCol>
            </VRow>
          </VForm>
        </VCardText>
      </VCard>
    </VCol>
  </VRow>
</template>

<style lang="scss">
@use "@core/scss/template/pages/page-auth.scss";
</style>

<route lang="yaml">
meta:
  layout: blank
  action: read
  subject: Auth
  redirectIfLoggedIn: true
</route>
