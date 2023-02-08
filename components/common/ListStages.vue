<template>
  <div class="list-stages">
    <h1 class="title heading-2">{{ title }}</h1>
    <div class="wrapper">
      <div id="benefits" class="benefits">
        <div id="progress" :style="scrollStep"></div>
        <div
          class="item"
          v-for="(item, index) in listStages"
          :style="`grid-area: ${gridAreaName[index]}`"
          :key="index"
          :class="(index + 1) % 2 === 1 ? 'odd' : ''"
        >
          <div class="number heading-1">{{ index + 1 }}</div>
          <div class="heading-3">{{ item.title }}</div>
          <div class="item-message body-1" v-html="item.message"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const gridAreaName = ['a', 'b', 'c', 'd', 'e']

export default {
  name: 'ListStages',
  props: {
    title: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      listStages: [
        {
          title: 'Contact Us',
          message:
            'Contact us via phone or email and your local hygiene consultant will call you back at time convienient for you.',
        },
        {
          title: 'Site survey',
          message:
            'We will arange for your local hygiene consultant to visit your site to carry out a site survey to determine the best solution for your site.',
        },
        {
          title: 'Proposal',
          message:
            'Your local hygiene consultant will then prepare a detailed proposal tailored to your specific needs.',
        },
        {
          title: 'Installation',
          message:
            'Once you have accepted our proposal and signed your service agreement our professional installation team will liaise with you to book in your install at a time convenient to you.',
        },
        {
          title: 'Service',
          message:
            'Our friendly and professional service team will complete your scheduled services and any proactive maintenance require',
        },
      ],
      height: '',
    }
  },
  computed: {
    scrollStep() {
      return `height :${this.height}px`
    },
  },
  beforeMount() {
    window.addEventListener('scroll', this.handleScroll)
  },
  created() {
    this.gridAreaName = gridAreaName
  },
  methods: {
    handleScroll() {
      this.height =
        window.scrollY -
        document.documentElement.getElementsByClassName('list-stages')[0]
          .offsetTop +
        100
    },
  },
}
</script>

<style lang="sass" scoped>
.list-stages
  padding-top: 75px
  padding-bottom: 215px
  background-color: var(--neutral-200)
  .benefits
    display: grid
    justify-items: center
    grid-template-areas: 'a .' '. b' 'c .' '. d' 'e .'
    grid-row-gap: 24px
    grid-column-gap: 24px
    justify-content: center
    margin-top: 109px
    height: 100%
    position: relative
    overflow: hidden
    &::before
      content: ''
      position: absolute
      width: 6px
      height: 100%
      border: 2px solid var(--neutral-100)
      border-radius: 3px
    #progress
      position: absolute
      width: 4px
      border-radius: 3px
      background-color: var(--orange-500)
  .item
    max-width: 456px
    margin-left: 132px
  .title
    text-align: center
    color: var(--turquoise-500)
  .icon
    width: 96px
    height: 96px
  .item-title
    padding-top: 30px
  .item-message
    padding-top: 24px
  .odd
    text-align: end
    margin-right: 132px
    margin-left: 0
  .number
    -webkit-text-stroke: 1px var(--orange-500)
    -webkit-text-fill-color: transparent
</style>
