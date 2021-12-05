//Generate Random Number
const random = Math.floor(Math.random() * 19) + 1;

//counter
let count = 0;

//define UI element
const input = document.getElementById('in-put');
const submit = document.getElementsByClassName('submit')[0];
const result = document.getElementsByClassName('result')[0];
const againBtn = document.getElementsByClassName('again-btn')[0];

//event listner
window.addEventListener('DOMContentLoaded', () => {
    input.focus();
});

againBtn.addEventListener('click', () => {
    location.reload();
})

input.addEventListener('keyup', () => {
    const value = input.value;
    const regex = /^([1-9])$|^(([1])([0-9]))$|^(([2])([0]))$/;

    if (regex.test(value)) {
        input.value = value;
    } else {
        input.value = null;
    }
});

submit.addEventListener('click', (e) => {
    const entered = document.getElementsByClassName('result-number')[0];
    const value = input.value;
    if (value !== "") {
        entered.innerHTML = `Your input = ${value}`;
        checkResult(value, count);
        count += 1;
    } else {
        entered.innerHTML = `Entered Nothing!`;
    }
    document.getElementById('guesses-left').innerHTML = `You have ${5 - count} guesses left`;
    input.value = null;
    input.focus();
    e.preventDefault();
});

//Define Fuction
const checkResult = (value) => {
    if (value == random) {
        result.innerHTML = " Result = Perfect!";
        win();

    } else if (value > random) {
        result.innerHTML = "Result = Too high!";
        tooHigh(value);

    } else if (value < random) {
        result.innerHTML = "Result = Too low!"
        tooLow(value);
    }
}

const tooHigh = (value) => {
    if (count < 5) {
        const countBox = document.getElementById('too-high').getElementsByTagName('span');
        countBox[count].innerHTML = `${value}`;
        if (count >= 4) {
            lost();
        }
    }
}

const tooLow = (value) => {
    if (count < 5) {
        const countBox = document.getElementById('too-low').getElementsByTagName('span');
        countBox[count].innerHTML = `${value}`;
        if (count >= 4) {
            lost();
        }
    }
}


const win = () => {
    let chance = "";

    switch (count) {
        case 0:
            chance = "1st"; break;
        case 1:
            chance = "2nd"; break;
        case 2:
            chance = "3rd"; break;
        case 3:
            chance = "4th"; break;
        case 4:
            chance = "5th"; break;
    }
    const modal = document.getElementById('modal');
    const imageWrapper = document.getElementsByClassName('win-image')[0];
    imageWrapper.innerHTML = `<img src="image/success.png" alt="win">`;
    const winWrapper = document.getElementsByClassName('win-btn')[0];
    winWrapper.innerHTML = `<h2>You Win!</h2>`;
    const winMsg = document.getElementsByClassName('win-msg')[0];
    winMsg.innerHTML = `You have win at ${chance} chance!`;

    setTimeout(() => {
        modal.style.visibility = "visible";
    }, 500);

}

const lost = () => {

    const modal = document.getElementById('modal');
    const imageWrapper = document.getElementsByClassName('win-image')[0];
    imageWrapper.innerHTML = `<img src="image/lost.png" alt="win">`;
    const lostWrapper = document.getElementsByClassName('win-btn')[0];
    lostWrapper.innerHTML = `<h2>You lost!</h2>`;
    const lostMsg = document.getElementsByClassName('win-msg')[0];
    lostMsg.innerHTML = `Your guesses don't match!`;

    setTimeout(() => {
        modal.style.visibility = "visible";

    }, 500);
}

const inputFocus = () => {
    input.focus();
}

