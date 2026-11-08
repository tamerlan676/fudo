<template lang="pug">
    Hero(:title="title" :desc="desc")
    ProductsList(title="Широкий ассортимент орехов оптом" desc="Мы закупаем орехи напрямую у проверенных поставщиков." :products="products")
    //- PriceListBlock(:priceListTitle="priceListTitle" :priceListDesc="priceListDesc" :priceListLink="priceListLink")
    Cards(:cardsTitle="forthemTitle" :benefits="forthemList")
    Cards(:cardsTitle="cardsTitle" :benefits="benefits" :largeCard="largeCard")
    Scheme(:title="schemeTitle" :desc="schemeDesc" :steps="steps")
    Manager
    Accordeon(:questions="questions")
    .divider
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
import marketImg from '~/assets/images/market-point.svg'
import personImg from '~/assets/images/person.svg'
import horecaImg from '~/assets/images/horeca.svg'
import cafeiconImg from '~/assets/images/cafe.svg'
import gretski from '~/assets/images/fudo-orehi/gretskiy-oreh.webp'
import arahis from '~/assets/images/fudo-orehi/arahis.webp'
import brazil from '~/assets/images/fudo-orehi/brazilskiy-oreh.webp'
import fistashki from '~/assets/images/fudo-orehi/fistashki.webp'
import keshu from '~/assets/images/fudo-orehi/keshyu.webp'
import mindal from '~/assets/images/fudo-orehi/mindal.webp'
import pekan from '~/assets/images/fudo-orehi/pekan.webp'
import funduk from '~/assets/images/fudo-orehi/funduk.png'
export default {
    data() {
        return{
            title: 'Орехи оптом с&nbsp;<span style="font-family: var(--bold)">Фуд Сити</span> в&nbsp;Москве и&nbsp;МО',
            desc: 'Закупаем орехи на рынке Фуд Сити для кафе, кондитерских и магазинов. Пришлите список и нужный вес по каждой позиции. Уточним наличие и цены на рынке, согласуем закупку и организуем доставку',
            products: [
                {
                    title: 'Грецкие орехи',
                    img: gretski,
                },
                                {
                    title: 'Арахис',
                    img: arahis,
                },
                                {
                    title: 'Фисташки',
                    img: fistashki,
                },
                                {
                    title: 'Бразильский орех',
                    img: brazil,
                },
                                              {
                    title: 'Кешью',
                    img: keshu,
                },
                                                              {
                    title: 'Миндаль',
                    img: mindal,
                },
                {
                    title: 'Пекан',
                    img: pekan,
                },
                                {
                    title: 'Фундук',
                    img: funduk,
                },
            ],
            priceListTitle: 'Сколько стоят фрукты и&nbsp;овощи на&nbsp;Фуд&nbsp;Сити?',
            priceListDesc: 'Для наших клиентов мы&nbsp;сформировали прайс-лист с&nbsp;оптовыми ценами на&nbsp;фрукты и&nbsp;овощи. Каждую неделю мы&nbsp;стараемся актуализировать цены и&nbsp;ассортимен.',
            priceListLink: 'https://docs.google.com/spreadsheets/d/17r1xb_CuMd0x3XEtIPUXwbSkZWWUR5vNgW5dQYriOCw/edit?usp=sharing',
            forthemTitle: 'С кем мы работаем',
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
                    text: 'Прямые закупки у&nbsp;поставщиков Фуд&nbsp;Сити'
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
                    text: 'Удобные условия сотрудничества для&nbsp;организаций'
                },
                {
                    img: managerImg,
                    text: 'Персональный менеджер помогающий на каждом этапе процесса'
                },
            ],
            schemeTitle: 'Как оформить заказ на&nbsp;доставку с Фуд Сити?',
            schemeDesc: 'Многолетний опыт позволил нам выстроить простой и&nbsp;эффективный процесс',
            steps: [
                {
                    num: 1,
                    title: 'Направьте список',
                    desc: 'Отправьте список и нужный объем. Мы&nbsp;соберем актуальные цены на&nbsp;рынке.'
                },
                {
                    num: 2,
                    title: 'Согласуем цену',
                    desc: 'Если цена вас устраивает, мы соберем ваш заказ.'
                },
                {
                    num: 3,
                    title: 'Соберем заказ',
                    desc: 'Собираем заказ, тщательно проверяя каждый продукт.'
                },
                {
                    num: 4,
                    title: 'Пришлем фотоотчет',
                    desc: 'Полностью собрав ваш заказ мы&nbsp;предоставляем фото или видео отчет'
                },
                {
                    num: 5,
                    title: 'Отправим заказ',
                    desc: 'Находим курьера, грузим и&nbsp;отправляем. Вы получаете товар на&nbsp;адрес в&nbsp;удобное для вас время.'
                },
                {
                    num: 6,
                    title: 'Проверка и оплата',
                    desc: 'Если всё хорошо оплачиваете, если нет, мы&nbsp;найдем честное решение.'
                },
            ],
  questions: [
    {
        question: 'Как убедиться в качестве орехов до отправки?',
        answer: 'Перед закупкой уточним, что для вас важно: размер ядер, целые орехи или половинки, сырые или жареные. Перед отправкой можем прислать фото или видео собранной партии, чтобы вы&nbsp;увидели товар и&nbsp;упаковку.',
        open: false
    },
    {
        question: 'Что делать, если орехи приедут повреждёнными или будут отличаться от согласованных?',
        answer: 'Напишите нам после приёмки и&nbsp;приложите фото товара и&nbsp;упаковки. Сверим поставку с&nbsp;тем, что согласовали, и&nbsp;обсудим решение по&nbsp;проблемной позиции.',
        open: false
    },
    {
        question: 'Можно ли начать с небольшой партии и взять несколько видов орехов?',
        answer: 'Пришлите список и&nbsp;нужный вес по&nbsp;каждой позиции. Уточним, какие виды можно собрать в&nbsp;одном заказе, какой вес упаковки доступен и&nbsp;от&nbsp;какого объёма действует оптовая цена.',
        open: false
    },
    {
        question: 'Как узнать итоговую стоимость до закупки?',
        answer: 'Уточним актуальные цены на&nbsp;Фуд Сити для вашего объёма. До&nbsp;закупки согласуем стоимость товара и&nbsp;услуги Fudo. Доставку рассчитаем отдельно по&nbsp;вашему адресу.',
        open: false
    },
    {
        question: 'Как получить заказ и можно ли забрать его самостоятельно?',
        answer: 'Организуем доставку по&nbsp;Москве и&nbsp;Московской области. Если удобнее забрать заказ с&nbsp;Фуд Сити, согласуем время и&nbsp;подготовим партию к&nbsp;вашему приезду.',
        open: false
    },
],
            assTitle: 'Широкий ассортимент орехов',
            assDesc: 'Каждый день мы закупаем орехи напрямую у проверенных поставщиков.',
            cardsTitle: 'Почему выгодно заказывать у нас?',
            largeCard: {
                text: 'Мы стараемся поддерживать долгосрочные отношения с&nbsp;нашими клиентами'
            }
        }
    },
    setup() {
        useSeoMeta({
            title: 'Орехи оптом в Москве с рынка Фуд Сити | Fudo',
            description: 'Закупаем орехи оптом на рынке Фуд Сити и организуем доставку по Москве и МО. Пришлите список и объёмы, чтобы узнать актуальные цены и наличие.'
        })
    }
}
</script>


<style lang="scss" scoped>
h1{
    font-family: var(--extraBold);
    font-size: 40px;
}

.divider{
    margin-top: 60px;
}
</style>