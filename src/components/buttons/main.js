import { createApp } from "vue";
import AddToCart from "./AddToCart.vue";

const addToCartRoot = document.getElementById("add-to-cart");

if (addToCartRoot) {
  const { variantId, title } = addToCartRoot.dataset;

  if (variantId && title) {
    createApp(AddToCart, { variantId, title }).mount("#add-to-cart");
  }
}
