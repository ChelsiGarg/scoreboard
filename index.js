let homeCount = 0
let guestCount = 0
let homeEl = document.getElementById("home")
let guestEl = document.getElementById("guest")

function incrementOneHome(){
    homeCount++;
    homeEl.textContent = homeCount;
}

function incrementTwoHome(){
    homeCount+=2;
    homeEl.textContent = homeCount;
}

function incrementThreeHome(){
    homeCount+=3;
    homeEl.textContent = homeCount;
}

function incrementOneGuest(){
    guestCount++;
    guestEl.textContent = guestCount;
}

function incrementTwoGuest(){
    guestCount+=2;
    guestEl.textContent = guestCount;
}

function incrementThreeGuest(){
    guestCount+=3;
    guestEl.textContent = guestCount;
}