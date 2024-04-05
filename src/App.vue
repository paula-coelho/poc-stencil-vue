<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-sm-3">
        <nav>
          <br-list>
            <div class="br-item" type="button">
              <router-link to="/button">Button</router-link>
            </div>
            <div class="br-item" type="button">
              <router-link to="/checkbox">Checkbox</router-link>
            </div>
            <div class="br-item" type="button">
              <router-link to="/input">Input</router-link>
            </div>
            <div class="br-item" type="button">
              <router-link to="/list">List</router-link>
            </div>
            <div class="br-item" type="button">
              <router-link to="/radiobutton">Radiobutton</router-link>
            </div>
            <div class="br-item" type="button">
              <router-link to="/textarea">Textarea</router-link>
            </div>
            <div class="br-item" type="button">
              <router-link to="/form">Formulário</router-link>
            </div>
            <div class="br-item" type="button">
              <router-link to="/createitem">Criar Item Lista</router-link>
            </div>
            <div class="br-item" type="button">
              <router-link to="/listitems">Listar Itens</router-link>
            </div>
          </br-list>
        </nav>
      </div>
      <div class="col-sm">
        <main>
          <router-view></router-view>
        </main>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>
<style>
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
