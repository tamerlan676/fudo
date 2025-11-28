<template lang="pug">
    section.faq-accordion
      h2.section-title Вопросы и ответы
      .accordion
        .accordion-item(
          v-for="(item, index) in questions"
          :key="item.id"
          :class="{ 'accordion-item--active': activeIndex === index }"
        )
          button.accordion-header(
            @click="toggleAccordion(index)"
            :aria-expanded="activeIndex === index"
          )
            span.accordion-title {{ item.question }}
            span.accordion-icon
              svg(
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              )
                path(
                  d="M4 6L8 10L12 6"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                )
    
          transition(
            name="accordion"
            @enter="onEnter"
            @after-enter="onAfterEnter"
            @leave="onLeave"
          )
            .accordion-content(v-show="activeIndex === index")
              .accordion-body(v-html="item.answer")
    </template>
    
    <script>
    export default {
      name: 'FAQAccordion',
      
      data() {
        return {
          activeIndex: null,
        }
      },
      props: {
                questions: Array
        },
      methods: {
        toggleAccordion(index) {
          this.activeIndex = this.activeIndex === index ? null : index
        },
        
        onEnter(el) {
          el.style.height = '0'
          el.offsetHeight // force reflow
          el.style.height = `${el.scrollHeight}px`
        },
        
        onAfterEnter(el) {
          el.style.height = 'auto'
        },
        
        onLeave(el) {
          el.style.height = `${el.scrollHeight}px`
          el.offsetHeight // force reflow
          el.style.height = '0'
        }
      }
    }
    </script>
    
    <style lang="scss" scoped>
.faq-accordion {
}

.accordion {
  max-width: 1200px;
  margin: 0 auto;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  overflow: hidden;

  &-item {
    border-bottom: 1px solid #d9dee4;
    
    &:last-child {
      border-bottom: none;
    }

    &--active {
      .accordion-header {
        background: rgb(236, 236, 236);
        font-weight: 600;
      }

      .accordion-icon {
        transform: rotate(180deg);
        color: #334155;
      }
    }
  }

  &-header {
    width: 100%;
    padding: 1.5rem;
    background: rgb(236, 236, 236);
    border: none;
    text-align: left;
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    align-items: center;
    transition: all 0.3s ease;

    &:hover {
        background: rgb(236, 236, 236);
    }

    &:focus {
      outline: none;
    }

    &:focus-visible {
      outline: 2px solid #3b82f6;
      outline-offset: -2px;
    }
  }

  &-title {
    font-size: 1.1rem;
    color: #1e293b;
    margin-right: 1rem;
    line-height: 1.4;
  }

  &-icon {
    transition: transform 0.3s ease;
    color: #64748b;
    flex-shrink: 0;
  }

  &-content {
    overflow: hidden;
    transition: height 0.3s ease;
  }

  &-body {
    padding: 1.5rem;
    background: white;
    color: #475569;
    line-height: 1.6;
    width: 800px;
    
    &::selection {
      background: #dbeafe;
      color: #1e40af;
    }
  }
}

// Анимации для transition
.accordion {
  &-enter-active,
  &-leave-active {
    transition: height 0.3s ease;
  }

  &-enter-from,
  &-leave-to {
    height: 0 !important;
  }
}

// Адаптивность
@media (max-width: 768px) {
  .faq-accordion {
    .faq-title {
      font-size: 1.25rem;
      margin-bottom: 1rem;
    }
  }
  
  .accordion {
    
    &-header {
      padding: 1.25rem 1rem;
    }
    
    &-title {
      font-size: 1rem;
    }
    
    &-body {
      padding: 1.25rem 1rem;
      font-size: 0.95rem;
      width: 100%;
    }
  }
}
</style>