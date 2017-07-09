const $ = require('jquery')

const sleep = (ms) =>
  new Promise((resolve) => setTimeout(resolve, ms))

$(async () => {
  await sleep(500)
  $('.loader').addClass('finished')
  await sleep(1500)
  $('.loader').remove()
  $('.video-container').addClass('shrink')
  $('.color-block').addClass('active')
})