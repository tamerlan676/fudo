<template lang="pug">
    Hero(:title="title" :desc="desc")
    ProductsList(title="Широкий ассортимент бакалеи" desc="Каждый день мы закупаем бакалею напрямую у проверенных поставщиков." :products="products")
    Cards(:cardsTitle="forthemTitle" :benefits="forthemList")
    Cards(:cardsTitle="cardsTitle" :benefits="benefits" :largeCard="largeCard")
    Scheme(:title="schemeTitle" :desc="schemeDesc" :steps="steps")
    Manager
    Questions(title="Ответы на часто задаваемые вопросы" :questions="questions")
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
import krupiImg from '~/assets/images/krupi.jpg'
import makaroniImg from '~/assets/images/makaroni.jpg'
import mukaImg from '~/assets/images/muka.jpg'
import konserviImg from '~/assets/images/konservi.jpg'
import cafeiconImg from '~/assets/images/cafe.svg'
import marketImg from '~/assets/images/market-point.svg'
import personImg from '~/assets/images/person.svg'
import horecaImg from '~/assets/images/horeca.svg'
export default {
    data() {
        return{
            title: 'Бакалея с&nbsp;<span style="font-family: var(--bold)">Фуд Сити</span> в&nbsp;Москве и&nbsp;МО',
            desc: 'Закупаем бакалею напрямую на&nbsp;рынке Фуд Сити и&nbsp;доставляем оптовым и&nbsp;розничным клиентам',
            products: [
                {
                    title: 'Крупы',
                    img: krupiImg,
                    list: 'Фасоль, чечивица, гречка, рис, булгур, нут и многое другое'
                },
                {
                    title: 'Макаронные изделия',
                    img: makaroniImg,
                    list: 'Лапша, макароны, пысты и многое другое'
                },
                {
                    title: 'Мука',
                    img: mukaImg,
                    list: 'Мука кукурузная, мука пшеничная, соль, сахар и многое другое'

                },
                {
                    title: 'Консервы',
                    img: konserviImg,
                    list: 'Говядина, конина, баранина и многое другое'
                }
            ],
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
            schemeTitle: 'Как оформить заказ на&nbsp;доставку рыбы с Фуд Сити?',
            schemeDesc: 'Многолетний опыт позволил нам выстроить простой и&nbsp;эффективный процесс',
            steps: [
                {
                    num: 1,
                    title: 'Направьте список',
                    desc: 'Отправьте список нужных позиций. Мы&nbsp;соберем актуальные цены на&nbsp;рынке.'
                },
                {
                    num: 2,
                    title: 'Согласуем цену',
                    desc: 'Если цена вас устраивает, мы начинаем собирать ваш заказ.'
                },
                {
                    num: 2,
                    title: 'Соберем заказ',
                    desc: 'Собираем заказ, тщательно отбирая каждый продукт.'
                },
                {
                    num: 3,
                    title: 'Пришлем фотоотчет',
                    desc: 'Полностью собрав ваш заказ мы&nbsp;предоставляем фото или видео отчет'
                },
                {
                    num: 4,
                    title: 'Отправим заказ',
                    desc: 'Находим курьера Яндекс Go, грузим и&nbsp;отправляем. Вы получаете товар на&nbsp;адрес в&nbsp;удобное для вас время.'
                },
                {
                    num: 5,
                    title: 'Проверка и оплата',
                    desc: 'Если всё хорошо оплачиваете, если нет, мы&nbsp;найдем честное решение.'
                },
            ],
            questions: [
                        {
                            question: 'Как проходит доставка?',
                            answer: 'Мы собираем заказы по вашему списку, тщательно отбираем самые качественные образцы. Собрав заказ мы&nbsp;находим курьера и&nbsp;отправляем его на&nbsp;ваш адрес',
                            open: false
                        },
                        {
                            question: 'У кого вы закупаете бакалею ?',
                            answer: 'Работаем на прямую только с проверенными поставщиками, которые давно работают на рынке.',
                            open: false
                        },
                        {
                            question: 'Как бывает упакован заказ?',
                            answer: 'Мы упаковываем товар таким образом, чтобы он доехал до вас в&nbsp;целости и&nbsp;сохранности.',
                            open: false
                        },
                        {
                            question: 'Могу ли я увидеть фото или видео своего заказа перед отправкой ?',
                            answer: 'Мы можем прислать фото или видео вашего заказа, прежде чем он&nbsp;поедет к&nbsp;вам',
                            open: false
                        },
                        {
                            question: 'А что, если мне не понравится то, что приехало ?',
                            answer: 'Если вы поймете, что продукты не соответсвует вашим ожиданям, мы&nbsp;вернем все до&nbsp;копейки.',
                            open: false
                        },
                    ],
            assTitle: 'Широкий ассортимент бакалеи',
            assDesc: 'Каждый день мы закупаем бакалею напрямую у проверенных поставщиков.',
            cardsTitle: 'Почему выгодно заказывать у нас?',
            largeCard: {
                text: 'Мы стараемся поддерживать долгосрочные отношения с&nbsp;нашими клиентами'
            }
        }
    },
    setup() {
        useSeoMeta({
            title: 'Бакалея с Фуд Сити | Доставка по Москве и МО',
            description: 'Бакалея с Фуд Сити. Свежие продукты напрямую от поставщиков. Доставка для ресторанов, магазинов и оптовиков по Москве и МО.'
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