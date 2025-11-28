<template lang="pug">
    Hero(:title="title" :desc="desc")
    Scheme(:title="schemeTitle" :desc="schemeDesc" :steps="steps")
    CardsThreeCol(:cardsTitle="termTitle" :benefits="termCards")
    Cards(:cardsTitle="cardsTitle" :benefits="benefits" :largeCard="largeCard")
    Categories
    Manager
    Accordeon(:questions="faqItems")
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
import termDelImg from '~/assets/images/terms/del.svg'
import termPriceImg from '~/assets/images/terms/price.svg'
import termOrderImg from '~/assets/images/terms/order.svg'
import termTimeImg from '~/assets/images/terms/time.svg'
import termInfoImg from '~/assets/images/terms/info.svg'
import termPayImg from '~/assets/images/terms/pay.svg'
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
            faqItems: [
            {
              id: 1,
              question: "Вы работаете только с оптовыми клиентами?",
              answer: "Нет, у нас есть не только оптовое, но&nbsp;и&nbsp;розничное направление. <br>Мы работаем абсолютно с&nbsp;разными клиентами"
            },
            {
              id: 2,
              question: "Как узнать стоимость доставки?",
              answer: " Вы можете воспользоваться приложением Яндекс Go, указав нужный адрес от&nbsp;Фуд Сити до&nbsp;нужного адреса. <br>Не забудьте указать грузчика, если вам необходимо поднять товары на&nbsp;этаж"
            },
            {
              id: 3,
              question: "Есть ли у вас самовывоз?",
              answer: "Да, мы можем закупить и упаковать товары к вашему приезду. <br>Вам останется лишь приехать и&nbsp;забрать готовый заказ"
            },
            {
              id: 4,
              question: "Как узнать цены на товары?",
              answer: "Свяжиесь с нами удобным способом и мы соберем для вас цены. <br> Вести прайсы сложно, так как на&nbsp;рынке цены очень динамичные"
            },
            {
              id: 5,
              question: "Вы можете купить для меня товары именно в той точке, в которй я хочу?",
              answer: "Да, мы можем купить товары там. где вы скажете"
            },
            {   id: 6,
                question: 'Могу ли я увидеть фото или видео товара перед покупкой ?',
                answer: 'Да, мы можем прислать фото и видео в хорошем качетсве, чтобы вы сделали свой выбор',
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
                    text: 'Мы закупаем любые категории товаров по&nbsp;<span style="color: var(--pink); font-family:var(--bold); font-size: 17px;">рыночным ценам</span> без&nbsp;лишних наценок',
                    tip: 'В доказательство мы предоставляем чеки и&nbsp;накладные от&nbsp;продавцов',
                    img: termPriceImg
                },
                {
                    title: 'Минимальный заказ',
                    text: 'Минимальная сумма вашего заказа должна составлять не менее <span style="color: var(--pink); font-family:var(--bold); font-size: 17px;">15&nbsp;000&nbsp;рублей</span>',
                    tip: 'Заказ может быть и меньше, но наша услуга будет стоить не менее 1 500 руб',
                    img: termOrderImg
                },
                {
                    title: 'Стоимость услуги',
                    text: 'За сборку, упаковку и погрузку мы берем  <span style="color: var(--pink); font-family:var(--bold); font-size: 17px;">5&#8209;10%</span> от суммы заказа в&nbsp;зависимости от&nbsp;объема ваших покупок',
                    tip: 'Для регулярных и крупных клиентов всегда действует скидка на нашу услугу',
                    img: termInfoImg
                },
                {
                    title: 'Доставка заказа',
                    text: 'Доставка осуществляется с помощью сервиса <span style="color: var(--pink); font-family:var(--bold); font-size: 17px;">Yandex Go.</span>',
                    tip: 'Мы поможем найти и&nbsp;загрузить курьера, но&nbsp;за&nbsp;доставку платит покупатель',
                    img: termDelImg
                },
                {
                    title: 'Сроки доставки',
                    text: 'Чаще всего время сборки и доставки занимает<span style="color: var(--pink); font-family:var(--bold); font-size: 17px;"> 2-3 часа</span>',
                    tip: 'Большие заказы нам обычно присылают за&nbsp;день, и&nbsp;утром мы оперативно их&nbsp;собираем',
                    img: termTimeImg
                },
                {
                    title: 'Оплата заказов',
                    text: 'Оплата розничных заказов происходит<span style="color: var(--pink); font-family:var(--bold); font-size: 17px;"> при получении</span> после проверки товара',
                    tip: 'С крупными заказами (более 30 000 рублей) работаем по предоплате',
                    img: termPayImg
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