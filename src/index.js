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
  $('.color-block').addClass('active')
  $('.header').addClass('active')
}, false)