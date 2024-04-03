<template>
  <div class="container">
    <h3>BUTTON</h3>
    <span class="br-divider my-3"></span>

    <div class="p-3">
      <br-button emphasis="primary" class="mb-3" :active="isActive" block
        >Primário Active Block</br-button
      >
      <br-button emphasis="primary" class="mb-3" density="small"
        >Primário Density Large</br-button
      >
      <br-button emphasis="secondary" class="mb-3" disabled
        >Secundário disabled</br-button
      >
      <br-button class="mb-3">Terciário</br-button>
      <br-button class="custom-button">Custom Buttom</br-button>
    </div>
    <div class="p-3 bg-blue-warm-vivid-90">
      <br-button emphasis="primary" class="mb-3" darkMode>Primário</br-button>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
