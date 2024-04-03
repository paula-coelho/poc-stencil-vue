<template>
  <div class="container">
    <h3>LIST</h3>
    <span class="br-divider my-3"></span>
    <br-list title="Lista vertical" density="large" horizontal
      ><br-item title="Item 1"
        ><br-list
          ><br-item active>Subitem 1.1</br-item><br-item>Subitem 1.2</br-item
          ><br-item disabled>Subitem 1.3</br-item></br-list
        ></br-item
      ><br-item title="Item 2"
        ><br-list><br-item>Detalhes do item 2</br-item></br-list></br-item
      ><br-item title="Item 3"
        ><br-list> Mais detalhes sobre o item 3 </br-list></br-item
      ><br-item title="Item 4"
        ><br-list selected> Mais detalhes sobre o item 4 </br-list></br-item
      ></br-list
    >
  </div>
</template>

<script>
export default {};
</script>

<style></style>
