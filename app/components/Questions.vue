<template lang="pug">
    .questions
        h2.section-title(v-html="title")
        .question-block(v-for="item in questions") 
            .question(@click=" item.open = !item.open") 
                .text(v-html="item.question")
                .plus(:class="{ rotate: item.open === true }")
            .answer(v-html="item.answer" :class="{ open: item.open === true }")
    </template>
        
        <script>
        export default {
            name: 'QuestionsAnswers',
            data() {
                return {
                }
            },
            props: {
                title: String,
                questions: Array
            }
        
        }
        </script>
        
        <style lang="scss" scoped>
        .questions{
           padding: 40px 24px;
           @media(min-width: 1200px){
                width: 1120px;
                margin: 0 auto;
                padding: 120px 0;
           }
           .question-block{
                border-bottom: 2px solid var(--pink);
                color: #000;
                color: #000;
                overflow: hidden;
                position: relative;
                .question{
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    cursor: pointer;
                    height: 80px;
                    .text{
                        width: 300px;
                        font-family: var(--bold);
                    }
                    .plus{
                        width: 35px;
                        height: 35px;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        font-size: 40px;
                        font-family: "Light";
                        background: #e5e5e5;
                        border-radius: 100%;
                        background: url(../assets/images/plus.svg);
                        background-size: cover;
                        transition: all .5s ease;
                        opacity: 0.5;
                        &.rotate{
                            transform: rotate(45deg);
                        }
                    }
                }
           }
           .answer{
                height: 0;
                transition: all .5s ease;
                color: #000;
                &.open{
                    height: fit-content;
                    padding: 15px 0;
                    @media(min-width: 1200px){
                        width: 500px;
                    }
                }
           }
        }
        
        </style>