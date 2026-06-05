<template>
    <div>{{ cart }}</div>
</template>

<script>
import { inject, ref } from 'vue'

export default {
  setup() {
    // Внедряем весь контекст
    const { cart, addToCart } = inject('cartContext')

    const newProduct = ref({
        name: 'Njdfh',
        price: '1200'
    })

    return { cart, addToCart, newProduct }
  }
}
</script>