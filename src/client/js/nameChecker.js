export function checkForName(formText) {
    console.log("::: Running checkForName :::", formText);
    let names = [
        "Picard",
        "Janeway",
        "Kirk",
        "Archer",
        "Georgiou"
    ]
    names.push(formText);
    if(names.includes(formText)) {
        alert("Welcome, Captain!")
    }
    console.log(names);
}


