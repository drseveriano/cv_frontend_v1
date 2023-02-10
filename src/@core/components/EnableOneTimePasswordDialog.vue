<script setup>
const props = defineProps({
  mobileNumber: {
    type: String,
    required: false,
  },
  isDialogVisible: {
    type: Boolean,
    required: true,
  },
})

const emit = defineEmits([
  'update:isDialogVisible',
  'submit',
])

const phoneNumber = ref(structuredClone(toRaw(props.mobileNumber)))

const formSubmit = () => {
  if (phoneNumber.value) {
    emit('submit', phoneNumber.value)
    emit('update:isDialogVisible', false)
  }
}

const resetPhoneNumber = () => {
  phoneNumber.value = structuredClone(toRaw(props.mobileNumber))
  emit('update:isDialogVisible', false)
}

const dialogModelValueUpdate = val => {
  emit('update:isDialogVisible', val)
}
</script>

<template>
  <VDialog
    max-width="600"
    :model-value="props.isDialogVisible"
    @update:model-value="dialogModelValueUpdate"
  >
    <!-- Dialog close btn -->
    <DialogCloseBtn @click="dialogModelValueUpdate(false)" />

    <VCard class="pa-5 pa-sm-15">
      <VCardItem class="text-center">
        <VCardTitle class="text-h5 font-weight-medium ">
          One Time Password
        </VCardTitle>
        <VCardSubtitle class="mt-3">

        </VCardSubtitle>
      </VCardItem>

      <VCardText class="pt-6">
        <p class="mb-6">
          Introduza o seu número de telemóvel e enviaremos de seguida um código de validação.
        </p>

        <VForm @submit.prevent="() => {}">
          <VTextField
            v-model="phoneNumber"
            dirty
            name="mobile"
            type="number"
            prefix="+351"
            label="N.º Telemóvel"
            placeholder="912 234 567"
            class="mb-5"
          />

          <VBtn
            type="submit"
            class="me-3"
            @click="formSubmit"
          >
            Submit
          </VBtn>
          <VBtn
            color="secondary"
            variant="tonal"
            @click="resetPhoneNumber"
          >
            Cancel
          </VBtn>
        </VForm>
      </VCardText>
    </VCard>
  </VDialog>
</template>
