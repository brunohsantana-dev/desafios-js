const list = [
    { name: 'Joao', vip: true },
    { name: 'Maria', vip: false },
    { name: 'Bernadina', vip: false },
    { name: 'Chiquinha', vip: true },
    { name: 'Ana', vip: true  },
    { name: 'Julia', vip: true },
    { name: 'Pablo', vip: false  },
    { name: 'Birijean', vip: true },
]

const newList = list.map(user => {
    const newUser = {
        name: user.name,
        braceletColor: user.vip ? 'black' : 'yellow'
    }

return newUser

})

console.log(newList)



const student = [
    { name: 'Rodolfo', testGrade: 7 },
    { name: 'Maria', testGrade: 5 },
    { name: 'João', testGrade: 8 },
    { name: 'Bruno', testGrade: 9 },
    { name: 'Carla', testGrade: 3 },
    { name: 'Ana', testGrade: 2 },
    { name: 'Julio', testGrade: 10 },
]

const approved = student.map(student => {
    const approvedStudents = {
        name: student.name,
        approved: student.testGrade >= 5 ? "Aprovado" : "Reprovado"
    }

    return approvedStudents
    
})

console.log(approved)

