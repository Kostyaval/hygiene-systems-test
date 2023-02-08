<template>
  <div class="slider-component">
    <swiper class="swiper" :options="swiperOption">
      <swiper-slide
        v-for="(slide, index) in dataProducts"
        :key="index"
        class="slide"
      >
        <div
          class="wrapper"
          :style="`background-color: var(--${slide.color}-100)`"
        >
          <div
            class="gradient-min"
            :style="`background: radial-gradient(50% 50% at 50% 50%, var(--${slide.color}-200) 0%, rgba(159, 232, 237, 0) 100%)`"
          ></div>
          <div
            class="gradient"
            :style="`background: radial-gradient(50% 50% at 50% 50%,  var(--${slide.color}-200) 0%, rgba(159, 232, 237, 0) 100%)`"
          ></div>
          <div class="content-wrapper">
            <div class="content-box">
              <h5 class="title heading-3">{{ slide.title }}</h5>
              <div class="subtitle subtitle-2">
                {{ slide.subtitle }}
              </div>
              <div class="description body-2" v-html="slide.message" />
              <nuxt-link to="/" class="button button-slider"
                >30 Day FREE Trial</nuxt-link
              >
            </div>
          </div>
          <div class="image-wrapper">
            <nuxt-picture
              class="image"
              quality="80"
              :src="slide.image"
              loading="lazy"
              :alt="slide.title"
            />
          </div>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import { Pagination } from 'swiper'

export default {
  name: 'SliderComponent',
  components: { Swiper, SwiperSlide },
  setup() {
    return {
      modules: [Pagination],
    }
  },
  data() {
    return {
      swiperOption: {
        slidesPerView: 'auto',
        centeredSlides: true,
        spaceBetween: 24,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
      },
      dataProducts: [
        {
          title: 'Spray stations',
          subtitle: 'Autosanitiser  & Automatic sanitiser station',
          message:
            'Portable and convenient, our touch-free hand sanitiser stations are the perfect welcoming post for customers and employees.',
          color: 'purple',
          image: '/image/autotowel.png',
        },
        {
          title: 'Autotowel',
          subtitle: 'Automatic paper towel dispenser',
          message:
            '<li>Designed to balance cost, waste and hygiene, the Autotowel offers maximum hygiene benefits with minimum environmental impact.</li><li>Reduce paper consumption by up to 40% with single-controlled sheet dispensing.</li></li>',
          color: 'turquoise',
          image: '/image/autotowel.png',
        },
        {
          title: 'Mixed Autoroll',
          subtitle: 'Mixed Autoroll Recycled paper',
          message:
            'Made from recycled production offcuts, our mixed auto roll is an environmentally friendly solution allowing for a 100% waste-free paper production process.',
          color: 'orange',
          image: '/image/autotowel.png',
        },
        {
          title: 'Femcare bin',
          subtitle: 'Femcare Touch-free sanitary bins ',
          message:
            'Our serviced Femcare Sanitary Disposal Unit provides a discreet and trusted solution for the washroom and is available in touch-free or manual options to suit any budget.',
          color: 'red',
          image: '/image/autotowel.png',
        },
      ],
    }
  },
}
</script>

<style lang="sass" scoped>
.swiper-wrapper
  .image::v-deep img
    max-width: 445px
  .wrapper
    max-width: 1176px
    height: 440px
    border-radius: 40px
    margin: 0 auto
    position: relative
    display: flex
    justify-content: space-between
    overflow: hidden
  .content-wrapper
    z-index: 2
  .image-wrapper
    z-index: 2
  .content-box
    max-width: 504px
    padding: 64px 0 48px 72px
  .subtitle
    padding-top: 24px
  .description
    padding-top: 24px
    color: var(--neutral-700)
    font-size: 14px
    line-height: 24px
    &::v-deep
      li
        &::before
          content: "• "
        &:last-child
          padding-top: 20px
  .gradient-min
    position: absolute
    width: 504px
    height: 504px
    left: -180px
    top: -231px
  .gradient
    position: absolute
    width: 938px
    height: 938px
    left: 479px
    top: -125px
  .button-slider
    margin-top: 56px
.swiper-slide
  width: inherit
</style>
<style lang="scss">
@import 'swiper/swiper.scss';
</style>
