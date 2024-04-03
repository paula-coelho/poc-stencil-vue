<template>
  <div class="container">
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
  </div>
</template>

<script>
export default {
  data() {
    return {
      isActive: true,
      inputValue: "",
    };
  },
  methods: {
    handleInputChange(newValue) {
      // this.inputValue = newValue; //
      this.inputValue = newValue.target.value;
    },
  },
};
</script>

<style></style>
