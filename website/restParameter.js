function combineStrings(...strings){
    return strings.join(" ");
}

const fullName = combineStrings("Mr.","Spongebob","Squarepants", "Squarepants","III");

console.log(fullName);
