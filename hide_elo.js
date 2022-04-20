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
    hideEloByClassTag("user-tagline-popover-rating", invalidCount=0, infinite=true);
    hideEloByClassTag("stat-text-data-highest", invalidCount=0, infinite=true);
    hideEloByClassTag("stat-section-user-rating", invalidCount=0, infinite=true);
    hideEloByClassTag("stat-text-data-wld-item", invalidCount=0, infinite=true);
    removeElementByClassTag("stat-section-chart", infinite=true);
}

if (document.URL.includes("chess.com/home")){
    hideEloMain();
}

if (document.URL.includes("chess.com/member")){
    hideEloMain();
}

if (document.URL.includes("chess.com/game/live")){
    hideEloByClassTag("user-tagline-rating", invalidCount=1);
    removeElementByClassTag("game-over-rating-component");
}

if (document.URL.includes("chess.com/games/archive")){
    hideEloByClassTag("user-tagline-rating");
}
