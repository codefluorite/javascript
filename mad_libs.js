function wordBlanks(myNoun, myAdjective, myVerb, myAdverb) {
    // Code below this line;
    var result = "";
    result += "The " + " " + myAdjective + " " + myNoun + " " + myVerb + " across the field " + myAdverb + ".";
    // Your code above this line
    return result;
}

// Change the words here to test your function
console.log(wordBlanks("flamingo", "sweet", "ran", "quickly"));
console.log(wordBlanks("flamingo", "angry", "stomped", "quickly"));