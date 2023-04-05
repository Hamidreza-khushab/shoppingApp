<template>
  <form @submit.prevent="onSubmit">
    <div class="form-group">
      <label for="product-name">Product Name:</label>
      <input type="text" id="product-name" v-model="productName" required />
    </div>
    <div class="form-group">
      <label for="quantity">Quantity:</label>
      <input type="number" id="quantity" v-model="quantity" required />
    </div>
    <div class="form-group">
      <label for="due-date">Due Date:</label>
      <input type="date" id="due-date" v-model="dueDate" />
    </div>
    <button type="submit" class="btn btn-primary">Add</button>
  </form>
</template>

<script setup>
import { useAddProductForm } from "../hooks/useAddProductForm";

const { productName, quantity, dueDate, onSubmit } = useAddProductForm();
</script>

<style src="../assets/productForm.css" scoped></style>
