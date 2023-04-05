<!-- <template>
  <div class="modal">
    <div class="modal-overlay"></div>
    <form @submit.prevent="saveProduct">
      <label>
        Product Name:
        <input type="text" v-model="editedProduct.name" />
      </label>
      <label>
        Quantity:
        <input type="number" v-model="editedProduct.quantity" />
      </label>
      <label>
        Due Date:
        <input type="date" v-model="editedProduct.dueDate" />
      </label>
      <button type="submit">Save</button>
      <button type="button" @click="cancelSave">Cancel</button>
    </form>
  </div>
</template> -->
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

<!-- <style scoped>
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
}

form {
  position: relative;
  width: 400px;
  background-color: #fff;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.5);
}
</style> -->
<style src="../assets/productEdit.css" scoped></style>

