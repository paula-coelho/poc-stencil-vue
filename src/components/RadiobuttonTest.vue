<template>
  <div class="container">
    <h3>RADIOBUTTON</h3>
    <span class="br-divider my-3"></span>

    <br-list title="Escolha uma opção" class="p-3x">
      <br-item v-for="option in options" :key="option.id">
        <br-radio
          :label="option.label"
          :name="option.name"
          :value="option.value"
          :id="option.id"
          invalid
          :checked="itemOpcao === option.value"
          @checked-change="itemOpcao === option.value"
        ></br-radio>
      </br-item>
    </br-list>

    <p>Opção: {{ itemOpcao }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      options: [
        { id: "teste1", name: "opcao", label: "Opção 1", value: "opcao1" },
        { id: "teste2", name: "opcao", label: "Opção 2", value: "opcao2" },
        { id: "teste3", name: "opcao", label: "Opção 3", value: "opcao3" },
      ],

      itemOpcao: "",
    };
  },
};
</script>

<style></style>
