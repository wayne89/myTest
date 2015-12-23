var rotator = require('./rotator')

var tests = [
  [0, 0, +0]
, [0, 90, -90]
, [0, 180, -180]
, [0, 270, +90]
, [90, 0, +90]
, [90, 90, +0]
, [90, 180, -90]
, [90, 270, +180]
, [180, 0, +180]
, [180, 90, +90]
, [180, 180, +0]
, [180, 270, -90]
, [270, 0, -90]
, [270, 90, -180]
, [270, 180, +90]
, [270, 270, +0]
, [360, 0, +0]
, [360, 90, -90]
, [360, 180, -180]
, [360, 270, +90]
, [-90, 0, -90]
, [-90, 90, -180]
, [-90, 180, +90]
, [-90, 270, 0]
, [-180, 0, +180]
, [-180, 90, +90]
, [-180, 180, +0]
, [-180, 270, -90]
, [-270, 0, +90]
, [-270, 90, 0]
, [-270, 180, -90]
, [-270, 270, +180]
, [720, 0, +0]
, [720, 90, -90]
, [720, 180, -180]
, [720, 270, +90]
, [450, 0, +90]
, [450, 90, +0]
, [450, 180, -90]
, [450, 270, +180]
, [540, 0, +180]
, [540, 90, +90]
, [540, 180, +0]
, [540, 270, -90]
, [630, 0, -90]
, [630, 90, -180]
, [630, 180, +90]
, [630, 270, +0]
]

tests.forEach(function(values) {
  var msg = values[0] + ' -> ' + values[1] + ' should be ' + values[2]

  if (rotator(values[0], values[1]) === values[2]) {
    console.log('pass: ' + msg)
  }
  else {
    console.error('FAIL: ' + msg)
  }
})
