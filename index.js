function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.querySelector('#nested .target')
}

function increaseRankBy(n) {
  var rl = document.getElementById('app').querySelectorAll('ul.ranked-list li')
  for (let i = 0; i < rl.length; i++) {
    rl[i].innerHTML = parseInt(rl[i], 10) + n
  } return rl
}
