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

function run(){
    if (document.URL.includes("chess.com/home")){
        if (document.getElementsByClassName("user-tagline-popover-rating").length > 1){
            hideEloNextToNicknames();
            hideHighestElo();
        }
        else{
            setTimeout(() => {
                run();
            }, 100);
        }
        return
    }

    if (document.URL.includes("chess.com/member")){
        if (document.getElementsByClassName("user-tagline-popover-rating").length > 1){
            hideEloNextToNicknames();
            hideHighestElo();
        }
        else{
            setTimeout(() => {
                run();
            }, 100);
        }
        return
    }
}

run();
