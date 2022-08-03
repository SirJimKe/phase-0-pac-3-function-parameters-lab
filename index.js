function introduction(name) {
    console.log(`Hi, my name is ${name}.'`);
}
introduction("Jimmy");

function introductionWithLanguage(name, language) {
    console.log(`Hi, my name is ${name} and I am learning to program in ${language}`);
}
introductionWithLanguage("Jimmy", "HTML");

function introductionWithLanguageOptional(name, language = "JavaScript") {
    console.log(`Hi, my name is ${name} and I am learning to program in ${language}`);
}
introductionWithLanguageOptional("Jimmy");

