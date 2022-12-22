<script setup>
const statistics = [
  {
    title: 'Clientes',
    stats: '6',
    icon: 'tabler-users',
    color: 'primary',
  },
  {
    title: 'Consultas Confirmadas (futuras)',
    stats: '12',
    icon: 'tabler-license',
    color: 'info',
  },
  {
    title: 'Rating Atual',
    stats: '4.5 em 5',
    icon: 'tabler-stars',
    color: 'warning',
  },
  {
    title: 'Montante Faturado',
    stats: '€ 1.745',
    icon: 'tabler-currency-euro',
    color: 'success',
  },
]
const title = 'Estatísticas de ' + new Date().getFullYear()
</script>

<template>
  <VCard :title="title">
    <template #append>
      <span class="text-body-2">Atualizado à 1 segundo...</span>
    </template>

    <VCardText class="pt-6">
      <VRow>
        <VCol
          v-for="item in statistics"
          :key="item.title"
          cols="6"
          md="3"
        >
          <div class="d-flex">
            <VAvatar
              :color="item.color"
              variant="tonal"
              size="42"
              class="me-3"
            >
              <VIcon
                size="24"
                :icon="item.icon"
              />
            </VAvatar>

            <div class="d-flex flex-column">
              <span class="text-h6 font-weight-medium">{{ item.stats }}</span>
              <span class="text-caption">
                {{ item.title }}
              </span>
            </div>
          </div>
        </VCol>
      </VRow>
    </VCardText>
  </VCard>
</template>
