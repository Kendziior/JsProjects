// Projekt 5 - Zadanie dla Ciebie 
// Sprawdź czy wpisane w input hasło pasuje do któegoś z hasel w tablicy. Jeśli tak wyświetl wiadomość w <div>
//wielkość liter nie ma znaczenia (wykorzystaj metodę .toUpperCase lub .toLowerCase - pamiętaj, że metody te działają na pojedyńczym elemencie typu string)

// const input = document.querySelector("input");
// const passwords = ['jedEN', 'DwA'];
// const messages = ["super", "działa!"]
// const div = document.querySelector('div');

// passwords.forEach((password, index) => {
//     passwords[index] = password.toLowerCase();
// })

// const showMessage = (e) => {
//     div.textContent = " "
//     //tutaj rozwiązanie
//     // PS. nie skupiaj się na niczym innym w zadaniu niż porównanie i wyświetlenie ( nie rób czyszczenia inputa itp. nie są potrzebne, chyba że masz ochotę)
//     const input = e.target.value.toLowerCase();
//     passwords.forEach((password, index) => {
//         if (password === input) {
//             div.textContent = messages[index];
//         }
//     })


// }

// input.addEventListener("input", showMessage)



//Metoda MAP


const input = document.querySelector("input");
const passwords = ['jedEN', 'DwA'];
const messages = ["super", "działa!"]
const div = document.querySelector('div');

const lowerPasswords = passwords.map(password => password.toLowerCase()); // Uzycie klamer wymaga uzycia return 

const showMessage = (e) => {
    div.textContent = "";
    const input = e.target.value.toLowerCase();

    for (let i = 0; i < lowerPasswords.length; i++) {
        if (lowerPasswords[i] === input) {
            div.textContent = messages[i];
        }
    }
}

input.addEventListener('input', showMessage)