

// Para poder usar test toca importar de la siguiente manera
const suma = require('./11-Testing')

test('Primer test', () => {
    expect(suma(8,6)).toBe(14)
})

// toBe --> lo que espera

