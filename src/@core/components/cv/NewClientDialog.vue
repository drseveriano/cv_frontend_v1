<script setup>
const props = defineProps({
  userData: {
    type: Object,
    required: true,
  },
  isDialogVisible: {
    type: Boolean,
    required: true,
  },
})

const emit = defineEmits([
  'update:modelValue',
  'submit',
  'update:isDialogVisible',
])

const userData = ref(structuredClone(toRaw(props.userData)))

watch(props, () => {
  userData.value = structuredClone(toRaw(props.userData))
})

const onFormSubmit = () => {
  emit('submit', userData.value)
  emit('update:isDialogVisible', false)
}

const onFormReset = () => {
  userData.value = structuredClone(toRaw(props.userData))
  emit('update:isDialogVisible', false)
}

const dialogModelValueUpdate = val => {
  emit('update:isDialogVisible', val)
}
</script>

<template>
  <VDialog
    :width="$vuetify.display.smAndDown ? 'auto' : 700"
    :model-value="props.isDialogVisible"
    @update:model-value="dialogModelValueUpdate"
  >
    <!-- Dialog close btn -->
    <DialogCloseBtn @click="dialogModelValueUpdate(false)" />

    <VCard class="pa-sm-14 pa-5">
      <VCardItem class="text-center">
        <VCardTitle class="text-h5 mb-3">
          Novo Cliente
        </VCardTitle>
        <p class="mb-0">
          Introduza os dados do seu novo cliente nos campos abaixo.
        </p>
      </VCardItem>

      <VCardText>
        <!-- π Form -->
        <VForm
          class="mt-6"
          @submit.prevent="onFormSubmit"
        >
          <VRow>
            <!-- π First Name -->
            <VCol
              cols="12"
              md="6"
            >
              <VTextField
                v-model="userData.firstName"
                label="Primeiro Nome"
              />
            </VCol>

            <!-- π Last Name -->
            <VCol
              cols="12"
              md="6"
            >
              <VTextField
                v-model="userData.lastName"
                label="Γltimo Nome"
              />
            </VCol>

            <!-- π Email -->
            <VCol
              cols="12"
              md="6"
            >
              <VTextField
                v-model="userData.email"
                label="Email"
              />
            </VCol>

            <!-- π Tax Id -->
            <VCol
              cols="12"
              md="6"
            >
              <VTextField
                v-model="userData.nif"
                label="Tax Id"
              />
            </VCol>

            <!-- π Contact -->
            <VCol
              cols="12"
              md="6"
            >
              <VTextField
                v-model="userData.phone"
                label="N.ΒΊ Telefone/TelemΓ³vel"
              />
            </VCol>

            <!-- π Switch -->
            <VCol cols="12">
              <VSwitch
                v-model="userData.preferOnline"
                density="compact"
                label="PreferΓͺncia por consultas online?"
              />
            </VCol>

            <!-- π Submit and Cancel -->
            <VCol
              cols="12"
              class="d-flex flex-wrap justify-center gap-4"
            >
              <VBtn type="submit">
                Guardar
              </VBtn>

              <VBtn
                color="secondary"
                variant="tonal"
                @click="onFormReset"
              >
                Cancelar
              </VBtn>
            </VCol>
          </VRow>
        </VForm>
      </VCardText>
    </VCard>
  </VDialog>
</template>
