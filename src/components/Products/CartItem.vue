<template>

  <div class="item">
    <div>
      <span>{{ item.name }}</span>
      <small class="quantity">
        الكمية : {{ item.quantity }} * {{ item.price }}</small
      >
    </div>

    <div class="actions">
      <strong>{{ item.price * item.quantity }} </strong>

      <button class="minus-pro" @click="$emit('remove')">-</button>
    </div>
  </div>
  
</template>

<script setup>
defineProps({
  item: {
    type: Object,
    required: true,
  },
});

defineEmits(["remove"]);
</script>

<style scoped>
.item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #f8fafc;
  padding: 10px;
  border-radius: 8px;
  margin-bottom: 10px;
}

.quantity {
  color: #555;
  font-size: 12px;
  display: block;
  margin-top: 5px;
}

.actions {
  display: flex;
  gap: 10px;
  align-items: center;
}

.minus-pro {
  border: none;
  color: rgb(237, 30, 30);
  background-color: transparent;
  padding: 4px 5px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 22px;
  font-weight: bold;
}
</style>
