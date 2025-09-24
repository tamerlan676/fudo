// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: 'Доставка продуктов оптом с Фуд Сити | Москва и МО | Fudo',
      meta: [
        { 
          name: 'description', 
          content: 'Оптовая доставка продуктов с Фуд Сити: фрукты, овощи, мясо, рыба, молочные товары и бакалея. Работаем с ресторанами и оптовыми и розничными покупателями в Москве.' 
        }
      ],
      link: [
        { 
          rel: 'canonical', 
          href: 'https://mysite.com/' 
        },
        {
          rel: 'icon',
          type: 'image/x-icon',
          href: '/favicon.svg'
        },
      ]
    }
  },
  compatibilityDate: '2025-07-15',
  css: ['~/assets/scss/main.scss'],
  devtools: { enabled: true }
})
