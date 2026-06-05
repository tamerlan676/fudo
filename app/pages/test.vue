<template>
    <BaseBox>
      <h2>Заголовок</h2>
       <p>Описание</p>
    </BaseBox>
    <div class="menu">
        <div @click="brand = 'Apple'" class="item">Apple</div>
        <div @click="brand = 'Samsung'" class="item">Samsung</div>
        <div @click="brand = 'Xiaomi'" class="item">Xiaomi</div>
    </div>
    <ul>
        <li v-for="phone in filtered" :key="phone.id"><strong>{{ phone.brand }}</strong>/{{ phone.model }}/{{ phone.price }}/{{ phone.releaseYear }}</li>
    </ul>
</template>

<script setup>
import { ref, computed } from 'vue'

let brand = ref('')

const list = ref([
  {
    "id": 1,
    "model": "iPhone 15 Pro",
    "brand": "Apple",
    "price": 999,
    "releaseYear": 2023,
    "megapixels": 48,
    "storage": "256GB",
    "color": "Titanium Black"
  },
  {
    "id": 2,
    "model": "Galaxy S24 Ultra",
    "brand": "Samsung",
    "price": 1299,
    "releaseYear": 2024,
    "megapixels": 200,
    "storage": "512GB",
    "color": "Titanium Gray"
  },
  {
    "id": 3,
    "model": "Pixel 8 Pro",
    "brand": "Google",
    "price": 899,
    "releaseYear": 2023,
    "megapixels": 50,
    "storage": "256GB",
    "color": "Obsidian"
  },
  {
    "id": 4,
    "model": "Xiaomi 14 Pro",
    "brand": "Xiaomi",
    "price": 799,
    "releaseYear": 2023,
    "megapixels": 50,
    "storage": "512GB",
    "color": "Black"
  },
  {
    "id": 5,
    "model": "OnePlus 12",
    "brand": "OnePlus",
    "price": 849,
    "releaseYear": 2024,
    "megapixels": 50,
    "storage": "256GB",
    "color": "Flowy Emerald"
  },
  {
    "id": 6,
    "model": "iPhone 14",
    "brand": "Apple",
    "price": 799,
    "releaseYear": 2022,
    "megapixels": 12,
    "storage": "128GB",
    "color": "Blue"
  },
  {
    "id": 7,
    "model": "Galaxy A54",
    "brand": "Samsung",
    "price": 449,
    "releaseYear": 2023,
    "megapixels": 50,
    "storage": "128GB",
    "color": "Awesome Violet"
  },
  {
    "id": 8,
    "model": "Redmi Note 13 Pro",
    "brand": "Xiaomi",
    "price": 349,
    "releaseYear": 2024,
    "megapixels": 200,
    "storage": "256GB",
    "color": "Arctic White"
  }
])

const filtered = computed(() => {
    let phones = list.value
    return phones
})
</script>


<style scoped>
.menu{
    padding: 20px;
    display: flex;
}
.item{
    margin-right: 20px;
}

</style>