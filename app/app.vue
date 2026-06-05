<template>
  <div>
    <NuxtPage />
    <CallButton />
  </div>
</template>

<script>
export default {
  setup() {
    const cart = ref([]) // Наш реактивный массив товаров

    // Функция для добавления товара
    const addToCart = (item) => {
      cart.value.push(item)
    }

    // Предоставляем и данные, и метод изменения
    provide('cartContext', {
      cart,
      addToCart
    })
  }
}
</script>
