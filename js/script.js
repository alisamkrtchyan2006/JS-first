// Գրել ֆունկցիա որը ստանում է թիվ (N) և վերադարձնում է այդ թվի քանակով տառեր, թվեր նաև սիմվոլներ (password)


function generatePassword (N) {
    let characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+[]{}|;:,.<>?"
    let password = ""

    for (let i = 0; i < N; i++) {
        let randomCharacter = Math.floor(Math.random() * characters.length)
        password += characters[randomCharacter]
    }
    return password
}
console.log(generatePassword(17))


// Bynary serach ----






