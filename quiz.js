
function enterQuiz()
{
    let answerTotal = 0;

    let answerText = "";

    let questionsAnswered = 0;

    let answers = document.querySelectorAll("input[type='radio']:checked");

    for (let index = 0; index < answers.length; index++) {
        if (parseInt(answers[index].value) > 0)
        {
            questionsAnswered++;
            answerTotal += parseInt(answers[index].value);
        }
    }

    let max = questionsAnswered * 10;

    if (questionsAnswered === 0)
    {
        answerText = "Du svarade inte på nått!"
    } else if (answerTotal <= (max / 3)) {
        answerText = "Du verkar pretty sad, gå o hämta din favorit filt o chilla lite!"
    } else if (answerTotal >= (2 * (max / 3))) {
        answerText = "Du har det fan pretty good, tuffa på grabben"
    } else {
        answerText = "Du är ganska normal, men alla behöver lite kärlek <3!"
    }

    document.querySelector(".result-text").innerHTML = answerText;

    document.querySelector(".form").classList.toggle("invisible");
    document.querySelector(".result").classList.toggle("invisible");
}

function reset()
{
    document.querySelector(".form").classList.toggle("invisible");
    document.querySelector(".result").classList.toggle("invisible");

    document.querySelector(".form").reset();
}
