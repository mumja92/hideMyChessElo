const eloReplacerString = "(?)"

function hideEloNextToNicknames(){
    var userTaglinePopoverRatingArray = document.getElementsByClassName("user-tagline-popover-rating");
    for (var i=0; i<userTaglinePopoverRatingArray.length; i++){
        userTaglinePopoverRatingArray[i].innerHTML=eloReplacerString;
    }
}

function hideEloNextToNicknamesInGame(){
    var elementArray = document.getElementsByClassName("user-tagline-rating");
    for (var i=0; i<elementArray.length; i++){
        elementArray[i].innerHTML=eloReplacerString;
    }
}

function hideHighestElo(){
    var statTextDataHighestArray = document.getElementsByClassName("stat-text-data-highest");
    for (var i=0; i<statTextDataHighestArray.length; i++){
        statTextDataHighestArray[i].innerHTML=eloReplacerString;
    }
}

function hideAfterGameElo(){
    document.getElementsByClassName("game-over-rating-component")[0].remove();
}

function run(){
    if (document.URL.includes("chess.com/home")){
        if (document.getElementsByClassName("user-tagline-popover-rating").length > 0){
            hideEloNextToNicknames();
            hideHighestElo();
        }
        else{
            setTimeout(run, 100);
        }
        return
    }

    if (document.URL.includes("chess.com/member")){
        if (document.getElementsByClassName("user-tagline-popover-rating").length > 0){
            hideEloNextToNicknames();
            hideHighestElo();
        }
        else{
            setTimeout(run, 100);
        }
        return
    }

    if (document.URL.includes("chess.com/game/live")){
        if (document.getElementsByClassName("game-over-rating-component").length > 0){
            hideAfterGameElo();
            hideEloNextToNicknamesInGame();
        }
        else{
            setTimeout(run, 100);
        }
        return
    }
}

run();
