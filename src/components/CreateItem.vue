<template>
  <div class="container">
    <h2>Adicionar Item na Lista</h2>
    <span class="br-divider my-3"></span>
    <form @submit.prevent="addItem">
      <div class="p-3x col-sm-8 col-lg-5 m-5x">
        <br-input
          label="Nome do Item:"
          name="name"
          :value="name"
          @input="name = $event.target.value"
          required
        ></br-input>
        <br-input
          type="number"
          label="Quantidade:"
          name="quantity"
          :value="quantity"
          @input="quantity = $event.target.value"
          required
        ></br-input>

        <br-button
          class="p-3x"
          emphasis="primary"
          type="submit"
          :disabled="isDisabled"
          >Adicionar</br-button
        >
      </div>
    </form>
    <div v-if="submitted">
      <br-list>
        <br-item v-for="item in list" :key="item.id">
          <p>Nome: {{ item.name }}</p>
          <p>Quantidade: {{ item.quantity }}</p>
        </br-item>
      </br-list>
    </div>
  </div>
</template>

<script>
// import apiService from "../apiService";

export default {
  data() {
    return {
      name: "",
      quantity: null,
      submitted: false,
      list: [],
    };
  },
  computed: {
    isDisabled() {
      return !this.name || !this.quantity;
    },
  },
  methods: {
    addItem() {
      this.submitted = true;
      this.list.push({
        name: this.name,
        quantity: this.quantity,
      });
      this.resetForm();
    },
    resetForm() {
      this.quantity = null;
      this.name = "";
      this.error = false;
    },
  },
  // async addItem() {
  //   if (!this.name || !this.quantity) {
  //     this.error = "Por favor, preencha todos os campos.";
  //     return;
  //   }

  //   const newItem = {
  //     name: this.name,
  //     quantity: parseInt(this.quantity),
  //     completed: false, // Definir como não completado por padrão
  //     source: "app", // Adicionando um atributo 'source' para identificar itens inseridos pela aplicação
  //   };

  //   try {
  //     this.submitted = true;
  //     await apiService.addItem(newItem);
  //     alert("Item adicionado com sucesso!");
  //     this.name = "";
  //     this.quantity = null;
  //     this.error = "";
  //   } catch (error) {
  //     console.error("Erro ao adicionar item:", error);
  //     this.error = "Erro ao adicionar item. Por favor, tente novamente.";
  //   } finally {
  //     this.submitted = false;
  //   }
  // },
  // },
};
</script>
