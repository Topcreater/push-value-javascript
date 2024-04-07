document.addEventListener("DOMContentLoaded", function () {
    // Clear button functionality
    document.getElementById("clearBtn").addEventListener("click", function () {
        document.querySelector("#original .text").value = ""; // Clear input value
    });

    document.getElementById("button1").addEventListener("click", function () {
        alert('This is a simple alert');
    });

    document.getElementById("button2").addEventListener("click", function () {
        var inputText = document.querySelector("#original .text").value;
        if (inputText.trim() === "") {
            alert("Please fill the input.");
        } else {
            document.getElementById("output").textContent = 'Your Name: ' + inputText;
        }
    });

    document.getElementById("button3").addEventListener("click", function () {
        var cities = document.querySelectorAll("#originalCities p");
        var cityList = [];
        cities.forEach(function (city) {
            cityList.push(city.textContent);
        });
        document.getElementById("output").textContent = 'Cities:\n' + cityList.join('\n');
    });

    document.getElementById("button4").addEventListener("click", function () {
        var newCity = document.querySelector("#original .text").value;
        if (newCity.trim() === "") {
            alert("Please fill the input.");
        } else {
            var cityListContainer = document.getElementById("originalCities");
            var newCityElement = document.createElement("p");
            newCityElement.textContent = cityListContainer.children.length + 1 + ") " + newCity; // Add numbering
            cityListContainer.appendChild(newCityElement);
        }
    });

    document.getElementById("button6").addEventListener("click", function () {
        var inputText = document.querySelector("#original .text").value;
        document.getElementById("output").textContent = inputText.toLowerCase();
    });

    document.getElementById("button7").addEventListener("click", function () {
        var inputText = document.querySelector("#original .text").value;
        document.getElementById("output").textContent = inputText.toUpperCase();
    });

    document.getElementById("button8").addEventListener("click", function () {
        var inputText = document.querySelector("#original .text").value;
        document.getElementById("output").textContent = inputText.charAt(0).toUpperCase() + inputText.slice(1);
    });

    document.getElementById("button5").addEventListener("click", function () {
        var inputText = document.querySelector("#original .text").value;
        var formattedText = inputText.replace(/\b\w/g, function (char) {
            return char.toUpperCase();
        });
        document.getElementById("output").textContent = formattedText;
    });

    document.getElementById("button9").addEventListener("click", function () {
        var inputText = document.querySelector("#original .text").value;
        var wordToFind = prompt("Enter word to find:");
        if (wordToFind !== null && wordToFind.trim() !== "") {
            var regex = new RegExp(wordToFind, "gi");
            var replacedText = inputText.replace(regex, "<mark>$&</mark>");
            document.getElementById("output").innerHTML = replacedText;
        }
    });

    document.getElementById("button10").addEventListener("click", function () {
        var inputText = document.querySelector("#original .text").value;
        var wordToReplace = prompt("Enter word to replace:");
        var replacement = prompt("Enter replacement word:");
        if (wordToReplace !== null && wordToReplace.trim() !== "" && replacement !== null) {
            var regex = new RegExp(wordToReplace, "gi");
            var replacedText = inputText.replace(regex, replacement);
            document.getElementById("output").textContent = replacedText;
        }
    });
});
