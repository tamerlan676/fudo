<template lang="pug">
    Hero(:title="title" :desc="desc")
    ProductsList(title="Широкий ассортимент овощей и фруктов оптом" desc="Каждый день мы закупаем свежие продукты напрямую у проверенных поставщиков." :products="products")
    Cards(:cardsTitle="forthemTitle" :benefits="forthemList")
    Cards(:cardsTitle="cardsTitle" :benefits="benefits" :largeCard="largeCard")
    Scheme
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
import fruitsImg from '~/assets/images/fruits.jpg'
import berriesImg from '~/assets/images/berries.jpg'
import vegetablesImg from '~/assets/images/vegetables.jpg'
import greenImg from '~/assets/images/green.jpg'
import cafeiconImg from '~/assets/images/cafe.svg'
import marketImg from '~/assets/images/market-point.svg'
import personImg from '~/assets/images/person.svg'
import horecaImg from '~/assets/images/horeca.svg'
export default {
    data() {
        return{
            title: 'Фрукты и овощи оптом с&nbsp;<span style="font-family: var(--bold)">Фуд Сити</span> в&nbsp;Москве и&nbsp;МО',
            desc: 'Закупаем свежие овощи и фрукты напрямую на&nbsp;рынке Фуд Сити и&nbsp;доставляем оптом ресторанам, магазинам и&nbsp;другим оптовым и&nbsp;розничным покупателям',
            products: [
                {
                    title: 'Свежие фрукты',
                    img: fruitsImg,
                    list: 'яблоки, груши, сливы, виноград, апельсины, мандарины, экзотика, и многое другое'
                },
                {
                    title: 'Свежие ягоды',
                    img: berriesImg,
                    list: 'клубника, голубика, малина, черника, ежевика, калина, брусника и многое другое'
                },
                {
                    title: 'Свежие овощи',
                    img: vegetablesImg,
                    list: 'томаты, огурцы, картофель, перец, бакалажаны, кабачки, капуста и многое другое'

                },
                {
                    title: 'Свежая зелень',
                    img: greenImg,
                    list: 'кинза, укроп, петрушка, тархун, мята, базелик, руккола, айсберг, сельдерей и многое другое'
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
                    text: 'Удобные условия сотрудничества для&nbsp;кафе и&nbsp;магазинов'
                },
                {
                    img: managerImg,
                    text: 'Персональный менеджер помогающий на каждом этапе процесса'
                },
            ],
            questions: [
                        {
                            question: 'Как проходит доставка?',
                            answer: 'Мы собираем заказы по вашему списку, тщательно отбираем самые качественные образцы. Собрав заказ мы&nbsp;находим курьера и&nbsp;отправляем его на&nbsp;ваш адрес',
                            open: false
                        },
                        {
                            question: 'Откуда берутся ваши фрукты?',
                            answer: 'Работаем на прямую только с проверенными поставщиками, которые привозят лучшие фрукты со&nbsp;всего мира.',
                            open: false
                        },
                        {
                            question: 'Могу ли я заказать в офис?',
                            answer: 'Да, вы можете заказать фрукты и овощи как домой, так и&nbsp;в&nbsp;офис или любое другое место. У нас есть предложения для оптовых и&nbsp;розничных клиентов',
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
            assTitle: 'Широкий ассортимент овощей и фруктов оптом',
            assDesc: 'Каждый день мы закупаем свежие продукты напрямую у проверенных поставщиков.',
            cardsTitle: 'Почему выгодно заказывать у нас?',
            largeCard: {
                text: 'Мы стараемся поддерживать долгосрочные отношения с&nbsp;нашими клиентами'
            }
        }
    },
    setup() {
        useSeoMeta({
            title: 'Фрукты и овощи оптом с Фуд Сити | Доставка по Москве и МО',
            description: 'Овощи и фрукты оптом с Фуд Сити. Свежие продукты напрямую от поставщиков. Доставка для ресторанов, магазинов и оптовиков по Москве и МО.'
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