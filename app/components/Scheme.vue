<template lang="pug">
    section.scheme 
        h2.section-title(v-html="title") 
        .desc(v-html="desc")
        .schemeWrapper 
            .card.card-large 
                .text(v-html="desc")
            .card(v-for="card in steps" :key="card.id") 
                .stepNumber {{ card.num }}
                .title(v-html="card.title")
                .cardDesc(v-html="card.desc") 
        a.btn(href="#") Отправить список
    </template>
    
    
    <script>
    export default {
        data() {
            return{
    
            }
        },
        props: {
            title: String,
            desc: String,
            steps: Array
        }
    }
    </script>
    
    
    <style lang="scss" scoped>
    .scheme{
        .section-title{
            @media(min-width: 1200px){
                margin-bottom: 64px;
            }
        }
        .desc{
            font-family: var(--medium);
            margin-bottom: 24px;
            @media(min-width: 992px){
                text-align: center;
                margin-bottom: 56px;
            }
            @media(min-width: 1200px){
                display: none;
            }
        }
        .schemeWrapper{
            display: grid;
            grid-gap: 24px;
            margin-bottom: 24px;
            @media(min-width: 992px){
                grid-template-columns: 1fr 1fr;
            }
            @media(min-width: 1200px){
                grid-template-columns: repeat(4, 1fr);
                width: 1200px;
                margin: 0 auto 40px;
            }
            .card-large {
                    display: none;
                @media(min-width: 1200px){
                    grid-template-columns: 1fr 1fr;
                    grid-column: span 2;
                    display: block;
                    position: relative;
                    &:before{
                        position: absolute;
                        top: 0;
                        right: 50px;
                        background-image: url(~/assets/images/manager-ok.png);
                        background-size: cover;
                        width: 200px;
                        height: 100%;
                        content: '';
                    }
                }
                .text{
                    font-family: var(--bold);
                    padding-right: 220px;
                    font-size: 20px;
                    line-height: 30px;
                }
            }
            .card{
                border: none;
                .stepNumber{
                    font-size: 20px;
                    font-family: var(--bold);
                    background: var(--pink);
                    color: #fff;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    border-radius: 100%;
                    width: fit-content;
                    width: 40px;
                    height: 40px;
                    margin-bottom: 16px;
                }
                .title{
                    font-size: 20px;
                    font-family: var(--bold);
                    margin-bottom: 8px;
                }
    
            }
    
        }
        .btn{
            width: 300px;
            margin: 0 auto;
        }
        
    }
    </style>