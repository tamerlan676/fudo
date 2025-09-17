<template lang="pug">
    section.scheme 
        h2.section-title Как оформить заказ на&nbsp;доставку с Фуд Сити?
        .desc Многолетний опыт позволил нам выстроить простой и&nbsp;эффективный процесс
        .schemeWrapper 
            .card.card-large 
                .text Многолетний опыт позволил нам выстроить простой и&nbsp;эффективный процесс
            .card(v-for="card in steps" :key="card.id") 
                .stepNumber {{ card.num }}
                .title(v-html="card.title")
                .cardDesc(v-html="card.desc") 
        a.btn(href="#") Отправить список
    </template>
    
    
    <script>
    export default {
        data() {
            return{
                steps: [
                    {
                        num: 1,
                        title: 'Напрвьте список',
                        desc: 'Отправьте список нужных товаров. Мы&nbsp;соберем актуальные цены на&nbsp;рынке.'
                    },
                    {
                        num: 2,
                        title: 'Согласовываем цену',
                        desc: 'Если цена вас устраивает, мы начинаем собирать ваш заказ, отбирая каждый продукт.'
                    },
                    {
                        num: 2,
                        title: 'Сборка заказа',
                        desc: 'Если цена вас устраивает, мы начинаем собирать ваш заказ, отбирая каждый продукт.'
                    },
                    {
                        num: 3,
                        title: 'Фото отчет',
                        desc: 'Полностью собрав ваш заказ мы&nbsp;предоставляем фото или видео отчет'
                    },
                    {
                        num: 4,
                        title: 'Отправляем заказ',
                        desc: 'Находим курьера Яндекс Go, грузим и&nbsp;отправляем. Вы получаете товар на&nbsp;адрес в&nbsp;удобное для вас время.'
                    },
                    {
                        num: 5,
                        title: 'Проверка и оплата',
                        desc: 'Если всё хорошо оплачиваете, если нет, мы&nbsp;найдем честное решение.'
                    },
                ]
    
            }
        }
    }
    </script>
    
    
    <style lang="scss" scoped>
    .scheme{
        .section-title{
            @media(min-width: 1200px){
                margin-bottom: 64px;
            }
        }
        .desc{
            font-family: var(--medium);
            margin-bottom: 24px;
            @media(min-width: 992px){
                text-align: center;
                margin-bottom: 56px;
            }
            @media(min-width: 1200px){
                display: none;
            }
        }
        .schemeWrapper{
            display: grid;
            grid-gap: 24px;
            margin-bottom: 24px;
            @media(min-width: 992px){
                grid-template-columns: 1fr 1fr;
            }
            @media(min-width: 1200px){
                grid-template-columns: repeat(4, 1fr);
                width: 1200px;
                margin: 0 auto 40px;
            }
            .card-large {
                    display: none;
                @media(min-width: 1200px){
                    grid-template-columns: 1fr 1fr;
                    grid-column: span 2;
                    display: block;
                    position: relative;
                    &:before{
                        position: absolute;
                        top: 0;
                        right: 50px;
                        background-image: url(~/assets/images/manager-ok.png);
                        background-size: cover;
                        width: 200px;
                        height: 100%;
                        content: '';
                    }
                }
                .text{
                    font-family: var(--bold);
                    padding-right: 220px;
                    font-size: 20px;
                    line-height: 30px;
                }
            }
            .card{
                border: none;
                .stepNumber{
                    font-size: 20px;
                    font-family: var(--bold);
                    background: var(--pink);
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    border-radius: 100%;
                    width: fit-content;
                    width: 40px;
                    height: 40px;
                    margin-bottom: 16px;
                }
                .title{
                    font-size: 20px;
                    font-family: var(--bold);
                    margin-bottom: 8px;
                }
    
            }
    
        }
        .btn{
            width: 300px;
            margin: 0 auto;
        }
        
    }
    </style>