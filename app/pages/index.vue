<template lang="pug">
    Hero(:title="title" :desc="desc")
    Cards(:cardsTitle="cardsTitle" :benefits="benefits" :largeCard="largeCard")
    Categories
    Scheme
    Manager
    Reviews
    Footer
</template>


<script>
import fullwayImg from '~/assets/images/benefits/basket.svg'
import delImg from '~/assets/images/benefits/del.svg'
import weightImg from '~/assets/images/benefits/weight.svg'
import okImg from '~/assets/images/benefits/ok.svg'
import cafeImg from '~/assets/images/benefits/cafe.svg'
import managerImg from '~/assets/images/benefits/manager.svg'
export default {
    
    data() {
        return{
            title: 'Доставка продуктов с&nbsp;рынка <span style="font-family: var(--bold)">Фуд Сити</span> по&nbsp;Москве и&nbsp;МО',
            desc: 'Закупаем и доставляем свежие овощи, фрукты, мясо, рыбу, молочную продукцию, бакалею и&nbsp;напитки напрямую с&nbsp;рынка Фуд&nbsp;Сити',
            benefits: [
                {
                    img: fullwayImg,
                    text: 'Прямые закупки у&nbsp;проверенных продавцов Фуд&nbsp;Сити'
                },
                {
                    img: delImg,
                    text: 'Доставка по Москве и&nbsp;области в&nbsp;день заказа'
                },
                {
                    img: weightImg,
                    text: 'Любые объемы: от&nbsp;небольших закупок до&nbsp;крупных партий'
                },
                {
                    img: okImg,
                    text: 'Контроль качества и&nbsp;свежести продукции'
                },
                {
                    img: cafeImg,
                    text: 'Удобные условия сотрудничества для&nbsp;ресторанов и&nbsp;магазинов'
                },
                {
                    img: managerImg,
                    text: 'Персональный менеджер помогающий на каждом этапе процесса'
                },
            ],
            cardsTitle: 'Почему выбирают нас как поставщика с Фуд Сити?',
            largeCard: {
                text: 'Многолетний опыт позволил нам выстроить простой и&nbsp;эффективный процесс'
            }
        }
    }
}
</script>


<style lang="scss" scoped>
h1{
    font-family: var(--extraBold);
    font-size: 40px;
}
</style>