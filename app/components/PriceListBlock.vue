<template lang="pug">
section.priceList
  .wrapper
    h2.section-title(v-html="priceListTitle")
    .desc(v-html="priceListDesc")
    nuxt-link.btn(target="_blank" :to="priceListLink") Прайс-лист
    </template>
    
    <script>

    export default {
      name: 'CategoriesComponent',
    
      data() {
        return{
           
        }
      },
      props: {
          priceListTitle: {
            type: String
          },
          priceListDesc: {
            type: String
          },
          priceListLink: {
            type: String
          },
      },
    }
    </script>
    
    <style lang="scss">
    .priceList{
    .desc{
        font-family: var(--medium);
        margin-bottom: 24px;
        @media(min-width: 992px){
            text-align: center;
            width: 900px;
            margin: 0 auto 56px;
        }
    }
    .btn{
            width: 300px;
            margin: 0 auto;
        }
    }
    </style>