var button = document.getElementById("check-button");

button.addEventListener('click', checkButtonClicked);

function checkButtonClicked() {
    var dobField = document.getElementById('date-input');
    var number = parseInt(document.getElementById('lucky-input').value);

    const puredob = dobField.value.replace(new RegExp('-', 'g'), '');
    let sum = 0;
    puredob.split('').map((s) => {
        sum += parseInt(s);
    });

    let result = "";
    if (sum == 0) {
        result = "Input date...";
    } else if (number <= 0) {
        result = "number must be greater than 0";
    } else {
        if (sum % number == 0) {
            result = "Yeahhh lucky number!! ✌️✌️";
        } else {
            result = "No lucky number!! :(";
        }
    }

    const resultField = document.getElementById('result');
    resultField.textContent = result;

    console.log("Check clicked " + dobField.value + " " + puredob + "   " + sum);
}

// Input : Date, lucky number
// Op: luck number or not

// Ip edge cases:
// no date, luckynumber=0

// algo
// input date and sum
// validate date and sum field input if no show alert
// date numbers sum
// divide sum by number to check modulous
// show yes or now