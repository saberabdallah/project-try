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


      <button @click="addProduct">
        إضافة للسلة
      </button>

    </div>

  </div>
</template>

<script>
export default {
  props: {
    product: Object
  },

  emits: ['add-to-cart'],

  methods: {
    addProduct() {
      this.$emit('add-to-cart')
    }
  }
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
  min-height: 110px;
}

.price {
  color: #2563eb;
  margin: 10px 0;
  font-weight: bold;
}

button {
  width: 100%;
  padding: 10px;
  border: none;
  background: #2563eb;
  color: white;
  cursor: pointer;
  border-radius: 8px;
}
</style>