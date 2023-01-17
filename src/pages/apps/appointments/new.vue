<script setup>
import { VNodeRenderer } from '@layouts/components/VNodeRenderer'
import { themeConfig } from '@themeConfig'
const currentTab = ref('tab-client')
const selectedItem = ref('Cliente A')
const clients = ['Cliente A', 'Cliente B', 'Cliente C']
const date = ref(null)
const time = ref(null)

//specialties
const specialties = ['A', 'B', 'C']
const selectedSpecialty = ref('A')
const conditions = ['A', 'B', 'C']
const selectedCondition = ref('A')

//my details (psych)
const address = {
  "name": "Psicólogo X",
  "address": "Rua dos Engenheiros, N.º 2",
  "city": "Lisboa",
  "postalCode": "1900-002",
  "phone": "261 854 000"
}

const clientList = [
  {
    "fullName": "Cliente A",
    "nif": "PT 251 911 853",
    "email": "a@clinicavirtual.pt",
    "hasDebts": false
  },
  {
    "fullName": "Cliente B",
    "nif": "PT 222 333 853",
    "email": "b@clinicavirtual.pt",
    "hasDebts": true
  },
  {
    "fullName": "Cliente C",
    "nif": "PT 555 111 853",
    "email": "c@clinicavirtual.pt",
    "hasDebts": false
  }
]

function findByName(name) {
  if (name)
    return clientList.filter(client => client.fullName == name)[0]
}

</script>

<template>
  <VCol
    cols="12"
    md="12"
  >
    <VCard
      title="Nova Consulta"
      subtitle="Marcação de consultas para os seus clientes.">

      <VRow>
        <VCol
          cols="12"
          sm="12"
        >
          <VTabs
            v-model="currentTab"
            grow
            stacked
          >
            <VTab>
              <VIcon
                start
                icon="tabler-user"
              />
              Cliente
            </VTab>

            <VTab>
              <VIcon
                start
                icon="tabler-calendar"
              />
              Data & Hora
            </VTab>

            <VTab>
              <VIcon
                start
                icon="tabler-grid"
              />
              Especialidade & Condição
            </VTab>

            <VTab v-if="selectedItem && selectedCondition && selectedSpecialty && date && time">
              <VIcon
                start
                icon="tabler-access-point"
              />
              Resumo
            </VTab>
          </VTabs>

          <VWindow
            v-model="currentTab"
            class="ms-3"
          >
            <VWindowItem>
              <VCol
                cols="12">
                <p>Seleccione o cliente da lista abaixo ou crie um novo.</p>
                <VCombobox
                  v-model="selectedItem"
                  :items="clients"
                />

                <VCol
                  cols="12"
                  class="d-flex align-center"
                >
                  <VDivider />
                  <span class="mx-4">ou</span>
                  <VDivider />
                </VCol>

                <VBtn
                  block
                  type="submit"
                >
                  Criar Novo Cliente
                </VBtn>
                <br />

                <div v-if="selectedItem">
                  <VCol
                    cols="12"
                    class="d-flex align-center"
                  >
                    <VDivider />
                    <span class="mx-4">Informações</span>
                    <VDivider />
                  </VCol>
                  <VCol
                    cols="12">

                    <VTextField disabled label="Nome Completo" v-model="selectedItem" /><br />
                    <VTextField disabled label="NIF" v-model="findByName(selectedItem).nif" /><br />
                    <VTextField disabled label="E-mail" v-model="findByName(selectedItem).email" /><br />
                    <div v-if="findByName(selectedItem).hasDebts">
                      <RouterLink to="/apps/client/debts">
                        <VChip label color="error">
                          <VIcon
                            start
                            size="16"
                            icon="tabler-currency-euro"
                          />
                            Alerta :: Valores Pendentes
                        </VChip>
                      </RouterLink>
                    </div>

                  </VCol>

                </div>

              </VCol>
            </VWindowItem>

            <VWindowItem>
              <VCol
                cols="12">
                <p>Escolha o dia e a hora para a sua consulta.</p>
                <AppDateTimePicker
                  v-model="date"
                  label="Data da Consulta"
                />
                <p></p>
                <AppDateTimePicker
                  v-model="time"
                  label="Hora da Consulta"
                  :config="{ enableTime: true, noCalendar: true, dateFormat: 'H:i' }"
                />
              </VCol>
            </VWindowItem>

            <VWindowItem>
              <VCol
                cols="12">
                <p>Escolha a especialidade e condição.</p>
                <VCombobox
                  v-model="selectedSpecialty"
                  :items="specialties"
                  label="Especialidade(s)"
                /><br />
                <VCombobox
                  v-model="selectedCondition"
                  :items="conditions"
                  label="Condição(es)"
                /><br />
                <VTextarea label="Notas [NÃO PARTILHADO COM O CLIENTE]" />
              </VCol>
            </VWindowItem>

            <VWindowItem>
              <VCard title="Confirmação de Consulta">
                <VCardText class="d-flex flex-wrap justify-space-between flex-column flex-sm-row print-row">
                  <div class="ma-sm-4">
                  </div>
                </VCardText>
              </VCard>
            </VWindowItem>

          </VWindow>
        </VCol>
      </VRow>

    </VCard>
  </VCol>
</template>
