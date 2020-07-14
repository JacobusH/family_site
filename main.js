
// This structure is called JSON (javascript object notation)
vanHaasters = {
    flowers: {
        parents: {
            mom: "Rose",
            dad: "Melvyn"
        },
        children: [
            "Will", // index 0
            "Wes", // index 1
            "Jeanne" // index 2
        ]
    }
}


function buttonClicky() {
    vanHaasters.flowers.children.forEach(myFunction)
}

function myFunction(item, index) {
    document.getElementById("test-div").innerHTML  += index + ":" + item + "<br>";
}


