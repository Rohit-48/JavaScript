const coding = ["java", "Python", "cpp", "ruby", "c"]   

// coding.forEach( function (item){
//     // console.log(item);
    
// })

// coding.forEach( (item) => {
//     // console.log(item);
    
// })


// function printIn(item) {
//     console.log(item);
    
// }

// coding.forEach(printIn)

// coding.forEach((item, index, arr) => {
//     console.log(item, index, arr);
    
// })


const myCoding = [
    {
        LanguageName: "JavaScript",
        LanguageFileName: "js"
    },
    {
        LanguageName: "Python",
        LanguageFileName: "py"
    },
    {
        LanguageName: "java",
        LanguageFileName: "java"
    },

]

myCoding.forEach( (item) => {
    console.log(item.LanguageFileName);
    console.log(item.LanguageName);

    
})