<template lang="pug">
    .manager 
        .left 
            h2 Хотите сразу получить все ответы на&nbsp;ваши вопросы?
            .txt Напишите своему личному менеджеру на&nbsp;рынке Фуд&nbsp;Сити
            a.btn(href="https://wa.me/79188208097")
                span Написать в WhatsApp
                //- img(src="~/assets/images/wts-white.svg") 
        .manager-block 
            .image
                .tip Отвечу на вопросы
                .tip Узнаю рыночные цены
                .tip Организую доставку
                img(src="~/assets/images/manager-call.png")
            .manager-name   Тамерлан Менеджер
    </template>
    
    <script>
    export default{
        name: 'ManagerComp',
        props: {  
            title: String,
            desc: String,
            list: Array
            },
         data(){
            return{
            }
         }
    }
    </script>
    
    <style lang="scss" scoped>
        .manager{
          padding: 80px 16px 0;
          @media(min-width: 992px){
            padding: 120px 0 0;
            display: grid;
            grid-template-columns: 1fr 1fr;
            grid-gap: 24px;
            align-items: center;
            width: 900px;
            margin: 0 auto;
          }
          @media(min-width: 1200px){
            width: 1200px;
          }
          .left{
            margin-bottom: 24px;
          }
          h2{
            margin-bottom: 24px;
            font-size: 24px;
            text-align: center;
            @media(min-width: 992px){
              font-size: 40px;
              text-align: left;
              line-height: 56px;
            }
          }
          .txt{
            margin-bottom: 16px;
            text-align: center;
            @media(min-width: 992px){
              text-align: left;
              margin-bottom: 40px;
            }
          }
          .manager-name{
            border: 1px solid var(--pink);
            padding: 20px 40px;
            text-align: center;
            width: fit-content;
            margin: -15px auto 20px;
            background: #fff;
            position: relative;
            z-index: 2;
            border-radius: 50px;
            font-family: var(--medium);
            font-size: 20px;
            position: relative;
            @media(min-width: 992px){
              font-size: 24px;
              margin-bottom: 0;
            }
          }
          .image{
            position: relative;
            width: fit-content;
            margin: 0 auto;
            img{
              max-width: 100%;
              display: block;
              z-index: 1;
              @media(min-width: 992px){
                width: 350px;
              }
            }
            .tip{
              position: absolute;
              border: 1px solid var(--pink);
              background: #fff;
              color: var(--green);
              font-size: 12px;
              padding: 10px;
              border-radius: 30px;
              width: fit-content;
              @media(min-width: 992px){
                font-size: 16px;
              }
              &:nth-child(1){
                top: 160px;
                @media(min-width: 992px){
                    left: -100px;
                }
              }
              &:nth-child(2){
                top: 220px;
                right: 0;
                @media(min-width: 992px){
                    left: -100px;
                }
              }
              &:nth-child(3){
                top: 280px;
                @media(min-width: 992px){
                    left: -100px;
                }
              }
            }
          }
          .btn{
            width: 300px;
            margin: 0 auto;
            @media(min-width: 992px){
                margin: 0;
            }
          }
        }
    </style>
    