<template>
  <div>
    <div class="container">
      <h2>Lista de Itens</h2>
      <span class="br-divider my-3"></span>
      <br-list class="p-3x">
        <br-item v-for="item in items" :key="item.id">
          {{ item.title }} - {{ item.completed ? "Completo" : "Incompleto" }} -
          <button @click="deleteItem(item.id)">Excluir</button>
        </br-item>
      </br-list>
    </div>
  </div>
</template>

<script>
import apiService from "../apiService";

export default {
  data() {
    return {
      items: [],
    };
  },
  async created() {
    try {
      this.items = await apiService.getItems(); // carregar a lista de itens da API
    } catch (error) {
      console.error("Erro ao carregar lista :", error);
    }
  },
  methods: {
    async deleteItem(id) {
      try {
        await apiService.deleteItem(id);
        this.items = this.items.filter((item) => item.id !== id); // Atualizar a lista de itens após a exclusão
        alert("Item excluído com sucesso!");
      } catch (error) {
        console.error("Erro ao excluir item:", error);
        alert("Erro ao excluir item. Por favor, tente novamente.");
      }
    },
  },
};
</script>
