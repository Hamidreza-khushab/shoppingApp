<template>
  <div class="modal">
    <div class="modal-overlay"></div>
    <form @submit.prevent="saveProduct" class="form">
      <h2 class="form-title">{{ editing ? 'Edit Product' : 'Add Product' }}</h2>
      <div class="form-group">
        <label class="form-label">
          Product Name
          <input type="text" v-model="editedProduct.name" class="form-input" />
        </label>
      </div>
      <div class="form-group">
        <label class="form-label">
          Quantity
          <input type="number" v-model="editedProduct.quantity" class="form-input" />
        </label>
      </div>
      <div class="form-group">
        <label class="form-label">
          Due Date
          <input type="date" v-model="editedProduct.dueDate" class="form-input" />
        </label>
      </div>
      <div class="form-actions">
        <button type="submit" class="form-button form-button-save">{{ editing ? 'Save' : 'Add' }}</button>
        <button type="button" @click="cancelSave" class="form-button form-button-cancel">Cancel</button>
      </div>
    </form>
  </div>
</template>
<script>
import { ref } from "vue";

export default {
  props: {
    product: Object,
    index: Number,
    editing: Boolean,
    saveProduct: Function,
    cancelSave: Function,
    editedProduct: Object,
  },
  setup(props) {
    const editedProduct = ref(props.editedProduct);

    return {
      editedProduct,
      saveProduct: props.saveProduct,
      cancelSave: props.cancelSave,
    };
  },
};
</script>

<style src="../assets/productEdit.css" scoped></style>

