// NOTE - Create data
let home = 0;
let away = 0;


// NOTE - Modify data - named the function, added points, logged new value to consoled, invoked the draw function
function increaseHomeScoreByOne() {
  home++;
  console.log(home)
  drawHomeScore()
}

function increaseHomeScoreByThree() {
  home += 3;
  console.log(home)
  drawHomeScore()
}

function decreaseHomeScoreByOne() {
  home -= 1;
  console.log(home)
  drawHomeScore()
}

function increaseAwayScoreByOne() {
  away++;
  console.log(away)
  drawAwayScore()
}

function increaseAwayScoreByThree() {
  away += 3;
  console.log(away)
  drawAwayScore()
}

function decreaseAwayScoreByOne() {
  away -= 1;
  console.log(away)
  drawAwayScore()
}

// NOTE - Ensure scores are always at least 0 - resets score to zero if it gets below 0, then stops running and draws the score.
function zeroHomeScore() {
  if (home < 0) {
    home = 0
    return
  }
  drawHomeScore
}

function zeroAwayScore() {
  if (away < 0) {
    away = 0
    return
  }
  drawAwayScore
}

// NOTE - Put data on page - named the function, grabbed the score within html (0) and logged it, then changed the score to the new value
function drawHomeScore() {
  let homeElement = document.getElementById("homeScore")
  console.log(homeElement.innerText)
  homeElement.innerText = home
}

function drawAwayScore() {
  let awayElement = document.getElementById("awayScore")
  console.log(awayElement.innerText)
  awayElement.innerText = away
}


// NOTE - Reset data - reestablished the original 0 scores, then runs the drawScores function to change them to the page
function resetScores() {
  home = 0
  away = 0
  // console.log(home, away)
  drawScores()
}

function drawScores() {
  drawHomeScore()
  drawAwayScore()
}