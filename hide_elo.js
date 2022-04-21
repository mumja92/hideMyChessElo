const eloReplacerString = "(?)"
const refreshInterval = 50

function hideEloByClassTag(tag, infinite=false, minValue=0){
    var elementArray = document.getElementsByClassName(tag);
    if (elementArray.length > minValue){
        for (var i=0; i<elementArray.length; i++){
            elementArray[i].innerHTML=eloReplacerString;
        }
        if (infinite){
            setTimeout(function(){hideEloByClassTag(tag, infinite, minValue)}, refreshInterval);
        }
    }
    else{
        setTimeout(function(){hideEloByClassTag(tag, infinite, minValue)}, refreshInterval);
    }
}

function removeElementByClassTag(tag, infinite=false){
    var elementArray = document.getElementsByClassName(tag);
    if (elementArray.length > 0){
        while (elementArray.length > 0){
            elementArray[0].remove();
        }
        if (infinite){
            setTimeout(function(){removeElementByClassTag(tag, infinite)}, refreshInterval);
        }
    }
    else{
        setTimeout(function(){removeElementByClassTag(tag, infinite)}, refreshInterval);
    }
}

function hideEloMain()
{
    hideEloByClassTag("user-tagline-popover-rating", infinite=true);
    hideEloByClassTag("stat-text-data-highest", infinite=true);
    hideEloByClassTag("stat-section-user-rating", infinite=true);
    hideEloByClassTag("stat-text-data-wld-item", infinite=true);
    removeElementByClassTag("stat-section-chart", infinite=true);
}

if (document.URL.includes("chess.com/home")){
    hideEloMain();
}

if (document.URL.includes("chess.com/member")){
    hideEloMain();
}

if (document.URL.includes("chess.com/game")){
    hideEloByClassTag("user-tagline-rating", infinite=false, minValue=1);
    removeElementByClassTag("game-over-rating-component");
    // user-rating is showed in chat
    // page changes from .com/play to .com/game when you reload page during game
    hideEloByClassTag("user-rating", infinite=false);
}

if (document.URL.includes("chess.com/play")){
    hideEloByClassTag("user-tagline-rating", infinite=true);
    hideEloByClassTag("user-rating", infinite=false);
}

if (document.URL.includes("chess.com/games/archive")){
    hideEloByClassTag("user-tagline-rating");
}
