<template lang="pug">
    section.forthem
        h2.section-title(v-html="forthemTitle")
        .desc(v-html="assDesc")
        .wrapper 
            .card(v-for="card in forthemList") 
                img(v-if="card.img" :src="card.img")
                .cardTitle(v-if="card.title") {{ card.title }}
        a.btn(href="#") Написать сборщику
    </template>
    
    
    <script>
    export default {
        data() {
            return{
    
            }
        },
        props: {
            forthemTitle: String,
            assDesc: String,
            forthemList: Array
        }
    }
    </script>
    
    
    <style lang="scss" scoped>
    .forthem{
        .section-title{
        }
        .desc{
            font-family: var(--medium);
            margin-bottom: 24px;
            @media(min-width: 992px){
                text-align: center;
                margin-bottom: 56px;
            }
        }
        .wrapper{
            display: grid;
            grid-gap: 24px;
            margin-bottom: 24px;
            @media(min-width: 992px){
                grid-template-columns: 1fr 1fr 1fr 1fr;
            }
            @media(min-width: 1200px){
                width: 1200px;
                margin: 0 auto 40px;
            }
            .card{
                img{
                    width: 50px;
                    height: 50px;
                    margin-bottom: 8px;
                }
                .cardTitle{
                    font-family: var(--bold);
                    font-size: 20px;
                    margin-bottom: 8px;
                }
                .cardDesc{
                    white-space: pre-line;
                }
            }
            .largeCard {
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
                        background-image: url(~/assets/images/manager.png);
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
    
       }
        .btn{
            width: 300px;
            margin: 0 auto;
        }
        
    }
    </style>