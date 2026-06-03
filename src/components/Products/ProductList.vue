<template>
  <main class="products">

    <h1 class=" mb-5">قائمة المنتجات  </h1>

    <div class="products-grid">

      <ProductCard
        v-for="product in products"
        :key="product.id"
        :product="product"
        @add-to-cart="$emit('add-to-cart', product)"
      />

    </div>

  </main>
</template>

<script setup>
import ProductCard from './ProductCard.vue'

defineProps({
  products: Array
})

defineEmits(['add-to-cart'])
</script>

<style scoped>
.products {
  flex: 1;
  padding: 30px;
}

.products-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill,minmax(250px,1fr));
  gap: 20px;
}
</style>