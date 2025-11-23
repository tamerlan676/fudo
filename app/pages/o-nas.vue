<template lang="pug">
    Hero(:title="title" :desc="desc")
    Cards(:cardsTitle="forthemTitle" :benefits="forthemList")
    Cards(:cardsTitle="cardsTitle" :benefits="benefits" :largeCard="largeCard")
    Scheme(:title="schemeTitle" :desc="schemeDesc" :steps="steps")
    Manager
    Reviews
    Important(:importantList="importantList")
    Footer
</template>


<script>
import fullwayImg from '~/assets/images/benefits/basket.svg'
import delImg from '~/assets/images/benefits/del.svg'
import weightImg from '~/assets/images/benefits/weight.svg'
import okImg from '~/assets/images/benefits/ok.svg'
import cafeImg from '~/assets/images/benefits/cafe.svg'
import managerImg from '~/assets/images/benefits/manager.svg'
import cafeiconImg from '~/assets/images/cafe.svg'
import marketImg from '~/assets/images/market-point.svg'
import personImg from '~/assets/images/person.svg'
import horecaImg from '~/assets/images/horeca.svg'
export default {
    data() {
        return{
            title: 'Компания <span style="font-family: var(--bold)">Fudo</span>—поставки продуктов с рынка Фуд Сити',
            desc: 'Мы специализируемся на&nbsp;поставках продуктов с&nbsp;рынка Фуд&nbsp;Сити для&nbsp;бизнеса и&nbsp;частным клиентам. Наша задача — обеспечить семьи, рестораны, магазины и&nbsp;кафе свежими овощами, фруктами, мясом, рыбой, молочной продукцией и&nbsp;бакалеей в&nbsp;удобные сроки и&nbsp;по&nbsp;выгодным условиям.',
            forthemTitle: 'Для кого мы работаем',
            forthemList: [
                {
                    title: 'Рестораны  и кафе',
                    img: cafeiconImg
                },
                {
                    title: 'Торговые точки',
                    img: marketImg
                },
                {
                    title: 'Розничные клиенты',
                    img: personImg
                },
                {
                    title: 'Компании HoReCa',
                    img: horecaImg
                },
            ],
            benefits: [
                {
                    img: fullwayImg,
                    text: 'Прямые закупки рыбы у&nbsp;поставщиков Фуд&nbsp;Сити'
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
                    text: 'Контроль качества и&nbsp;свежести мяcной продукции'
                },
                {
                    img: cafeImg,
                    text: 'Удобные условия сотрудничества для&nbsp;кафе и&nbsp;магазинов'
                },
                {
                    img: managerImg,
                    text: 'Персональный менеджер помогающий на каждом этапе процесса'
                },
            ],
            schemeTitle: 'Принципы работы',
            schemeDesc: 'Многолетний опыт позволил нам выстроить простой и&nbsp;эффективный процесс',
            steps: [
                {
                    num: 1,
                    title: 'Направьте список',
                    desc: 'Отправьте список нужных товаров. Мы&nbsp;соберем актуальные цены на&nbsp;рынке.'
                },
                {
                    num: 2,
                    title: 'Согласуем цену',
                    desc: 'Если цена вас устраивает, мы начинаем собирать ваш заказ.'
                },
                {
                    num: 3,
                    title: 'Соберем заказ',
                    desc: 'Собираем заказ, тщательно отбирая каждый продукт.'
                },
                {
                    num: 4,
                    title: 'Пришлем фотоотчет',
                    desc: 'Полностью собрав ваш заказ мы&nbsp;предоставляем фото или видео отчет'
                },
                {
                    num: 5,
                    title: 'Отправим заказ',
                    desc: 'Находим курьера Яндекс Go, грузим и&nbsp;отправляем. Вы получаете товар на&nbsp;адрес в&nbsp;удобное для вас время.'
                },
                {
                    num: 6,
                    title: 'Проверка и оплата',
                    desc: 'Если всё хорошо оплачиваете, если нет, мы&nbsp;найдем честное решение.'
                },
            ],
            assTitle: 'Широкий ассортимент бакалеи',
            assDesc: 'Каждый день мы закупаем бакалею напрямую у проверенных поставщиков.',
            cardsTitle: 'Почему клиенты выбирают нас?',
            largeCard: {
                text: 'Мы стараемся поддерживать долгосрочные отношения с&nbsp;нашими клиентами'
            }
        }
    },
    setup() {
        useSeoMeta({
            title: 'Fudo | Оптовые поставки продуктов с Фуд Сити в Москве',
            description: 'Компания Fudo — оптовая и розничная доставка продуктов с Фуд Сити. Работаем с ресторанами, кафе, магазинами и оптовиками по Москве и МО.'
        })
    }
}
</script>


<style lang="scss" scoped>
h1{
    font-family: var(--extraBold);
    font-size: 40px;
}
</style>