<template>
  <div class="shop-layout">

    <ProductList :products="products" @add-to-cart="addToCart" />


    <Cart :cart-items="cart" :total="total"  @remove-item="removeFromCart" />

  </div>
</template>


<script setup>
import { ref, computed } from "vue";

import ProductList from "@/components/Products/ProductList.vue";
import Cart from "@/components/Products/CartComponents.vue";

const products = ref([
 {
          id: 1,
          name: "آيفون 15 برو",
          price: 1200,
          image:
            "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=500",
        },
        {
          id: 2,
          name: "سامسونج جالكسي S24",
          price: 1100,
          image:
            "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=500",
        },
        {
          id: 3,
          name: "هواوي P60 برو",
          price: 900,
          image:
            "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500",
        },
        {
          id: 4,
          name: "لابتوب Dell XPS",
          price: 1500,
          image:
            "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=500",
        },
        {
          id: 5,
          name: "ماك بوك برو",
          price: 2200,
          image:
            "data:image/jpeg;base64,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 ",
        },
        {
          id: 6,
          name: "لينوفو ThinkPad",
          price: 1300,
          image:
            "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?w=500",
        },
        {
          id: 7,
          name: "سماعات AirPods Pro",
          price: 250,
          image:
            "https://www.apple.com/newsroom/images/product/airpods/standard/Apple-AirPods-Pro-2nd-gen-hero-220907_big.jpg.large.jpg",
        },
        {
          id: 8,
          name: "سماعات Sony WH-1000XM5",
          price: 350,
          image:
            "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500",
        },
        {
          id: 9,
          name: "سماعات JBL",
          price: 120,
          image:
            "https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=500",
        },
        {
          id: 10,
          name: "ساعة آبل",
          price: 450,
          image:
            "https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?w=500",
        },
        {
          id: 11,
          name: "ساعة سامسونج",
          price: 300,
          image:
            "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500",
        },
        {
          id: 12,
          name: "ساعة هواوي",
          price: 220,
          image:
            "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?w=500",
        },
        {
          id: 13,
          name: "كاميرا كانون",
          price: 1800,
          image:
            "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=500",
        },
        {
          id: 14,
          name: "كاميرا سوني",
          price: 2100,
          image:
            "data:image/jpeg;base64,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",
        },
        {
          id: 15,
          name: "كاميرا نيكون",
          price: 1700,
          image:
            "https://images.unsplash.com/photo-1495707902641-75cac588d2e9?w=500",
        },
        {
          id: 16,
          name: "شاشة LG 27 بوصة",
          price: 400,
          image:
            "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=500",
        },
        {
          id: 17,
          name: "شاشة سامسونج",
          price: 350,
          image:
            "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=500",
        },
        {
          id: 18,
          name: "كيبورد ميكانيكي",
          price: 90,
          image:
            "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?w=500",
        },
        {
          id: 19,
          name: "ماوس ألعاب",
          price: 60,
          image:
            "https://images.unsplash.com/photo-1527814050087-3793815479db?w=500",
        },
        {
          id: 20,
          name: "كرسي ألعاب",
          price: 280,
          image:
            "https://images.unsplash.com/photo-1598550476439-6847785fcea6?w=500",
        },
        {
          id: 21,
          name: "بلايستيشن 5",
          price: 650,
          image:
            "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?w=500",
        },
        {
          id: 22,
          name: "إكس بوكس سيريس X",
          price: 620,
          image:
            "https://images.unsplash.com/photo-1621259182978-fbf93132d53d?w=500",
        },
        {
          id: 23,
          name: "يد تحكم PS5",
          price: 75,
          image:
            "https://images.unsplash.com/photo-1600080972464-8e5f35f63d08?w=500",
        },
        {
          id: 24,
          name: "جهاز لوحي آيباد",
          price: 900,
          image:
            "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=500",
        },
        {
          id: 25,
          name: "تابلت سامسونج",
          price: 700,
          image:
            "https://img.global.news.samsung.com/mena/wp-content/uploads/2024/09/Samsung-Mobile-Galaxy-Tab-S10-Series-Samsungs-First-Galaxy-AI-Tablet_main1_F.jpg",
        },
        {
          id: 26,
          name: "طابعة HP",
          price: 180,
          image:
            "https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?w=500",
        },
        {
          id: 27,
          name: "راوتر واي فاي",
          price: 95,
          image:
            "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=500",
        },
        {
          id: 28,
          name: "قرص SSD 1TB",
          price: 110,
          image:
            "https://images.unsplash.com/photo-1591488320449-011701bb6704?w=500",
        },
        {
          id: 29,
          name: "فلاش ميموري 128GB",
          price: 25,
          image:
            "https://images.unsplash.com/photo-1587033411391-5d9e51cce126?w=500",
        },
        {
          id: 30,
          name: "ميكروفون احترافي",
          price: 140,
          image:
            "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?w=500",
        },

]);

const cart = ref([]);

const total = computed(() => {
  return cart.value.reduce(
    (sum, item) => sum + item.price,
    0
  );
});

const addToCart = (product) => {
  cart.value.push(product);
};

const removeFromCart = (index) => {
  cart.value.splice(index, 1)
}
</script>



<style scoped>
.shop-layout {
  display: flex;
  min-height: 100vh;
  direction: rtl;
  background: #f5f7fb;
}
</style>
