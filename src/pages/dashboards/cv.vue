<script setup>
import EcommerceCongratulationsJohn from '@/views/dashboards/ecommerce/EcommerceCongratulationsJohn.vue'
import EcommerceEarningReports from '@/views/dashboards/ecommerce/EcommerceEarningReports.vue'
import EcommerceExpensesRadialBarCharts from '@/views/dashboards/ecommerce/EcommerceExpensesRadialBarCharts.vue'
import EcommerceGeneratedLeads from '@/views/dashboards/ecommerce/EcommerceGeneratedLeads.vue'
import EcommerceInvoiceTable from '@/views/dashboards/ecommerce/EcommerceInvoiceTable.vue'
import EcommerceOrder from '@/views/dashboards/ecommerce/EcommerceOrder.vue'
import EcommercePopularProducts from '@/views/dashboards/ecommerce/EcommercePopularProducts.vue'
import EcommerceRevenueReport from '@/views/dashboards/ecommerce/EcommerceRevenueReport.vue'
import EcommerceStatistics from '@/views/dashboards/ecommerce/EcommerceStatistics.vue'
import EcommerceTotalProfitLineCharts from '@/views/dashboards/ecommerce/EcommerceTotalProfitLineCharts.vue'
import EcommerceTransactions from '@/views/dashboards/ecommerce/EcommerceTransactions.vue'
const userData = JSON.parse(localStorage.getItem("userData"))
</script>

<template>
  <VRow>
    <!-- 👉 Welcome -->
    <VCol
      cols="12"
      md="5"
      lg="4"
    >
      <EcommerceCongratulationsJohn :user="userData.fullName" />
    </VCol>

    <!-- 👉 Statistics -->
    <VCol
      cols="12"
      md="7"
      lg="8"
    >
      <EcommerceStatistics class="h-100" />
    </VCol>

    <!-- 👉 Next -->
    <VCol
      cols="12"
      md="12"
      lg="12"
    >



    </VCol>

  </VRow>
</template>

<style lang="scss">
@use "@core/scss/template/libs/apex-chart.scss";
</style>

<route lang="yaml">
meta:
action: read
subject: Dashboard
</route>
