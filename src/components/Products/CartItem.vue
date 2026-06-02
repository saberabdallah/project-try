<template>
  <div class="item">

    <span>{{ item.name }}</span>

    <strong>
      {{ item.price }} ريال
    </strong>

  </div>
</template>

<script>
export default {
  props: {
    item: Object
  }
}
</script>

<style scoped>
.item {
  display: flex;
  justify-content: space-between;
  background: #f8fafc;
  padding: 10px;
  border-radius: 8px;
  margin-bottom: 10px;
}
</style>