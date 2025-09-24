<template lang="pug">
    footer
        .wrapper
            .name(v-html="title")
            .bottom-menu
                .title Разделы сайта
                ul 
                    li(v-for="i in menu")  
                        a(:href="i.link") {{ i.title }}
            .questions
                .title Остались Вопросы?
                .desc Обращайтесь за консультацией
                .messengers
                    a(href="#") 
                        img(src="~/assets/images/whatsapp.svg" loading="lazy")
                    a(href="#") 
                        img(src="~/assets/images/telegram.svg" loading="lazy")
        .bottom
            .left
                a(href="#") Политика конфиденциальности
                a(href="#") Публичная оферта
            .copyright Fudo 2025. Все права защищены! 
</template>


<script>
export default {
    data() {
        return {
            title: '<span style="font-family: var(--bold)">Fudo</span> - Доставка продуктов с&nbsp;рынка Фуд&nbsp;Сити',
            menu: [
                {
                    title: 'Доставка овощей и фруктов',
                    link: '#'
                },
                {
                    title: 'Доставка мясных продуктов',
                    link: '#'
                },
                {
                    title: 'Доставка рыбы и морепродуктов',
                    link: '#'
                },
                {
                    title: 'Доставка молочной продукции',
                    link: '#'
                },
                {
                    title: 'Доставка бакалеи',
                    link: '#'
                },
                {
                    title: 'Доставка орехов и сухофруктов',
                    link: '#'
                },
                {
                    title: 'Доставка цветов',
                    link: '#'
                }
            ]
        }
    }
}
</script>


<style lang="scss" scoped>
footer{
    padding: 80px 16px;
    background: rgb(247 247 247);
    border-radius: 50px 0 0 0;
    @media(min-width: 992px){
        padding: 120px 0 0;
        border-radius: 100px 0 0 0;
    }
    .wrapper{
        display: grid;
        grid-gap: 24px;
        @media(min-width: 992px){
            grid-template-columns: 1fr 1fr 1fr;
        }
        @media(min-width: 1200px){
            width: 1200px;
            margin: 0 auto 80px;
            grid-template-columns: 2fr 1fr 1fr;
        }
        .name{
            font-size: 24px;
            line-height: 32px;
            font-family: var(--medium);
            @media(min-width: 1200px){
                    font-size: 40px;
                    line-height: 45px;
                }
        }
        .bottom-menu{
            .title{
                margin-bottom: 16px;
                font-family: var(--medium);
            }
            li{
                margin-bottom: 8px;

            }
            a{
                color: var(--pink)
            }
        }
        .questions{
            width: fit-content;
            margin-bottom: 24px;
            .title{
                font-size: 20px;
                margin-bottom: 8px;
            }
            .desc{
                    margin-bottom: 16px;
            }
            .messengers{
                display: flex;
                justify-content: start;
                @media(min-width: 992px){
                    justify-content: end;
                }
                .title{
                    margin-bottom: 8px;
                    font-family: var(--medium);
                }
                a{
                    display: block;
                    margin-right: 15px;
                        &:last-child{
                            margin-right: 0;
                        }
                    img{
                        width: 40px;
                        height: 40px;
                    }
                }
            }
        }
    }
    .bottom{
        @media(min-width: 1200px){
            width: 1200px;
            margin: 0 auto;
            display: flex;
            justify-content: space-between;
        }
        .left{
            margin-bottom: 56px;
            @media(min-width: 1200px){
                display: flex;
            }
            a{
                display: block;
                color: var(--pink);
                text-decoration: underline;
                margin-right: 16px;
            }
        }
        .copyright{
            text-align: center;
        }
    }
}
</style>