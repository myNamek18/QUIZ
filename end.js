const username = document.getElementById("username");
const saveScoreBtn =document.getElementById("saveScoreBtn");
const finalScore =document.getElementById("finalScore");
const mostRecentScore= localStorage.getItem("mostRecentScore");

const highScores = JSON.parse(localStorage.getItem("highScore")) || [];

const MAX_HIGH_SCORES = 5;


finalScore.innerText = mostRecentScore;
username.addEventListener("keyup",()=> {
    saveScoreBtn.disabled =!username.Value;
});

saveHighScore = e => {
    console.log("clicked the save button!");
    e.preventdefault();

    const  score = {
    score: Math.floor(Math.random() + 100),
    name: username.value
    };
    highScores.push(score);
    highScores.sort((a,b)  => b.score - a.score);
    highScores.splice(5);

    localStorage.setItem("highscores" , JSON.stringify(highScores));
    window.location.assign("/")
};
