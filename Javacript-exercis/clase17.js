//social media porfile

// 1. User information
const userNamne = "seven"
const fullName = "Diego"
const age = 17
const isStudent = true

// 2. Address
const address = {
    street: "123 main street",
    city: "Techville",
    state: "Codingland",
    zipCode: 54321
}

// 3. Hobbies
const hobbies = ["Coding", "Reading", "Gaming"]

// 4. Generating personalized bio
const personalizedBio = `Hi, I'm ${fullName}.
I'm ${age} years old.
I live in ${address.city}
i love ${hobbies.join(", ")}.
Follow me for coding adventures!
`
// 5. print the user profile and bio
console.log(personalizedBio)