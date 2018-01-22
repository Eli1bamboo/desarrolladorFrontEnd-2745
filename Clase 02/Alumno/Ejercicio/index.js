class User {
  constructor (name, lastName, dni, isAdmin = false, telephones = []) {
    this._name = name
    this._lastName = lastName
    this._dni = dni
    this._isAdmin = isAdmin
    this._telephones = telephones
  }

  set number (number) {
    this._telephones.push({
      number,
      isMobile: number.includes('+549')
    })
  }

  get userDetails () {
    let phones = this._telephones.reduce((a, b) => {
      return `${JSON.stringify(a)} / ${JSON.stringify(b)}`
    })
    return `Nombre: ${this._name} Apellido: ${this._lastName} Dni: ${this._dni} Telefonos: ${phones}`
  }
}

const demoUser = new User('Elias', 'Turrin', 33025659, null, [ { number: 123456 } ])

console.log(demoUser)

demoUser.number = '654321'

console.log(demoUser)

demoUser.number = '+549654321'

console.log(demoUser)

console.log(`Detalles del usuario: ${demoUser.userDetails}`)

var studentsList = [
  {
    firstName: 'Mercedes',
    lastName: 'Baylac',
    dni: 54353353,
    telephones: [ { number: +54912345678, isMobile: true }, { number: +54987654321, isMobile: true } ]
  },
  {
    firstName: 'Julian',
    lastName: 'Bonpland',
    dni: 54533343,
    telephones: [ { number: +5478987865, isMobile: false }, { number: +54987654321, isMobile: true } ]
  },
  { firstName: 'Nehuen', lastName: 'Diaz', dni: 54353512 },
  { firstName: 'Ramiro Avalos', lastName: 'Avalos', dni: 54533843 },
  {
    firstName: 'Barbara',
    lastName: 'Pavan',
    dni: 54357512,
    telephones: [ { number: +54936473829, isMobile: true } ]
  }
]

var UserArr = studentsList.map((student) => student)

console.log(`Array de estudiantes: ${JSON.stringify(UserArr)}`)
