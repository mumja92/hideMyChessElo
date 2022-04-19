// Elo showed next to nicknames
var userTaglinePopoverRatingArray = document.getElementsByClassName("user-tagline-popover-rating");
for (var i=0; i<userTaglinePopoverRatingArray.length; i++){
    userTaglinePopoverRatingArray[i].innerHTML='';
}

// User highest rating
var statTextDataHighestArray = document.getElementsByClassName("stat-text-data-highest");
for (var i=0; i<statTextDataHighestArray.length; i++){
    statTextDataHighestArray[i].innerHTML='-';
}
