const sum = 1 + 1;

const tooMuchData = synchronousFetch("http://genome.example.com/..."); // Line 1
const lis = document.querySelectorAll("li");
console.log(tooMuchData);

function getData(){
    console.log("2. Returning instantly available data.");
    return [{author: "Ta-Nehisi Coates"}, {author: "Cathy Park Hong"}];  
}

function main(){
    console.log("1. Starting Script");
    const data = getData();
    console.log(`3. Data is currentky ${JSON.stringify(data)}`);
    console.log("4. Script Ended")
}
main();

setTimeout(() => console.log('Hello World'), 2000);