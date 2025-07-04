<template>
  <div class="flex justify-center items-center h-screen">
    <button
      class="bg-orange-500 text-white px-4 py-2 rounded-md"
      @click="addToCart"
    >
      Add {{ title }} to Cart
    </button>
  </div>
</template>

<script setup>
import { ref } from "vue";

const { variantId, title } = defineProps({
  variantId: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
});

const addToCart = async () => {
  const cartDrawer = document.querySelector("cart-drawer");
  console.log("add to cart");

  const addToCartRequest = await fetch("/cart/add.js", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      items: [{ id: variantId, quantity: 1 }],
      sections: cartDrawer.getSectionsToRender().map((section) => section.id),
    }),
  });

  const response = await addToCartRequest.json();
  console.log("Response:", response);

  // Debug: Check what sections we're expecting vs what we got
  console.log(
    "Expected sections:",
    cartDrawer.getSectionsToRender().map((s) => s.id)
  );
  console.log("Received sections:", Object.keys(response.sections || {}));

  // Debug: Check if CartDrawer element exists before focus trap
  const cartDrawerElement = document.getElementById("CartDrawer");
  console.log("CartDrawer element exists:", !!cartDrawerElement);

  cartDrawer.renderContents(response);
};
</script>
