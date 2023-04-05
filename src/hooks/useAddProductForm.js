import { useProductStore } from "../stores/product";
import { ref } from "vue";

export const useAddProductForm = () => {
    const store = useProductStore();

    const productName = ref("");
    const quantity = ref(1);
    const dueDate = ref("");
    const completed = ref(false);

    const onSubmit = () => {
        const product = {
            name: productName.value,
            quantity: quantity.value,
            dueDate: dueDate.value,
            completed: completed.value,
        };
        store.addProduct(product);
        resetForm();
    }

    const resetForm = () => {
        productName.value = "";
        quantity.value = 1;
        dueDate.value = "";
        completed.value = false;
    }

    return { productName, quantity, dueDate, onSubmit };
}