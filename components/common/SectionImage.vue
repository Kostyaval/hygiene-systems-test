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
      <div class="content" :class="[imagePositionClass]">
        <h2
          v-if="title"
          class="title heading-2"
          :class="[titleClass]"
          :style="[{ color: titleColor }]"
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
      </div>
      <div
        class="image-wrapper background-image"
        :style="`background-color: ${backgroundColorImage}`"
      >
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
  name: 'SectionImage',
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
    width: {
      type: Boolean,
      default: false,
    },
    imageTransformClass: {
      type: String,
      default: '',
    },
    backgroundColorImage: {
      type: String,
      default: '',
    },
  },
  computed: {
    imagePositionClass() {
      return this.imagePosition.toLowerCase()
    },
    imageStyleClass() {
      return this.imageStyle.toLowerCase()
    },
  },
}
</script>

<style lang="sass" scoped>
.article
  min-height: 912px
  //max-height: 824pxF
  padding: 100px 0
  display: flex
  align-items: center
  background-position: left center
  background-repeat: no-repeat
  .wrapper
    width: 100%
    max-width: 1200px
    margin-left: auto
    margin-right: auto
    padding-left: 48px
    padding-right: 48px
    display: grid
    grid-template-columns: 1fr 1fr
    grid-auto-flow: dense
    grid-column-gap: 70px
    align-items: center
  .image-wrapper
    position: relative
    display: flex
    justify-content: flex-end
    flex-direction: column
    align-items: center
  .content
    +text-base
    max-width: 456px
  .subtitle
    padding-top: 45px
  .background-image
    max-width: 504px
    min-height: 768px
    border-radius: 400px
    overflow: hidden
  .image::v-deep img
    max-width: 403px
// Modifications

.article
  .left
    grid-column: 2
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
</style>
