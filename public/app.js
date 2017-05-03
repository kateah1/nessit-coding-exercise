'use strict'

$(document).ready(function () {
  if (window.matchMedia) {
    var mq = window.matchMedia('(max-width: 767px)')
    mq.addListener(WidthChange)
    WidthChange(mq)
  }

  function WidthChange (mq) {
    if (mq.matches) {
      $('.nav').hide()
      $('.mobile-nav').show()
    } else {
      $('.mobile-nav').hide()
      $('.nav').show()
    }
  }

  $('#clickable').click(function () {
    $('.sidebar').toggleClass('overlay visible')
  })

  $('.sidebar').click(function () {
    $('.sidebar').removeClass('overlay visible')
  })

})
