function sleep(ms){
    return new Promise(resolve => setTimeout(resolve, ms));
}

function hideEloNextToNicknames(){
    var userTaglinePopoverRatingArray = document.getElementsByClassName("user-tagline-popover-rating");
    for (var i=0; i<userTaglinePopoverRatingArray.length; i++){
        userTaglinePopoverRatingArray[i].innerHTML='-';
    }
}


function hideHighestElo(){
    var statTextDataHighestArray = document.getElementsByClassName("stat-text-data-highest");
    for (var i=0; i<statTextDataHighestArray.length; i++){
        statTextDataHighestArray[i].innerHTML='-';
    }
}

setTimeout(() => {
    hideEloNextToNicknames();
    hideHighestElo();
}, 1000);
