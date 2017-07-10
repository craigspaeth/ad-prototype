const $ = require('jquery')

const sleep = (ms) =>
  new Promise((resolve) => setTimeout(resolve, ms))

$('video').get(0).addEventListener('loadeddata', async () => {
  await sleep(300)
  $('.loader').addClass('finished')
  await sleep(1500)
  $('.loader').remove()
  $('.video-container').addClass('shrink')
  $('.logo').addClass('active')
  await sleep(500)
  $('.ge-container .color-block').addClass('active')
  $('.header').addClass('active')
}, false)

$('.right-nav').click(async () => {
  $('.right-nav a').removeClass('active')
  $('.right-nav a:eq(1)').addClass('active')
  $('.ge-container').addClass('wipe-off')
  await sleep(1000)
  $('.v-container').addClass('active')
  await sleep(500)
  $('.v-container .color-block').addClass('active')
})