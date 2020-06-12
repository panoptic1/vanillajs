//==========HOW TO REPLACE A STRING=================
//You can use the string.replace() method to look for content in a string and replace it. 
    //basic string replacement:

    var chips = `I love Old Dutch potato chips!`;
    var vicki = chips.replace(`Old Dutch`, `Miss Vicki's`);
    console.log(vicki);
    //=> returns "I love Miss Vicki's potato chips!"

    //global matches:

    var moreChips = `Old Dutch is hands down the best manufacturer of potato chips.`

    //only replaces the first instantiation of the words 'potato chips':
    var noChips = moreChips.replace(`potato chips`, `weapons-grade trans-fats`)
    console.log(noChips);

    var moreChips = `Old Dutch is hands down the best manufacturer of potato chips. 
    I'll tell you one thing: if their potato chips are one day the death of me, then so be it.
    That's how much I love their potato chips. Eat Old Dutch Potato Chips. Just know that it's best to eat
    potato chips in non-lethal doses.`

    //replaces ALL instances of the string
    var noChips = moreChips.replace(new RegExp(`potato chips`, `g`), `weapons-grade trans-fats`)
    console.log(noChips);




