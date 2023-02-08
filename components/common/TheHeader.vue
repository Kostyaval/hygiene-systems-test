<template>
  <div class="wrapper">
    <header class="header">
      <div class="container">
        <div class="logo">
          <img :src="require('@/assets/images/logo.svg')" />
        </div>
        <!-- Desktop Navigation-->
        <nav class="navigation">
          <template v-for="(item, index) in navigation">
            <template>
              <nuxt-link :key="index" class="item link " :to="`${item.link}/`">
                {{ item.name }}
              </nuxt-link>
            </template>
          </template>
        </nav>
        <div class="right">
          <div class="input-box">
            <button class="search">
              <svg-icon name="default/search" class="icon-search" />
            </button>
            <input
              v-model="searchValue"
              type="text"
              class="input body-2"
              placeholder="Search"
            />
          </div>
          <nuxt-link to="/contact-us/" class="button button--transparent">
            Contact Us
          </nuxt-link>
        </div>
        <!-- End of Desktop Navigation-->
      </div>
    </header>
  </div>
</template>

<script>
import navigation from '@/assets/content/navigation'

export default {
  name: 'TheHeader',
  data() {
    return {
      navigation,
      searchValue: '',
    }
  },
}
</script>

<style scoped lang="sass">
.wrapper
  position: sticky
  top: 0
  z-index: 100
.header
  position: absolute
  top: 0
  right: 0
  left: 0
  height: 72px
  padding: 16px 48px
  background-color: var(--neutral-200)
  .container
    display: flex
    align-items: center
    justify-content: space-between
.navigation
  display: flex
  justify-content: space-between
  align-items: center
  width: 100%
  max-width: 432px
  .item
    +button-m
    color: var(--neutral-600)
    white-space: nowrap
.button
  height: 40px
  margin-left: 16px
.input-box
  display: inline-flex
  justify-content: center
  padding: 8px 16px
  height: 40px
  width: 118px
  background-color: var(--neutral-100)
  border-radius: 24px
.icon-search
  width: 24px
  height: 24px
.input
  max-width: 70px
  margin-left: 8px
  color: var(--neutral-400)
  &::placeholder
     opacity: 0.65
  &:focus-visible
    outline: inherit
.right
  display: flex
</style>
