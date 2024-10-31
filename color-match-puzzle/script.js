let selectedTile = null;
let colorblindMode = false;

function checkMatch(tile) {
    if (!selectedTile) {
        selectedTile = tile;
        tile.style.border = "2px solid black";
    } else {
        if (isMatch(selectedTile, tile)) {
            alert("Matched!");
            tile.style.visibility = "hidden";
            selectedTile.style.visibility = "hidden";
        } else {
            alert("Not a match!");
        }
        selectedTile.style.border = "none";
        selectedTile = null;
    }
}

function isMatch(tile1, tile2) {
    if (colorblindMode) {
        return tile1.className === tile2.className;
    } else {
        return tile1.style.backgroundColor === tile2.style.backgroundColor;
    }
}

function toggleColorblindMode() {
    colorblindMode = !colorblindMode;
    const tiles = document.querySelectorAll(".colorTile");

    tiles.forEach(tile => {
        if (colorblindMode) {
            // Switch to patterns for colorblind mode
            if (tile.style.backgroundColor === "rgb(255, 0, 0)") tile.classList.add("patternRed");
            else if (tile.style.backgroundColor === "rgb(0, 255, 0)") tile.classList.add("patternGreen");
            else if (tile.style.backgroundColor === "rgb(0, 0, 255)") tile.classList.add("patternBlue");
            tile.style.backgroundColor = "transparent"; // Hide original color
        } else {
            // Revert to colors
            tile.classList.remove("patternRed", "patternGreen", "patternBlue");
            tile.style.backgroundColor = tile.dataset.originalColor;
        }
    });
}
