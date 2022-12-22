<script setup>
const shortcuts = [
  {
    icon: 'tabler-calendar',
    title: 'Calendário',
    subtitle: 'Consultas',
    to: { name: 'apps-calendar' },
  },
  {
    icon: 'tabler-users',
    title: 'Lista de Clientes',
    subtitle: 'Gestão de Clientes',
    to: { name: 'apps-user-list' },
  },
  {
    icon: 'tabler-layout',
    title: 'Nova Consulta',
    subtitle: 'Instantânea',
    to: { name: 'dashboards-analytics' },
  },
  {
    icon: 'tabler-help',
    title: 'Ajuda',
    subtitle: 'FAQs',
    to: { name: 'pages-help-center' },
  },
]
</script>

<template>
  <Shortcuts :shortcuts="shortcuts" />
</template>
