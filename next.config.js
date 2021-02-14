const withTM = require('next-transpile-modules')([
  '@fullcalendar/core','@fullcalendar/common','@fullcalendar/daygrid','@fullcalendar/timegrid'
])



module.exports = withTM({
  images: {
    domains: ['api.mypigeon.gr','localhost'],
  },
})
