<template lang="pug">
    Hero(:title="title" :desc="desc")
    Scheme(:title="schemeTitle" :desc="schemeDesc" :steps="steps")
    CardsThreeCol(:cardsTitle="termTitle" :benefits="termCards")
    Cards(:cardsTitle="cardsTitle" :benefits="benefits" :largeCard="largeCard")
    Categories
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
            schemeTitle: 'Как работает наш сервис доставки с&nbsp;рынка Фуд Сити?',
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
                text: 'Мы стараемся наладить долгосрочные отношения с&nbsp;нашими клиентами'
            },
            termTitle: 'Условия работы нашего сервиса',
            termCards: [
                {
                    title: 'Цены на товары',
                    text: 'Мы закупаем любые категории товаров по&nbsp;<span style="color: #048743; font-family:var(--bold); font-size: 17px;">рыночным ценам</span> без&nbsp;лишних наценок',
                    tip: 'В доказательство мы предоставляем чеки и&nbsp;накладные от&nbsp;продавцов'
                },
                {
                    title: 'Минимальный заказ',
                    text: 'Минимальная сумма вашего заказа должна составлять не менее <span style="color: #048743; font-family:var(--bold); font-size: 17px;">15&nbsp;000&nbsp;рублей</span>',
                    tip: 'Заказ может быть и меньше, но наша услуга будет стоить не менее 1 500 руб'
                },
                {
                    title: 'Стоимость услуги',
                    text: 'За сборку, упаковку и погрузку мы берем  <span style="color: #048743; font-family:var(--bold); font-size: 17px;">5&#8209;10%</span> от суммы заказа в&nbsp;зависимости от&nbsp;объема ваших покупок',
                    tip: 'Для регулярных и крупных клиентов всегда действует скидка на нашу услугу'
                },
                {
                    title: 'Доставка заказа',
                    text: 'Доставка осуществляется с помощью сервиса <span style="color: #048743; font-family:var(--bold); font-size: 17px;">Yandex Go.</span>',
                    tip: 'Мы поможем найти и&nbsp;загрузить курьера, но&nbsp;за&nbsp;доставку платит покупатель'
                },
                {
                    title: 'Сроки доставки',
                    text: 'Чаще всего время сборки и доставки занимает<span style="color: #048743; font-family:var(--bold); font-size: 17px;"> 2-3 часа</span>',
                    tip: 'Большие заказы нам обычно присылают за&nbsp;день, и&nbsp;утром мы оперативно их&nbsp;собираем'
                },
                {
                    title: 'Оплата заказов',
                    text: 'Оплата розничных заказов происходит<span style="color: #048743; font-family:var(--bold); font-size: 17px;"> при получении</span> после проверки товара',
                    tip: 'С крупными заказами (более 30 000 рублей) работаем по предоплате'
                },

            ]
        }
    }
}
</script>


<style lang="scss" scoped>
h1{
    font-family: var(--extraBold);
    font-size: 40px;
}
.wrapper{
    grid-template-columns: 1fr 1fr;
}
</style>