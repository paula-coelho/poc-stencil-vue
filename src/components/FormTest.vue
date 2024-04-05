<template>
  <form @submit.prevent="submitForm">
    <div class="border-solid-lg m-8x">
      <h1>Formulário Simples</h1>
      <span class="br-divider my-3"></span>

      <!-- <label for="name">Nome:</label>
        <input id="name" v-model="name" @blur="$v.name.$touch()" />
        <span v-if="$v.name.$error" class="error">O nome é obrigatório.</span>

        <label for="email">Email:</label>
        <input id="email" v-model="email" @blur="$v.email.$touch()" />
        <span v-if="$v.email.$error" class="error"
          >O email é obrigatório e deve ser válido.</span
        >
        <input type="text" :value="name" @input="setName" /> -->
      <div class="p-3x">
        <br-input
          id="name"
          autofocus
          autocomplete
          required
          name="name"
          label="Nome:"
          placeholder="Digite seu nome"
          :value="itemName"
          :danger="!itemName && formSubmitted"
          @input="itemName = $event.target.value"
        ></br-input>
        <span v-if="!itemName && formSubmitted" class="error"
          >Favor inserir seu nome.</span
        >
      </div>

      <div class="p-3x">
        <br-input
          required
          id="email"
          name="email"
          type="email"
          label="E-mail:"
          :danger="!itemEmail && formSubmitted"
          :value="itemEmail"
          @input="itemEmail = $event.target.value"
        ></br-input>
        <span v-if="!itemEmail && formSubmitted" class="error"
          >Favor inserir seu e-mail.</span
        >
      </div>

      <div class="p-3x">
        <br-textarea
          required
          id="message"
          name="message"
          label="Mensagem:"
          :value="itemMessage"
          @input="itemMessage = $event.target.value"
        ></br-textarea>
      </div>

      <div class="p-4x">
        <br-checkbox
          required
          name="termosAceitos"
          label="Aceito os termos e condições"
          @input="termosAceitos = !termosAceitos"
          :invalid="!termosAceitos && formSubmitted"
        ></br-checkbox>
        <span v-if="!termosAceitos && formSubmitted" class="error"
          >Você deve aceitar os termos para prosseguir.</span
        >
      </div>

      <br-button class="p-3x" emphasis="primary" type="submit"
        >Enviar</br-button
      >

      <div v-if="formSubmitted" class="success-message">
        O formulário foi enviado com sucesso!
      </div>
    </div>
  </form>
  <div v-if="formSubmitted">
    <h3>Dados enviados do Formulário:</h3>
    <ul>
      <li v-for="(item, index) in formData" :key="index">
        <p>Nome: {{ item.name }}</p>
        <p>E-mail: {{ item.email }}</p>
        <p>Mensagem: {{ item.message }}</p>
        <p>Termos aceitos: {{ item.termosAceitos }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "App",

  data() {
    return {
      options: [
        { id: "teste1", name: "opcao", label: "Opção 1", value: "opcao1" },
        { id: "teste2", name: "opcao", label: "Opção 2", value: "opcao2" },
        { id: "teste3", name: "opcao", label: "Opção 3", value: "opcao3" },
      ],
      itemName: "",
      itemMessage: "",
      termosAceitos: false,
      formData: [], // Array para armazenar os dados do formulário
      // formData: {
      //   name: "",
      //   email: "",
      //   opcao: "",
      //   message: "",
      //   termosAceitos: false,
      // },
      formSubmitted: false,
    };
  },
  methods: {
    checkFormCompleted() {
      return (
        this.itemName !== "" &&
        this.itemEmail !== "" &&
        this.termosAceitos !== false
      );
    },
    submitForm() {
      this.formSubmitted = true;
      if (this.checkFormCompleted) {
        console.log(this.formData);
        console.log("O formulário foi enviado.");
        this.formData.push({
          name: this.itemName,
          email: this.itemEmail,
          message: this.itemMessage,
          termosAceitos: this.termosAceitos,
        });
        this.formSubmitted = true;
      } else {
        this.formSubmitted = false;
      }
    },
  },
};
</script>
<style></style>
