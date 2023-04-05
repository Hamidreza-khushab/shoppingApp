<script setup>
import { useProductList } from "../hooks/useProductList";
import ProductEdit from "./ProductEdit.vue";
const {
  store,
  editing,
  selectElement,
  editedProduct,
  editProduct,
  saveProduct,
  deleteProduct,
  cancelSave,
  PurchaseCompleted,
} = useProductList();
</script>
<template>
  <div>
    <ul class="card-container">
      <li
        class="card"
        v-for="(product, index) in store.products"
        :key="index"
        :class="{ checked: product.completed }"
      >
        <div class="card-header">
          <label>
            Completed
            <input
              type="checkbox"
              @change="PurchaseCompleted(index)"
              :checked="product.completed"
              :disabled="product.completed"
            />
          </label>
          <div class="actions">
            <button
              @click="editProduct(index, product)"
              :disabled="product.completed"
            >
              Edit
            </button>
            <button class="danger" @click="deleteProduct(index)">Delete</button>
          </div>
        </div>
        <div class="card-body">
          <p><strong>Product Name:</strong> {{ product.name }}</p>
          <p><strong>Quantity:</strong> {{ product.quantity }}</p>
          <p><strong>Due Date:</strong> {{ product.dueDate }}</p>
        </div>
      </li>
    </ul>
    <product-edit
      v-if="editing"
      :product="store.products[selectElement]"
      :index="selectElement"
      :editing="editing"
      :editedProduct="editedProduct"
      :saveProduct="saveProduct"
      :cancelSave="cancelSave"
    ></product-edit>
  </div>
</template>

<style src="../assets/productList.css" scoped>

</style>

