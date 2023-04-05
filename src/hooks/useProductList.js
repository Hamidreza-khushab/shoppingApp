import { useProductStore } from "../stores/product";
import { ref, reactive } from "vue";

export const useProductList = () => {
  const store = useProductStore();
  const editing = ref(false);
  const selectElement = ref(0);
  let editedProduct = reactive({
    name: "",
    quantity: 1,
    dueDate: "",
    completed: null,
  });

  const resetEditedProduct = () => {
    editedProduct.name = "";
    editedProduct.quantity = 1;
    editedProduct.dueDate = "";
    editedProduct.completed = null;
  }

  const editProduct = (index, product) => {
    resetEditedProduct();
    Object.assign(editedProduct, product);
    selectElement.value = index;
    editing.value = true;
  }

  const saveProduct = () => {
    const objString = JSON.stringify(editedProduct);
    store.editProduct(objString, selectElement.value);
    editing.value = false;
    resetEditedProduct();
  }

  const deleteProduct = (index) => {
    store.products.splice(index, 1);
  }

  const cancelSave = () => {
    editing.value = false;
    resetEditedProduct();
  }

  const PurchaseCompleted = (input) => {
    store.products[input].completed = true
  }

  return {
    store,
    editing,
    selectElement,
    editedProduct,
    editProduct,
    saveProduct,
    deleteProduct,
    cancelSave,
    PurchaseCompleted
  };
}