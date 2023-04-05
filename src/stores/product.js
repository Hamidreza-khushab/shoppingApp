import { defineStore } from 'pinia'

export const useProductStore = defineStore({
  id: 'productStore',
  state: () => ({
    products: [],
  }),
  actions: {
    addProduct(product) {
      this.products.push(product);
    },
    editProduct(editedProduct, index) {
      this.products[index] = JSON.parse(editedProduct);
    },
    deleteProduct(index) {
      this.products.splice(index, 1);
    },
  },
});

