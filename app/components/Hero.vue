<template lang="pug">
    .hero
        .wrapper
            .header
                .logo
                    a(href="/")
                        img(src="~/assets/images/logo.svg")
                .lg-menu 
                    ul.parent-ul
                        li
                            nuxt-link(to="/") Главная
                        li.dropdown-item(@click="turnCatMenu()") Наши услуги
                            ul.child-ul(:class="{active: catDroodown}")
                                li
                                    nuxt-link(to="#") Дизайн выставочных стендов
                                li
                                    nuxt-link(to="#") Дизайн выставочных стендов
                                li
                                    nuxt-link(to="#") Дизайн выставочных стендов
                        li
                            nuxt-link(to="/") О Компании

                        li
                            nuxt-link(to="/") Контакты
                                    
                a.zayavka(href="#") Оставить<br> заявку
                a.phone(href="#") + 7 918 888 88 88
                .burger(:class="{ active: activeBurger }" @click="testMetod")
                    span
            .center 
                .left 
                    h1(v-html="title")
                    .text(v-html="desc")
                    a.btn(href="#") Связаться с закупщиком
                .right 
                    .tips-wrapper 
                        .tip
                            .icon 
                                img(src="~/assets/images/done.svg")
                            .title Широкий<br>выбор
                            //- .desc Все категории товаров
                        .tip
                            .icon 
                                img(src="~/assets/images/done.svg")
                            .title Рыночные<br>цены
                            //- .desc Выполнено точно в срок
                        .tip
                            .icon 
                                img(src="~/assets/images/done.svg")
                            .title Розница<br>и опт
                            //- .desc Выполнено точно в срок
            .mob-menu(:class="{active: activeMobMenu}")
                ul.parent-ul
                    li.parent-li(@click="checkMenuElem(item)" v-for="item in menu") 
                        nuxt-link.parent-a(:to="item.link") {{ item.title }}
                        .icon(v-if="item.subitems" :class="{ turned: item.sub }")
                        ul.child-ul(:class="{ active: item.sub }")
                            li(v-for="subitem in item.subitems" @click="turnMenu")
                                nuxt-link(:to="subitem.link") {{ subitem.title }}
    
    </template>
    
    
    <script>
    export default {
        data() {
            return {
                title: 'Доставка продуктов с&nbsp;рынка <span style="font-family: var(--bold)">Фуд Сити</span> по&nbsp;Москве и&nbsp;МО',
                desc: 'Закупаем и доставляем свежие овощи, фрукты, мясо, рыбу, молочную продукцию, бакалею и&nbsp;напитки напрямую с&nbsp;рынка Фуд&nbsp;Сити',
                activeBurger: false,
                activeMobMenu: false,
                menuActive: false,
                catDroodown: false,
                menu: [
                  {
                    title: 'Главная',
                    link: '/',
                  },
                  {
                    title: 'Каталог',
                    link: '#',
                    sub: false,
                    subitems: [
                    {
                    title: 'Фрукты',
                    link: '#'
                  },
                  {
                    title: 'Экзотика',
                    link: '#'
                  },
                 ]
                  },
                  {
                    title: 'Услуги',
                    link: '#',
                    sub: false,
                    subitems: [
                      {
                      title: 'Доставка фруктов в офисы',
                      link: '#'
                      },
                     
                    ]
                  },
                  {
                    title: 'О Компании',
                    link: '#'
                  },
                  {
                    title: 'Доставка',
                    link: '#'
                  },
                  {
                    title: 'Контакты',
                    link: '#'
                  },
                ],
            }
        },
        methods: {
                testMetod() {
                    this.activeBurger = !this.activeBurger;
                    this.activeMobMenu = !this.activeMobMenu
                },
                turnCatMenu () {
                    this.catDroodown = !this.catDroodown
                    if(this.collectionsDropdown){
                    this.collectionsDropdown = false
                    }
                },
                checkMenuElem(item){
                    if(item.subitems){
                    item.sub = !item.sub
                    }else{
                    location.href = item.link;
                    this.turnMenu()
                }
            },
            }
    }
    </script>
    
    
    <style lang="scss" scoped>
    .hero{
        background-image: url('~/assets/images/hero.jpg');
        background-size: cover;
        background-position: center;
        padding: 50px 18px;
        border-radius: 0 0 20px 20px;
        position: relative;
        @media(min-width: 992px){
                padding: 80px 24px 120px;
                border-radius: 0 0 100px 0;
    
        }
        .wrapper{
            @media(min-width: 1200px){
                width: 1200px;
                margin: 0 auto;
        }
        }
        .header{
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 60px;
            @media(min-width: 992px){
                justify-content: space-between;
                margin-bottom: 200px;
            }
            .logo{
                color: #ffff;
            }
            .lg-menu{
                display: none;
                @media(min-width: 992px){
                    padding: 80px 24px 120px;
                    background-color: rgba(190, 122, 181, 0.5);
                    padding: 0 60px;
                    border-radius: 30px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    height: 60px;
                }
                .parent-ul {
                    display: flex;
                    align-items: center;
                    }
                    .dropdown-item{
                        height: 60px;
                        align-items: center;
                        display: flex;
                        position: relative;
                        &:before{
                            position: absolute;
                            right: -15px;
                            top: 28px;
                            content: '';
                            width: 10px;
                            height: 10px;
                            /* background-image: url(/assets/images/arrow.svg); */
                            background-size: contain;
                        }
                    }
                    li {
                        display: block;
                        margin-right: 30px;
                        position: relative;
                        transition-duration: 0.5s;
                        font-weight: bold;
                        color: #FFF;
                        &:last-child{
                            margin-right: 0;
                        }
                        a{
                            transition: all .5s ease;
                            &:hover{
                                color: var(--pink)
                            }
                        }
                        &:hover{
                            color: #fff;
                            cursor: pointer;
                        }
                    }
                    .child-ul {
                        visibility: hidden;
                        opacity: 0;
                        position: absolute;
                        transition: all 1s ease;
                        pointer-events: none;
                        left: 0;
                        width: 300px;
                        padding: 10px;
                        transform: matrix(1, 0, 0, 1, 3, -20);
                        background-color: rgba(180, 180, 180, 0.5);
                        border-radius: 10px;
                        li{
                            padding: 10px 0;
                            border-bottom: 1px solid rgba(180, 180, 180, 0.9);
                            margin-right: 0;
                            display: block;
                            &:last-child{
                                border: none
                            }
                        }
                        a{
                            width: 100%;
                            display: block;
                            color: #fff;
                            transition: all .5s ease;
                            &:hover{
                                color: var(--pink);
                            }
                        }
                    }
                    ul li:hover > ul,
                    ul li ul:hover {
                        visibility: visible;
                        pointer-events: all;
                        opacity: 1;
                        transform: matrix(1, 0, 0, 1, 0, 115);
                    }
            }
            .zayavka{
                display: none;
                @media(min-width: 1200px){
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    height: 60px;
                    border-radius: 30px;
                    background: #fff;
                    text-align: center;
                    width: fit-content;
                    width: 160px;
                    color: var(--grey);
                    line-height: 18px;
                    transition: all .5s ease;
                    &:hover{
                        background: var(--pink);
                    }
                }
            }
            .phone{
                display: none;
                @media(min-width: 992px){
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    height: 60px;
                    border-radius: 30px;
                    background: #fff;
                    text-align: center;
                    width: fit-content;
                    color: var(--grey);
                    line-height: 18px;
                    transition: all .5s ease;
                    position: relative;
                    width: 200px;
                    padding-left: 50px;
                    font-size: 15px;
                    &:before{
                        position: absolute;
                        content: '';
                        width: 50px;
                        height: 50px;
                        left: 5px;
                        top: 5px;
                        border-radius: 100%;
                        background: var(--pink);
                        background-image: url('@/assets/images/phone.svg');
                        background-position: center;
                        background-size: 30px;
                        background-repeat: no-repeat;
                    }
                }
            }
            .burger{
                background-color: rgba(180, 180, 180, 0.5);
                width: 60px;
                height: 60px;
                border-radius: 100%;
                position: fixed;
                right: 24px;
                z-index: 11;
                @media(min-width: 992px){
                    display: none;
                }
                &.active{
                    span{
                            display: none;
                        }
                        &:before{
                            transform: rotate(40deg);
                            width: 35px;
                            top: 30px;
                            left: 12px;
                        }
                        &:after{
                            transform: rotate(-40deg);
                            width: 35px;
                            top: 30px;
                            left: 12px;
                        }
                    }
                span{
                    width: 30px;
                    height: 2px;
                    background: #fff;
                    display: block;
                    position: absolute;
                    top: 20px;
                    left: 15px;
                    transition: all .3s ease;
                }
                &:before{
                    width: 30px;
                    height: 2px;
                    background: #fff;
                    content: '';
                    position: absolute;
                    top: 30px;
                    left: 15px;
                    transition: all .3s ease;
                }
                &:after{
                    width: 30px;
                    height: 2px;
                    background: #fff;
                    content: '';
                    position: absolute;
                    top: 40px;
                    left: 15px;
                    transition: all .3s ease;
                }
            }
        }
        .center{
            @media(min-width: 992px){
                display: grid;
                grid-template-columns: 1fr 1fr;
                grid-gap: 24px;
                align-items: center;
            }
            @media(min-width: 1200px){
                grid-gap: 40px;
                align-items: center;
            }
            h1{
                font-family: var(--light);
                color: #fff;
                line-height: 40px;
                margin-bottom: 16px;
                @media(min-width: 992px){
                    font-size: 40px;
                    line-height: 56px;
                }
            }
            .text{
                margin-bottom: 24px;
                color: #fff;
            }
            .btn{
                background: var(--pink);
                position: relative;
                border-radius: 10px;
                color: #fff;
                height: 60px;
                display: flex;
                align-items: center;
                justify-content: center;
                text-align: center;
                width: fit-content;
                width: 270px;
                margin-bottom: 70px;
                /* &:before{
                    width: 50px;
                    height: 50px;
                    background: #000;
                    border-radius: 100%;
                    content: '→';
                    color: #fff;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    position: absolute;
                    right: 5px;
                    font-size: 30px;
                    transform: rotate(-30deg);
                } */
            }
            .tips-wrapper{
                display: grid;
                grid-template-columns: 1fr 1fr 1fr;
                grid-gap: 16px;
                .tip{
                    background-color: rgba(190, 122, 181, 0.5);
                    border: 1px solid var(--pink);
                    color: #fff;
                    border-radius: 10px;
                    position: relative;
                    padding: 25px 10px 20px;
                    .icon{
                        position: absolute;
                        content: '';
                        left: 0;
                        right: 0;
                        margin: auto;
                        top: -15px;
                        width: 30px;
                        height: 30px;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        border-radius: 100%;
                        @media(min-width: 992px){
                            width: 50px;
                            height: 50px;
                            top: -30px;
                        }
                        img{
                            width: 30px;
                            height: 30px;
                            @media(min-width: 992px){
                                width: 40px;
                                height: 40px;
                            }
                        }
                    }
                    .title{
                        font-size: 14px;
                        font-family: var(--bold);
                        text-align: center;
                        line-height: 18px;
                        @media(min-width: 992px){
                            font-size: 16px;
                        }
                    }
                    .desc{
                        font-size: 12px;
                        line-height: 18px;
                        text-align: center;
                        @media(min-width: 768px){
                            text-align: left;
                        }
                        @media(min-width: 992px){
                            font-size: 14px;
                            text-align: center;
                        }
                    }
                }
            }
        }
            .mob-menu{
                position: fixed;
                width: 100%;
                height: 100%;
                left: -100%;
                transition: all .5s ease;
                box-sizing: border-box;
                overflow-y: scroll;
                padding: 120px 24px 0;
                z-index: 10;
                top: 0;
                background-color: rgba(124, 63, 104, 0.9);
                padding-bottom: 20px;
                @media(min-width: 992px){
                    display: none;
                }
                &.active{
                    left: 0;
                }
                .parent-ul{
                    .parent-li{
                    border-bottom: 1px solid #fff;
                    position: relative;
                    padding: 16px 0;
                    a{
                        font-family: var(--bold);
                    }
                    &:first-child{
                        border-top: 1px solid #fff;
                    }
                    .icon{
                        position: absolute;
                        top: 17px;
                        width: 20px;
                        height: 20px;
                        background-size: contain;
                        right: 10px;
                        background-repeat: no-repeat;
                        /* background-image: url(~/assets/images/arrow.svg); */
                        transition: all .3s linear;
                        transform: rotate(270deg);
                        &.turned{
                        transform: rotate(360deg);
                        }
                    }
                    }
                    .child-ul{
                        transition: all .5s ease;
                        transform: translateY(-22px);
                        overflow: hidden;
                        pointer-events: none;
                        opacity: 0;
                        max-height: 0;
                        margin-left: 20px;
                        margin-right: 20px;
                        li{
                            padding: 10px 0;
                            border-bottom: 1px dashed rgb(149, 149, 149);
                            &:last-child{
                                border: none
                            }
                            a{
                                font-family: var(--light);
                            }
                        }
                    &.active{
                        margin-top: 10px;
                        overflow: hidden;
                        transform: translateY(0);
                        pointer-events: all;
                        opacity: 1;
                        max-height: 300px;
                        }
                    }
                }
            }
    }
    </style>