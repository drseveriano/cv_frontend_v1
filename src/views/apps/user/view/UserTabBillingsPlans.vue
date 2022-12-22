<script setup>
import americanExpress from '@images/icons/payments/american-express.png'
import mastercard from '@images/icons/payments/mastercard.png'
import visa from '@images/icons/payments/visa.png'

const isUpgradePlanDialogVisible = ref(false)
const currentCardDetails = ref()
const isCardEditDialogVisible = ref(false)
const isCardAddDialogVisible = ref(false)
const isEditAddressDialogVisible = ref(false)

const openEditCardDialog = cardDetails => {
  currentCardDetails.value = cardDetails
  isCardEditDialogVisible.value = true
}

const creditCards = [
  {
    name: 'Tom McBride',
    number: '4851234567899865',
    expiry: '12/24',
    isPrimary: true,
    type: 'mastercard',
    cvv: '123',
    image: mastercard,
  },
  {
    name: 'Mildred Wagner',
    number: '5531234567895678',
    expiry: '02/24',
    isPrimary: false,
    type: 'visa',
    cvv: '456',
    image: visa,
  },
  {
    name: 'Lester Jennings',
    number: '5531234567890002',
    expiry: '08/20',
    isPrimary: false,
    type: 'visa',
    cvv: '456',
    image: americanExpress,
  },
]

const currentBillingAddress = {
  companyName: 'Pixinvent',
  billingEmail: 'gertrude@gmail.com',
  taxID: 'TAX-875623',
  vatNumber: 'SDF754K77',
  address: '100 Water Plant Avenue, Building 1303 Wake Island',
  contact: '+1(609) 933-44-22',
  country: 'USA',
  state: 'Queensland',
  zipCode: '403114',
}
</script>

<template>
  <VRow>
    <!-- 👉 Current Plan -->
    <VCol cols="12">
      <VCard title="Plano Contratualizado">
        <VCardText>
          <VRow>
            <VCol
              cols="12"
              md="6"
              order-md="1"
              order="2"
            >
              <h6 class="text-base font-weight-semibold mb-1">
                O seu plano atual é o Basic
              </h6>
              <p class="text-sm">
                Simples começo, com o essencial
              </p>

              <h6 class="text-base font-weight-semibold mb-1">
                Ativo até 31-12-9999
              </h6>
              <p class="text-sm">
                Será notificado antes da sua subscrição chegar ao fim
              </p>

              <h6 class="text-base font-weight-semibold mb-1">
                <span class="me-3">0.00 € por mês</span>
              </h6>
            </VCol>

            <VCol
              cols="12"
              md="12"
              order="1"
            >
              <!-- 👉 Progress -->
              <div class="d-flex justify-space-between font-weight-bold mb-2">
                <h6 class="text-sm">
                  Dias
                </h6>
                <h6 class="text-sm">
                  26 of 30 Dias
                </h6>
              </div>

              <VProgressLinear
                rounded
                color="primary"
                :height="10"
                :model-value="75"
              />
              <p class="text-sm mt-2">
                4 dias remanescentes até futura renovação
              </p>
            </VCol>

            <VCol
              cols="12"
              order="3"
            >
              <div class="d-flex flex-wrap gap-4">
                <VBtn @click="isUpgradePlanDialogVisible = true">
                  upgrade
                </VBtn>

                <VBtn
                  color="error"
                  variant="tonal"
                >
                  Cancelar Subscrição
                </VBtn>
              </div>
            </VCol>
          </VRow>
        </VCardText>
      </VCard>
    </VCol>

    <VCol cols="12">
      <!-- 👉 Billing Address -->
      <VCard title="Morada de Faturação">
        <template #append>
          <VBtn
            size="small"
            @click="isEditAddressDialogVisible = !isEditAddressDialogVisible"
          >
            Editar Morada
          </VBtn>
        </template>

        <VCardText>
          <VRow>
            <VCol
              cols="12"
              lg="6"
            >
              <VTable class="billing-address-table">
                <tr>
                  <td>
                    <h6 class="text-sm text-no-wrap mb-4">
                      Nome:
                    </h6>
                  </td>
                  <td>
                    <p class="text-body-2">
                      {{ currentBillingAddress.companyName }}
                    </p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <h6 class="text-sm text-no-wrap mb-4">
                      E-mail:
                    </h6>
                  </td>
                  <td>
                    <p class="text-body-2">
                      {{ currentBillingAddress.billingEmail }}
                    </p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <h6 class="text-sm text-no-wrap mb-4">
                      NIF:
                    </h6>
                  </td>
                  <td>
                    <p class="text-body-2">
                      {{ currentBillingAddress.taxID }}
                    </p>
                  </td>
                </tr>
                <tr>
                  <td class="d-flex align-baseline">
                    <h6 class="text-sm text-no-wrap">
                      Morada:
                    </h6>
                  </td>
                  <td>
                    <p class="text-body-2 mb-0">
                      {{ currentBillingAddress.address }}
                    </p>
                  </td>
                </tr>
              </VTable>
            </VCol>

            <VCol
              cols="12"
              lg="6"
            >
              <VTable class="billing-address-table">
                <tr>
                  <td>
                    <h6 class="text-sm text-no-wrap mb-4">
                      Tel/Telemóvel:
                    </h6>
                  </td>
                  <td>
                    <p class="text-body-2">
                      {{ currentBillingAddress.contact }}
                    </p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <h6 class="text-sm text-no-wrap mb-4">
                       Cidade:
                    </h6>
                  </td>
                  <td>
                    <p class="text-body-2">
                      {{ currentBillingAddress.country }}
                    </p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <h6 class="text-sm text-no-wrap mb-4">
                      Concelho:
                    </h6>
                  </td>
                  <td>
                    <p class="text-body-2">
                      {{ currentBillingAddress.state }}
                    </p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <h6 class="text-sm text-no-wrap">
                      Código-Postal:
                    </h6>
                  </td>
                  <td>
                    <p class="text-body-2 mb-0">
                      {{ currentBillingAddress.zipCode }}
                    </p>
                  </td>
                </tr>
              </VTable>
            </VCol>
          </VRow>
        </VCardText>
      </VCard>
    </VCol>
  </VRow>

  <!-- 👉 Edit Card Dialog -->
  <CardAddEditDialog
    v-model:isDialogVisible="isCardEditDialogVisible"
    :card-details="currentCardDetails"
    class="v-dialog-lg"
  />

  <!-- 👉 Add Card Dialog -->
  <CardAddEditDialog
    v-model:isDialogVisible="isCardAddDialogVisible"
    class="v-dialog-lg"
  />

  <!-- 👉 Edit Address dialog -->
  <EditAddressDialog
    v-model:isDialogVisible="isEditAddressDialogVisible"
    :billing-address="currentBillingAddress"
  />

  <!-- 👉 Upgrade plan dialog -->
  <UserUpgradePlanDialog v-model:isDialogVisible="isUpgradePlanDialogVisible" />
</template>

<style lang="scss">
.billing-address-table {
  tr {
    td:first-child {
      inline-size: 148px;
    }
  }
}
</style>
