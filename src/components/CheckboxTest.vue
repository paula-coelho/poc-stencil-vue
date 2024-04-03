<template>
  <div class="container">
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
  </div>
</template>

<script>
export default {
  data() {
    return {
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
    };
  },
  methods: {
    handleCheckboxChange(index, event) {
      this.checkboxes[index].checked = event.target.checked;
      this.updateCheckedList();
    },
    updateCheckedList() {
      this.checkedList = this.checkboxes.filter((checkbox) => checkbox.checked);
    },
  },
};
</script>

<style></style>
