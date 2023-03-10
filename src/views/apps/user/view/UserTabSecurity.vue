<script setup>
import axios from 'axios'
const isCurrentPasswordVisible = ref(false)
const isNewPasswordVisible = ref(false)
const isConfirmPasswordVisible = ref(false)
const smsVerificationNumber = ref('+351 ')
const isTwoFactorDialogOpen = ref(false)

const recentDevices = [
  {
    browser: ' Chrome on Windows',
    icon: 'tabler-brand-windows',
    color: 'info',
    device: 'HP Spectre 360',
    location: 'Switzerland',
    activity: '10, July 2021 20:07',
  },
  {
    browser: 'Chrome on iPhone',
    icon: 'tabler-device-mobile',
    color: 'error',
    device: 'iPhone 12x',
    location: 'Australia',
    activity: '13, July 2021 10:10',
  },
  {
    browser: 'Chrome on Android',
    icon: 'tabler-brand-android',
    color: 'success',
    device: 'Oneplus 9 Pro',
    location: 'Dubai',
    activity: '14, July 2021 15:15',
  },
  {
    browser: 'Chrome on MacOS',
    icon: 'tabler-brand-apple',
    color: 'secondary',
    device: 'Apple iMac',
    location: 'India',
    activity: '16, July 2021 16:17',
  },
  {
    browser: 'Chrome on Windows',
    icon: 'tabler-brand-windows',
    color: 'info',
    device: 'HP Spectre 360',
    location: 'Switzerland',
    activity: '20, July 2021 21:01',
  },
  {
    browser: 'Chrome on Android',
    icon: 'tabler-brand-android',
    color: 'success',
    device: 'Oneplus 9 Pro',
    location: 'Dubai',
    activity: '20, July 2021 21:01',
  },
]

function sendVerifyCode(val) {
  let clear = new Boolean(false)
  if (val == -1) {
    if (confirm("Tem a certeza que pretende desativar a segunda autenticação?")) {
      smsVerificationNumber.value = "+351 "
      console.log("Clearing 2nd auth service")
      clear = new Boolean(true)
    }
  }
  else
    console.log("Sending verification code for " + val)

  if (!!clear) {
    axios.put("http://localhost:5262/api/Users/TwoAuthService", {phone: val}, {withCredentials: true})
      .then((result) => {
        if (result.status == 200) {
          console.log("Successfully")
          if (val != -1)
            smsVerificationNumber.value = "+351 " + val
        } else {
          console.log(result.statusText)
        }
      })
  }
}
</script>

<template>
  <VRow>
    <VCol cols="12">
      <!-- 👉 Change password -->
      <VCard title="Modificar Password">
        <VCardText>
          <VForm @submit.prevent="() => {}">
            <VRow>
              <VCol
                cols="12"
                md="6"
              >
                <VTextField
                  label="Password Atual"
                  :type="isCurrentPasswordVisible ? 'text' : 'password'"
                  :append-inner-icon="isCurrentPasswordVisible ? 'tabler-eye-off' : 'tabler-eye'"
                  @click:append-inner="isCurrentPasswordVisible = !isCurrentPasswordVisible"
                />
              </VCol>
            </VRow>
            <VRow>
              <VCol
                cols="12"
                md="6"
              >
                <VTextField
                  label="Nova Password"
                  :type="isNewPasswordVisible ? 'text' : 'password'"
                  :append-inner-icon="isNewPasswordVisible ? 'tabler-eye-off' : 'tabler-eye'"
                  @click:append-inner="isNewPasswordVisible = !isNewPasswordVisible"
                />
              </VCol>
              <VCol
                cols="12"
                md="6"
              >
                <VTextField
                  label="Confirme a Nova Password"
                  :type="isConfirmPasswordVisible ? 'text' : 'password'"
                  :append-inner-icon="isConfirmPasswordVisible ? 'tabler-eye-off' : 'tabler-eye'"
                  @click:append-inner="isConfirmPasswordVisible = !isConfirmPasswordVisible"
                />
              </VCol>

              <VCol cols="12">
                <VBtn type="submit">
                  Guardar Password
                </VBtn>
              </VCol>
            </VRow>
          </VForm>
        </VCardText>
      </VCard>
    </VCol>

    <VCol cols="12">
      <!-- 👉 Two step verification -->
      <VCard
        title="Verificação em 2 passos"
        subtitle="Mantenha a sua conta mais segura com a autenticação em 2 passos."
      >
        <VCardText>
          <div>
            <h4 class="font-weight-semibold">
              SMS
            </h4>

            <VTextField
              variant="underlined"
              :model-value="smsVerificationNumber"
              readonly
            >
              <template #append-inner>
                <VBtn
                  icon
                  size="x-small"
                  color="default"
                  variant="text"
                >
                  <VIcon
                    size="22"
                    icon="tabler-edit"
                    @click="isTwoFactorDialogOpen = true"
                  />
                </VBtn>
                <VBtn
                  icon
                  size="x-small"
                  color="default"
                  variant="text"
                  @click="sendVerifyCode(-1)"
                >
                  <VIcon
                    size="22"
                    icon="tabler-trash"
                  />
                </VBtn>
              </template>
            </VTextField>
          </div>

          <p class="mb-0 mt-4">
            A autenticação em dois passos adiciona uma camada extra de segurança à sua conta, prevenindo assim acessos indevidos. <a
              href="javascript:void(0)"
              class="text-decoration-none"
            >Saber Mais</a>
          </p>
        </VCardText>
      </VCard>
    </VCol>

    <!--<VCol cols="12">
      👉 Recent devices
      <VCard title="Recent devices">
        <VDivider />
        <VTable class="text-no-wrap">
          <thead>
            <tr>
              <th scope="col">
                BROWSER
              </th>
              <th scope="col">
                DEVICE
              </th>
              <th scope="col">
                LOCATION
              </th>
              <th scope="col">
                RECENT ACTIVITY
              </th>
            </tr>
          </thead>

          <tbody>
            <tr
              v-for="device in recentDevices"
              :key="device.browser"
            >
              <td>
                <VAvatar
                  :size="22"
                  class="me-3"
                >
                  <VIcon
                    :color="device.color"
                    :icon="device.icon"
                  />
                </VAvatar>
                <span class="font-weight-medium">{{ device.browser }}</span>
              </td>

              <td class="text-medium-emphasis">
                {{ device.device }}
              </td>

              <td class="text-medium-emphasis">
                {{ device.location }}
              </td>

              <td class="text-medium-emphasis">
                {{ device.activity }}
              </td>
            </tr>
          </tbody>
        </VTable>
      </VCard>
    </VCol>-->
  </VRow>

  <!-- 👉 Enable One Time Password Dialog -->
  <EnableOneTimePasswordDialog
    v-model:isDialogVisible="isTwoFactorDialogOpen"
    :mobile-number="smsVerificationNumber"
    @submit="sendVerifyCode"
  />
</template>
