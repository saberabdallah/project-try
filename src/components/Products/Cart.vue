<template>
  <aside class="cart">

    <h2>🛒 سلة المشتريات</h2>

    <CartItem
      v-for="(item,index) in cartItems"
      :key="index"
      :item="item"
    />

    <div class="total">
      الإجمالي: {{ total }} ريال
    </div>

  </aside>
</template>

<script>
import CartItem from './CartItem.vue'

export default {
  name: 'CartViwe',
  components: {
    CartItem
  },

  props: {
    cartItems: Array,
    total: Number
  }
}
</script>

<style scoped>
.cart {
  width: 320px;
  background: white;
  padding: 20px;
  border-left: 1px solid #eee;
}

.total {
  margin-top: 20px;
  font-size: 18px;
  font-weight: bold;
}
</style>