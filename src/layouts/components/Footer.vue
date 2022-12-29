<template>
  <div class="h-100 d-flex align-center justify-space-between">
    <!-- 👉 Footer: left content -->
    <span class="d-flex align-center">
      &copy;
      {{ new Date().getFullYear() }}
      - Clínica Virtual
      <VIcon
        icon="tabler-heart"
        color="error"
        size="1.25rem"
        class="mx-1"
      />
    </span>
    <!-- 👉 Footer: right content -->
    <span class="d-md-flex gap-x-4 text-primary d-none">
      <a
        href="https://clinicavirtual/cv/legal/termos"
        target="noopener noreferrer"
      >Termos & Condições</a>
      <a
        href="https://clinicavirtual/cv/legal/privacy"
        target="noopener noreferrer"
      >Política de Privacidade</a>
    </span>
  </div>
</template>
