<template>
  <div class="home-page">
    <TheHeader/>
    <HeroBanner
      title="High quality hygiene systems"
      subtitle="Let’s talk high-tech hygiene."
      title-class="title-gradient"
      title-color-gradient="linear-gradient(270deg, #00AAB8 13.94%, #9FE8ED 100%)"
      image="/image/banner.png"
      logo="/image/logo-img.png"
    >
      <div
        class="body-1 message-padding"
        v-html="
          'Protect your staff and customers around the clock with the ultimate hygiene protection, delivered with world-leading technology and on-call team support.'
        "
      ></div>
      <div class="buttons">
        <nuxt-link to="/products" class="button"
          >Our Products</nuxt-link
        >
        <nuxt-link
          to="/contact-us"
          class="button button--transparent"
        >
          Contact Us
        </nuxt-link>
      </div>
    </HeroBanner>
    <SliderComponent></SliderComponent>
    <HowWeWork title="How we work"></HowWeWork>
    <ListStages title="Stages of cooperation"></ListStages>
    <SectionImage
      image="/image/plumber.png"
      title="Professional service team"
      subtitle="We offer a full service programme."
      subtitle-color="var(--neutral-700)"
      background-color-image="var(--turquoise-100)"
    >
      <div
        class="body-1 message-padding"
        v-html="
          ' Our friendly service team work alongside our customers to maintain a high level of hygiene protection within their workspace. '
        "
      ></div>
      <div class="buttons">
        <nuxt-link to="/" class="button"
          >Make Order</nuxt-link
        >
        <nuxt-link
          to="/learn-more/"
          class="button button--transparent"
        >
          Learn More
        </nuxt-link>
      </div>
    </SectionImage>
    <SectionImage
      image="''"
      title="Hoop Connect"
      subtitle="Flexible and convenient online consultations"
      subtitle-color="var(--neutral-700)"
      image-position="left"
      background-color="var(--neutral-200)"
    >
      <div
        class="body-1 message-padding"
        v-html="
          '<div> Connect with a Hygiene Consultant to see how we can reduce cost, reduce waste and improve hygiene within your workplace.</div></br>\n' +
          '\n'  +
          '<div>Hoop Connect not only allows you to remotely meet your hygiene consultant face-to-face, it takes you through a personalised presentation of our products and services.</div>'
        "
      ></div>
      <div class="buttons">
        <nuxt-link to="/" class="button"
          >Connect</nuxt-link
        >
        <nuxt-link
          to="/"
          class="button button--transparent"
        >
          Learn More
        </nuxt-link>
      </div>
    </SectionImage>
  </div>
</template>

<script>
import SliderComponent from '~/components/common/SliderComponent.vue'
import HeroBanner from '~/components/common/HeroBanner.vue'
import HowWeWork from '~/components/common/HowWeWork.vue'
import ListStages from '~/components/common/ListStages.vue'
import SectionImage from '~/components/common/SectionImage.vue'
import TheHeader from "~/components/common/TheHeader.vue";

export default {
  name: 'IndexPage',
  components: {
    HeroBanner,
    ListStages,
    HowWeWork,
    SliderComponent,
    SectionImage,
    TheHeader
  },
}
</script>
<style lang="sass" scoped>
.home-page
  font-family: $fontFamily
  .message-padding
    padding-top: 22px
  .buttons
    padding-top: 85px
  .button + .button
    margin-left: 24px
</style>
