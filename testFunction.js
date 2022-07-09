function myFunction(myString, myLetter) {
    return (myString.split(myLetter)).length - 1;
}

console.log(myFunction("people", "p"))