<template>
  <aside class="cart">
    <h3 class="mb-4">سلة المشتريات 🛒</h3>

    <CartItem
      v-for="(item, index) in cartItems"
      :key="index"
      :item="item"
      @remove="$emit('remove-item', index)"
    />

    <div class="total">الإجمالي: {{ total }} ريال</div>
  </aside>
</template>

<script setup>
import CartItem from "./CartItem.vue";

defineProps({
  cartItems: {
    type: Array,
    required: true,
  },

  total: {
    type: Number,
    required: true,
  },
});

defineEmits(["remove-item"]);
</script>

<style scoped>
.cart {
  width: 360px;
  background: white;
  padding: 20px;
  border-right: 1px solid #eee;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.308);
}

.total {
  margin-top: 20px;
  font-size: 18px;
  font-weight: bold;
}
</style>
