<template>
  <div class="how-we-work">
    <h1 class="title heading-2">{{ title }}</h1>
    <div class="wrapper">
      <div class="benefits">
        <div
          class="item"
          v-for="(item, index) in benefitsList"
          :style="`grid-area: ${gridAreaName[index]}`"
          :key="index"
        >
          <svg-icon :name="`work-component/${item.iconName}`" class="icon" />
          <div class="item-message body-1" v-html="item.massage"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const gridAreaName = ['a', 'b', 'c', 'd', 'e']

export default {
  name: 'HowWeWork',
  props: {
    title: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      benefitsList: [
        {
          massage:
            'We maintain a professional hygiene service to customers nationwide.',
          iconName: 'geo',
        },
        {
          massage:
            'Our experienced hygiene service technicians work with an online service app to ensure they maintain their service schedules and professional performance.',
          iconName: 'computer',
        },
        {
          massage:
            'We invest in high-quality equipment to guarantee a professional hygiene experience for our customer.',
          iconName: 'diamond',
        },
        {
          massage:
            'Our hygiene consumables are manufactured to European standards with an emphasis on quality and time managed performance.',
          iconName: 'check',
        },
        {
          massage:
            'Our technicians maintain, clean and upgrade dispensers and will also adjust services if and when required on each site visit, which all forms part of our regular on-site maintenance programme.',
          iconName: 'technicians',
        },
      ],
    }
  },
  created() {
    this.gridAreaName = gridAreaName
  },
}
</script>

<style lang="sass" scoped>
.how-we-work
  padding: 75px 48px 100px
  .benefits
    display: grid
    justify-items: center
    grid-template-areas: 'a a a b b b b b c c c c' 'd d d d d e e e e e e e'
    grid-row-gap: 24px
    grid-column-gap: 24px
    justify-content: center
    margin-top: 109px
  .item
    background-color: var(--neutral-300)
    border-radius: 40px
    padding: 48px 32px 0 32px
    min-height: 376px
  .title
    text-align: center
    color: var(--turquoise-500)
  .icon
    width: 96px
    height: 96px
  .item-message
    padding-top: 48px
</style>
