let lunches = [];

function addLunchToEnd(arr, lunch) {
    arr.push(lunch);
    console.log(`${lunch} added to the end of the lunch menu.`);
    return arr;
}

function addLunchToStart(arr, lunch) {
    arr.unshift(lunch);
    console.log(`${lunch} added to the start of the lunch menu.`);
    return arr;
}

function removeLastLunch(arr) {
    if (arr.length === 0) {
        console.log("No lunches to remove.");
    } else {
        let removed = arr.pop();
        console.log(`${removed} removed from the end of the lunch menu.`);
    }

    return arr;
}

function removeFirstLunch(arr) {
    if (arr.length === 0) {
        console.log("No lunches to remove.");
    } else {
        let removed = arr.shift();
        console.log(`${removed} removed from the start of the lunch menu.`);
    }

    return arr;
}

function getRandomLunch(arr) {
    if (arr.length === 0) {
        console.log("No lunches available.");
    } else {
        let randomIndex = Math.floor(Math.random() * arr.length);
        console.log(`Randomly selected lunch: ${arr[randomIndex]}`);
    }
}

function showLunchMenu(arr) {
    if (arr.length === 0) {
        console.log("The menu is empty.");
    } else {
        console.log(`Menu items: ${arr.join(", ")}`);
    }
}
