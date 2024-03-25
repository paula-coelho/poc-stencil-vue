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

    <h3>INPUT</h3>
    <span class="br-divider my-3"></span>
    <div>
      <div class="p-3x col-sm-8 col-lg-5">
        <br-input
          button
          density="small"
          type="date"
          id="datemax"
          name="datemax"
          label="Data"
          placeholder="Digite algo"
        ></br-input>
      </div>
      <div class="p-3x col-sm-8 col-lg-5">
        <br-input
          button
          type="range"
          density="small"
          id="tamanho"
          name="tamanho"
          maxlength="10"
          minlength="2"
          label="Label"
          placeholder="Digite algo"
        ></br-input>
      </div>
      <div class="p-3x">
        <br-input
          button
          density="large"
          min="10"
          max="20"
          label="Label / Rótulo"
          placeholder="Digite algo"
          @input="handleInputChange"
        ></br-input>
        <p>O valor digitado é: {{ inputValue }}</p>
      </div>
    </div>

    <h3>CHECKBOX</h3>
    <span class="br-divider my-3"></span>
    <div>
      <p class="label mb-0">Rótulo</p>
      <p class="text-down-01">Informações adicionais</p>
      <div class="mb-1" v-for="(checkbox, index) in checkboxes" :key="index">
        <br-checkbox
          :id="'checkbox-' + (index + 1)"
          :name="'ckb' + (index + 1)"
          :label="checkbox.label"
          :checked="checkbox.checked"
          @checked-change="handleCheckboxChange(index, $event)"
          :valid="checkbox.valid"
          :invalid="checkbox.invalid"
          :disabled="checkbox.disabled"
        ></br-checkbox>
      </div>
      <p>Checkboxes marcados:</p>
      <ul>
        <li v-for="(checkbox, index) in checkedList" :key="index">
          {{ checkbox.label }}
        </li>
      </ul>
    </div>

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

    <h3>TEXTAREA</h3>
    <span class="br-divider my-3"></span>
    <div class="p-3">
      <br-textarea
        label="label"
        density="large"
        text-aux="Texto auxiliar ao preenchimento."
        placeholder="Exemplo de textarea simples."
      ></br-textarea>
    </div>
  </div>
  <div class="border-solid-lg m-10x">
    <h1>Formulário Simples</h1>
    <span class="br-divider my-3"></span>

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

    <br-button class="p-3x" emphasis="primary" @click="submitForm()"
      >Enviar</br-button
    >

    <div v-if="formSubmitted" class="success-message">
      O formulário foi enviado com sucesso!
    </div>
  </div>

  <div v-if="formSubmitted">
    <h3>Dados enviados do Formulário:</h3>
    <ul>
      <li v-for="(item, index) in formData" :key="index">
        <p>Nome: {{ item.name }}</p>
        <p>E-mail: {{ item.email }}</p>
        <p>Opção: {{ item.opcao }}</p>
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
      isActive: true,
      inputValue: "",
      checkboxes: [
        {
          label: "Unchecked",
          checked: false,
          valid: false,
          invalid: false,
          disabled: false,
        },
        {
          label: "Checked",
          checked: true,
          valid: false,
          invalid: false,
          disabled: false,
        },
        {
          label: "Valid",
          checked: false,
          valid: true,
          invalid: false,
          disabled: false,
        },
        {
          label: "Invalid",
          checked: false,
          valid: false,
          invalid: true,
          disabled: false,
        },
        {
          label: "Disabled",
          checked: false,
          valid: false,
          invalid: false,
          disabled: true,
        },
      ],
      checkedList: [],
      options: [
        { id: "teste1", name: "opcao", label: "Opção 1", value: "opcao1" },
        { id: "teste2", name: "opcao", label: "Opção 2", value: "opcao2" },
        { id: "teste3", name: "opcao", label: "Opção 3", value: "opcao3" },
      ],
      itemName: "",
      itemEmail: "",
      itemOpcao: "",
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
    handleInputChange(newValue) {
      // this.inputValue = newValue; //
      this.inputValue = newValue.target.value;
    },
    handleCheckboxChange(index, event) {
      this.checkboxes[index].checked = event.target.checked;
      this.updateCheckedList();
    },
    updateCheckedList() {
      this.checkedList = this.checkboxes.filter((checkbox) => checkbox.checked);
    },
    checkFormCompleted() {
      return (
        this.itemName !== "" &&
        this.itemEmail !== "" &&
        this.itemOpcao !== "" &&
        this.termosAceitos
      );
    },
    submitForm() {
      console.log(this.itemOpcao);
      try {
        if (this.checkFormCompleted) {
          console.log(this.formData);
          this.formData.push({
            name: this.itemName,
            email: this.itemEmail,
            opcao: this.itemOpcao,
            message: this.itemMessage,
            termosAceitos: this.termosAceitos,
          });
          this.formSubmitted = true;
        } else {
          alert("Favor preencher todos os campos obrigatórios do formulário!");
        }
      } catch (error) {
        alert(error.message);
      }
    },
  },
};
</script>
<style>
h3 {
  background-color: paleturquoise;
}
.custom-button {
  color: purple;
  padding: 10px 20px;
  border-radius: 5px;
  border-color: blue;
  cursor: pointer;
}

.error {
  color: red;
  font-size: 0.8rem;
}
.success-message {
  color: green;
  margin-top: 10px;
}
</style>
