<script setup>
import congoImg from '@images/illustrations/congo-illustration.png'
const props = defineProps({
  user: {
    type: String,
    required: true,
  }
})
</script>

<template>
  <VCard>
    <VRow no-gutters>
      <VCol cols="8">
        <VCardText>
          <h6 class="text-lg text-no-wrap font-weight-semibold">
            Olá {{ props.user }}! 🎉
          </h6>
          <p class="mb-2">
            Bem-vindo à Clínica Virtual
          </p>
        </VCardText>
      </VCol>

      <VCol cols="4">
        <VCardText class="pb-0 px-0 position-relative h-100">
          <VImg
            :src="congoImg"
            height="140"
            class="w-100 position-absolute"
            style="bottom: 0;"
          />
        </VCardText>
      </VCol>
    </VRow>
  </VCard>
</template>
