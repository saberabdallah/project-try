<template>
  <div class="card">

    <img
      :src="product.image"
      :alt="product.name"
    >

    <div class="content">

      <div class="details">
            <h3>{{ product.name }}</h3>

            <p class="price"> {{ product.price }} ريال </p>

      </div>


      <button class="AddItem" @click="addProduct">
        إضافة للسلة
      </button>

    </div>

  </div>
</template>

<script setup>
defineProps({
  product: Object
})

const emit = defineEmits(['add-to-cart'])

function addProduct() {
  emit('add-to-cart')
}
</script>

<style scoped>
.card {
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 2px 10px rgba(0,0,0,.1);
}

img {
  width: 100%;
  height: 220px;
  object-fit: cover;
}

.content {
  padding: 15px;
  text-align: center;
}

.details {
  min-height: 121px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.price {
  color: #2563eb;
  margin: 10px 0;
  font-weight: bold;
  font-size: 17px;
}

button {
  width: 100%;
  padding: 10px;
  border: none;
  background: #2563eb;
  color: white;
  cursor: pointer;
  border-radius: 8px;
  transition: .3s;
}

.AddItem:hover {
  background: #12337b;
}
</style>