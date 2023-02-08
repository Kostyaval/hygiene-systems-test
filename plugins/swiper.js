import Vue from 'vue'

async function loadSwiper(ctx) {
  const {
    Swiper: SwiperClass,
    Pagination,
    Navigation,
    EffectFade,
    Lazy,
  } = await import('swiper/core' /* webpackChunkName: 'swiper-core' */)
  const { default: getAwesomeSwiper } = await import(
    'vue-awesome-swiper/dist/exporter' /* webpackChunkName: 'swiper-exporter' */
  )
  SwiperClass.use([Pagination, Navigation, EffectFade, Lazy])
  Vue.use(getAwesomeSwiper(SwiperClass))
  console.log(ctx)
  ctx.app.store.commit('setSwiperStatus', true)
}

export default function (ctx) {
  loadSwiper(ctx).catch(console.error)
}
