// Pulling Apart a Nested Object: Imagine you have a list inside another list that shows what a computer programmer knows,
// like coding languages, tools, and software frameworks. Find a way to get three specific skills from this list and show them.
var programmerSkills = {
    coding_lang: {
        lang1: "C#",
        lang2: "HTML",
        lang3: "Java",
        lang4: "Typescript"
    },
    tools: {
        tool1: "VS code",
        tool2: "GitHub",
        tool3: "IJ"
    },
    frameworks: {
        frame1: "react",
        frame2: "angular",
        frame3: "node"
    }
};
console.log(programmerSkills.coding_lang.lang2);
console.log(programmerSkills.tools.tool3);
console.log(programmerSkills.frameworks.frame1);
//ANother method to do :
// let programmerSkills = {
//     coding_lang : [ "C#", "HTML", "Java", "Typescript"],
//     tools : ["VS code", "GitHub", "IJ"],
//     frameworks : ["react", "angular", "node"]
// }
// let {coding_lang, tools, frameworks} = programmerSkills // destructuring of object
// console.log(coding_lang[0])
// console.log(tools[1])
// console.log(frameworks)
