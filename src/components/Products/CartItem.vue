<template>
  <div class="item">

    <span>{{ item.name }}</span>

    <div class="actions">
      <strong>{{ item.price }} ريال</strong>

      <button @click="$emit('remove')">
        ❌
      </button>
    </div>

  </div>
</template>

<script setup>
defineProps({
  item: {
    type: Object,
    required: true
  }
})

defineEmits(['remove'])
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

.actions {
  display: flex;
  gap: 10px;
  align-items: center;
}

button {
  border: none;
  color: white;
  padding: 4px 5px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 12px;
}
</style>