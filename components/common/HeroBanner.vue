<template>
  <article
    :style="[
      { backgroundColor },
      { backgroundImage },
      { backgroundPosition },
      { backgroundSize },
    ]"
    :class="[imageStyleClass]"
    class="article"
  >
    <div class="wrapper">
      <div class="logo-wrapper">
        <nuxt-picture
          quality="80"
          class="logo"
          :class="logoClass"
          :src="logo"
          loading="lazy"
        />
      </div>
      <div class="content">
        <div class="content-text">
          <h2
            v-if="title"
            class="title heading-1"
            :class="[titleClass]"
            :style="[
              { color: titleColor },
              { backgroundImage: titleColorGradient },
            ]"
          >
            {{ title }}
          </h2>
          <h3
            v-if="subtitle"
            class="subtitle-1 subtitle"
            :style="{ color: subtitleColor }"
          >
            {{ subtitle }}
          </h3>
          <slot></slot>
          <div class="section-made">
            <svg-icon name="default/flag" class="icon-flag" />
            <div class="section-made-text">
              Trusted by 5,000 + businesses NZ wide
            </div>
          </div>
        </div>
      </div>
      <div :class="[imagePositionClass]" class="image-wrapper">
        <nuxt-picture
          quality="80"
          class="image"
          :class="[imageTransformClass]"
          :src="image"
          :alt="alt"
          loading="lazy"
        />
      </div>
    </div>
  </article>
</template>

<script>
export default {
  name: 'HeroBanner',
  components: {},
  props: {
    image: {
      type: String,
      default: '',
    },
    title: {
      type: String,
      default: '',
    },
    subtitle: {
      type: String,
      default: '',
    },
    subtitleColor: {
      type: String,
      default: '',
    },
    alt: {
      type: String,
      default: '',
    },
    mobileCover: {
      type: Boolean,
      default: false,
    },
    imagePosition: {
      type: String,
      default: 'Right',
    },
    imageFitTop: {
      type: Boolean,
      default: false,
    },
    imageStyle: {
      type: String,
      default: '',
    },
    backgroundColor: {
      type: String,
      default: 'transparent',
    },
    descriptionTop: {
      type: Boolean,
      default: false,
    },
    titleColor: {
      type: String,
      default: '',
    },
    backgroundImage: {
      type: String,
      default: '',
    },
    backgroundPosition: {
      type: String,
      default: '',
    },
    backgroundSize: {
      type: String,
      default: 'contain',
    },
    titleClass: {
      type: String,
      default: '',
    },
    titleColorGradient: {
      type: String,
      default: '',
    },
    width: {
      type: Boolean,
      default: false,
    },
    imageTransformClass: {
      type: String,
      default: '',
    },
    backgroundMobile: {
      type: Boolean,
      default: true,
    },
    logo: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      logoClass: 'transparent-logo',
    }
  },
  computed: {
    imagePositionClass() {
      return this.imagePosition.toLowerCase()
    },
    imageStyleClass() {
      return this.imageStyle.toLowerCase()
    },
  },

  mounted() {
      this.logoClass = 'logo-animation'


  },
}
</script>

<style lang="sass" scoped>
.article
  min-height: 912px
  //max-height: 824pxF
  padding: 80px 0 100px
  display: flex
  align-items: center
  background-position: left center
  background-repeat: no-repeat
  .wrapper
    width: 100%
    position: relative
    max-width: 1440px
    margin-left: auto
    margin-right: auto
    padding-left: 48px
    padding-right: 48px
    display: grid
    grid-template-columns: 1fr 1fr
    grid-auto-flow: dense
    grid-column-gap: 10px
    align-items: center
  .image-wrapper
    position: relative
    display: flex
    justify-content: center
    flex-direction: column
    align-items: flex-start
  .image::v-deep img
    max-width: 725px
    height: auto
  .content
    display: flex
    justify-content: center
    height: 100%
  .content-text
    position: relative
    max-width: 504px
    +text-base
    padding-top: 100px
  .subtitle
    padding-top: 50px
  .logo-wrapper
    position: absolute
    right: 29%
  .logo::v-deep img
    max-width: 635px
  .transparent-logo::v-deep img
    opacity: 0
  .logo-animation
    transition: 8s opacity-logo 10s
  .section-made
    display: grid
    grid-auto-flow: column
    position: absolute
    bottom: 0
    left: 0
    width: 267px
    height: 64px
  .section-made-text
    color: var(--neutral-400)
    padding-left: 24px
    line-height: 32px
  .icon-flag
    width: 64px
    height: 64px
// Modifications
.article
  .wrapper.cover
    justify-items: center

  &.outside
    overflow: hidden
    position: relative
    .image-wrapper
      display: block
      position: inherit
      height: 100%
      width: 100%
    .image
      max-height: 100%
      width: 100%
      position: absolute
      top: 50%
      transform: translateY(-50%)
  .title-gradient
    background-size: 100%
    background-repeat: repeat
    background-clip: text
    text-fill-color: transparent
    -webkit-background-clip: text
    -webkit-text-fill-color: transparent
</style>
