let home = 0
let away = 0

function increaseHomeScoreByOne() {
  home++
  drawHomeScore()
}

function increaseHomeScoreByThree() {
  home += 3
  drawHomeScore()
}

function increaseAwayScoreByThree() {
  away++
  drawAwayScore()
}

function increaseAwayScoreByThree() {
  away += 3
  drawAwayScore()
}

function increaseHomeScore(points) {
  home += points
  if (home < 0) {
    home = 0
    return
  }
  drawHomeScore()
}

function increaseAwayScore(points) {
  away += points
  if (away < 0) {
    return
  }
  drawAwayScore()
}

function resetScores() {
  home = 0
  away = 0
  drawScores()
}

function drawScores() {
  drawHomeScore()
  drawAwayScore()
}

function drawHomeScore() {
  const homeScoreElem = document.getElementById('homeScore')
  homeScoreElem.innerText = home.toString()
}

function drawAwayScore() {
  const awayScoreElem = document.getElementById('awayScore')
  awayScoreElem.innerText = away.toString()
}