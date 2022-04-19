const eloReplacerString = "(?)"
const refreshInterval = 50

function clearEloFromElementArray(elementArray){
    for (var i=0; i<elementArray.length; i++){
        elementArray[i].innerHTML=eloReplacerString;
    }
}

function hideEloNextToNicknames(infinite = false){
    var elementArray = document.getElementsByClassName("user-tagline-popover-rating");
    if (elementArray.length > 0){
        clearEloFromElementArray(elementArray);
        if (infinite){
            setTimeout(function(){hideEloNextToNicknames(infinite)}, refreshInterval);
        }
    }
    else{
        setTimeout(function(){hideEloNextToNicknames(infinite)}, refreshInterval);
    }
}

function hideEloNextToNicknamesInGame(){
    var elementArray = document.getElementsByClassName("user-tagline-rating");
    // it is not initialized when length == 1
    if (elementArray.length > 1){
        clearEloFromElementArray(elementArray);
    }
    else{
        setTimeout(hideEloNextToNicknamesInGame, refreshInterval);
    }
}

function hideHighestElo(){
    var elementArray = document.getElementsByClassName("stat-text-data-highest");
    if (elementArray.length > 0){
        clearEloFromElementArray(elementArray);
    }
    else{
        setTimeout(hideHighestElo, refreshInterval);
    }
}

function hideAfterGameElo(){
    var elementArray = document.getElementsByClassName("game-over-rating-component");
    if (elementArray.length > 0){
        elementArray[0].remove();
    }
    else{
        setTimeout(hideAfterGameElo, refreshInterval);
    }

}

function run(){
    if (document.URL.includes("chess.com/home")){
        hideEloNextToNicknames();
        hideHighestElo();
        return
    }

    if (document.URL.includes("chess.com/member")){
        hideEloNextToNicknames(true);
        hideHighestElo();
        return
    }

    if (document.URL.includes("chess.com/game/live")){
        hideEloNextToNicknamesInGame();
        hideAfterGameElo();
        return
    }
}

run();
