function User (firstName, age, isAdmin = false, telephones = []) {
  this.addPhone = function (phone) {
    telephones.push(phone)
  }

  this.showUser = function () {
    console.log(`Nombre: ${firstName}, Edad: ${age}, Contacto: ${telephones}`)
  }
}

const person = new User('Elias', 30, null, [ 123456 ])

person.addPhone(654321)

person.showUser()
