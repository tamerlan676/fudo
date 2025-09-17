<template lang="pug">
section.categories
    h2.section-title Оптовая доставка продуктов с&nbsp;Фуд Сити
    .desc(v-html="desc") 
    .categories-wrapper
        nuxt-link.category(v-for="(item, id) in categories" :key="id" :to="item.link")
            .category-name {{ item.title }}
            img.category-icon(:src="item.img")
    </template>
    
    <script>
import fruitsImg from '~/assets/images/categories/fruits.png'
import meatImg from '~/assets/images/categories/meat.png'
import fishImg from '~/assets/images/categories/fish.png'
import milkImg from '~/assets/images/categories/milk.png'
import bakalImg from '~/assets/images/categories/bakal.png'
import drinkImg from '~/assets/images/categories/drink.png'
import nutsImg from '~/assets/images/categories/nuts.png'
import flowersImg from '~/assets/images/categories/flowers.png'

    export default {
      name: 'CategoriesComponent',
    
      data() {
        return{
            desc: 'Предлагаем полный ассортимент продуктов оптом. Сотрудничаем с&nbsp;ресторанами, кафе, магазинами и&nbsp;оптовыми покупателями в&nbsp;Москве и&nbsp;МО.',
          categories: [
            {
              title: 'Фрукты и овощи',
              link: '#',
              img: fruitsImg
            },
            {
              title: 'Мясо',
              link: '#',
              img: meatImg
            },
            {
              title: 'Рыбы и морепродукты',
              link: '#',
              img: fishImg
            },
            {
              title: 'Бакалея',
              link: '#',
              img: bakalImg
            },
            {
              title: 'Молочные продукты ',
              link: '#',
              img: milkImg
            },
            {
              title: 'Напитки и соки',
              link: '#',
              img: drinkImg
            },
            {
              title: 'Орехи и сухофрукты',
              link: '#',
              img: nutsImg
            },
            {
              title: 'Цветы',
              link: '#',
              img: flowersImg
            },
          ]
    
        }
      },
    }
    </script>
    
    <style lang="scss">
    .categories{
    .desc{
        font-family: var(--medium);
        margin-bottom: 24px;
        @media(min-width: 992px){
            text-align: center;
            width: 900px;
            margin: 0 auto 56px;
        }
    }
      .categories-wrapper{
        display: grid;
        grid-template-columns: 1fr 1fr;
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
        .category{
          padding: 16px;
          box-sizing: border-box;
          height: 150px;
          border-radius: 10px;
          position: relative;
          overflow: hidden;
          background: var(--purple);
          @media(min-width: 992px){
            height: 200px;
            padding: 24px;
          }
          .category-name{
            font-size: 14px;
            color: #fff;
            font-family: var(--medium);
            @media(min-width: 992px){
              font-size: 18px;
            }
          }
          .category-icon{
            position: absolute;
            background: var(--pink);
            right: -25px;
            bottom: -35px;
            width: 130px;
            height: 130px;
            transition: all .5s ease;
            border-radius: 100%;
            @media(min-width: 992px){
              width: 170px;
              height: 170px;
            }
          }
          &:hover{
            .category-icon{
              @media(min-width: 992px){
              width: 180px;
              height: 180px;
            }
            }
          }
        }
    }
    ::-webkit-scrollbar {
      display: none;
    }
    }
    </style>