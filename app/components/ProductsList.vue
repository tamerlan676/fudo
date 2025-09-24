<template lang="pug">
section.products
    h2.section-title(v-html="title")
    .desc(v-html="desc") 
    .products-wrapper
      .product(v-for="(item, id) in products" :key="id")
        img.product-img(:src="item.img" loading="lazy"  :alt="item.title")
        .product-name {{ item.title }}
        .product-list {{ item.list }}
    </template>
    
    <script>
    export default {
      name: 'ProductsListComponent',
    
      data() {
        return{
    
        }
      },
      props: {
        title: String,
        desc: String,
        products: Array
      }
    }
    </script>
    
    <style lang="scss">
    .products{
    .desc{
        font-family: var(--medium);
        margin-bottom: 24px;
        @media(min-width: 992px){
            text-align: center;
            width: 900px;
            margin: 0 auto 56px;
        }
    }
      .products-wrapper{
        display: grid;
        grid-gap: 24px;
        @media(min-width: 992px){
            overflow: hidden;
            display: grid;
            grid-template-columns: 1fr 1fr 1fr 1fr;
            grid-gap: 10px;
            margin: 0 auto;
          }
          @media(min-width: 1200px){
            width: 1200px;
            grid-gap: 20px;
          }
        .product{
          box-sizing: border-box;
          position: relative;
          overflow: hidden;
          img{
              max-width: 100%;
              border-radius: 10px;
          }
          .product-name{
            font-family: var(--bold);
            @media(min-width: 992px){
              font-size: 18px;
            }
          }
          .product-list{
            font-size: 12px;
            line-height: 15px;
          }
        }
    }
    ::-webkit-scrollbar {
      display: none;
    }
    }
    </style>