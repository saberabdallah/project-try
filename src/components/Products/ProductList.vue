<template>
  <main class="products">
    <h1 class="mb-3">قائمة المنتجات</h1>

    <div class="search">
      <label for="search" class="mx-2">أبحث عن منتج معين :</label>

      <input
        class="mt-3 me-3 mt-md-0 me-md-0"
        id="search"
        type="text"
        v-model="search"
        placeholder="اكتب اسم المنتج..."
      />
    </div>

    <div class="products-grid mt-5">
      <ProductCard
        v-for="product in filteredProducts"
        :key="product.id"
        :product="product"
        @add-to-cart="$emit('add-to-cart', product)"
      />
    </div>
  </main>
</template>

<script setup>
import { ref, computed } from "vue";
import ProductCard from "./ProductCard.vue";

const search = ref("");

const props = defineProps({
  products: Array,
});

defineEmits(["add-to-cart"]);

const filteredProducts = computed(() => {
  return props.products.filter((product) =>
    product.name.toLowerCase().includes(search.value.toLowerCase()),
  );
});
</script>




<style scoped>
.products {
  flex: 1;
  padding: 30px;
  height: 100vh;
  overflow-y: auto;
}

.search {
  display: flex;
  align-items: center;
  gap: 15px;
  background: #fff;
  padding: 20px;
  border-radius: 15px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
}

.search label {
  font-size: 18px;
  font-weight: 600;
  color: #333;
  white-space: nowrap;
}

.search input {
  flex: 1;
  padding: 12px 18px;
  border: 2px solid #e5e7eb;
  border-radius: 10px;
  font-size: 16px;
  outline: none;
  transition: all 0.3s ease;
  background-color: #f9fafb;
}

.search input:focus {
  border-color: #2563eb;
  background-color: #fff;
  box-shadow: 0 0 0 4px rgba(37, 99, 235, 0.15);
}

.search input::placeholder {
  color: #9ca3af;
}


@media (max-width: 768px) {
  .search {
    flex-direction: column;
    align-items: stretch;
  }

  .search label {
    text-align: center;
  }

  .search input {
    width: 100%;
  }
}



.products-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  padding-bottom: 70px;
}

.products-grid > * {
  flex: 1 1 250px;
}
</style>
