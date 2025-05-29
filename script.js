

let titletext = document.querySelector(".title>h2>span:nth-child(2)")


const words = [
    "Full-stack developer",
    "React expert",
    "Front-end engineer",
    "CSS wizard",
    "Performance optimizer",
    "JavaScript developer",
    "API integrator"
];




let arrofwords = []



words.forEach(sentences => {
    listofwords = []
    for (let index = 0; index < sentences.length; index++) {
        const element = sentences;
        listofwords.push(element.slice(0, index + 1))

    }
    for (let index = 0; index < sentences.length; index++) {
        const element = sentences;
        listofwords.push(element.slice(0, -(index + 1)))

    }
    arrofwords.push(listofwords)
    listofwords = []
});


// Function to create a delay using a Promise
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function writetxt() {
    for (let index = 0; index < arrofwords.length; index++) {
        const rootelement = arrofwords[index];
        for (let index = 0; index < rootelement.length; index++) {
            const byelement = rootelement[index];
            titletext.innerHTML = byelement
            await delay(120)
        }
    }
    writetxt()
}

// Call the async function to execute the loop
writetxt();



