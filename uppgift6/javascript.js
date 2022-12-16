calc = function (event) {
    if (event.key === "Enter") {
        let input = document.querySelector('input').value;
        let resultDiv = document.querySelector('#resultat');
        if (input == (input/1)) {
            resultDiv.innerHTML = Math.pow(input, 2);
        } else {
            resultDiv.innerHTML = "Inmatning är inte ett tal. Vänligen försök igen."
        }
    }
}