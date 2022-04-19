const eloReplacerString = "(?)"
const refreshInterval = 50

function hideEloByClassTag(tag, invalidCount=0, infinite=false){
    var elementArray = document.getElementsByClassName(tag);
    if (elementArray.length > invalidCount){
        for (var i=0; i<elementArray.length; i++){
            elementArray[i].innerHTML=eloReplacerString;
        }
        if (infinite){
            setTimeout(function(){hideEloByClassTag(tag, invalidCount, infinite)}, refreshInterval);
        }
    }
    else{
        setTimeout(function(){hideEloByClassTag(tag, invalidCount, infinite)}, refreshInterval);
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
        hideEloByClassTag("user-tagline-popover-rating");
        hideEloByClassTag("stat-text-data-highest");
        return
    }

    if (document.URL.includes("chess.com/member")){
        hideEloByClassTag("user-tagline-popover-rating", invalidCount=0, infinite=true);
        hideEloByClassTag("stat-text-data-highest");
        return
    }

    if (document.URL.includes("chess.com/game/live")){
        hideEloByClassTag("user-tagline-rating", invalidCount=1);
        hideAfterGameElo();
        return
    }
    if (document.URL.includes("chess.com/games/archive")){
        hideEloByClassTag("user-tagline-rating");
        return
    }
}

run();
