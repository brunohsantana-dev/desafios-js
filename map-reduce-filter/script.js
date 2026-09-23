//MAP transforma. REDUCE acumula. FILTER seleciona.

const companies = [
    {
        name: 'Samsung',
        marketValue: 50,
        CEO: 'Kim Hyun Suk',
        foundedOn: 1938
    },
    {
        name: 'Microsoft',
        marketValue: 415,
        CEO: 'Satya Nadella',
        foundedOn: 1975
    },
    {
        name: 'Intel',
        marketValue: 117,
        CEO: 'Brian Krzanich',
        foundedOn: 1968
    },
    {
        name: 'Facebook',
        marketValue: 383,
        CEO: 'Mark Zuckerberg',
        foundedOn: 2004
    },
    {
        name: 'Spotify',
        marketValue: 30,
        CEO: 'Daniel Ek',
        foundedOn: 2006
    },
    {
        name: 'Apple',
        marketValue: 845,
        CEO: 'Tim Cook',
        foundedOn: 1976
    }
]

//1. MAP    → aumentar marketValue em 10%
//2. FILTER → somente foundedOn < 1990
//3. REDUCE → somar marketValue das sobreviventes

/* const newCompanies = companies.map(company => {
    const newPrice = company.marketValue * 1.1
    

const newCompany = {
        name: company.name,
        marketValue: newPrice,
        CEO: company.CEO,
        foundedOn: company.foundedOn
    }

    return newCompany

})


const oldCompanies = newCompanies.filter (company => {
    return company.foundedOn < 1990  
})


const totalValue = oldCompanies.reduce((total, company) => {
    return total + company.marketValue

}, 0)

ESSE É UM METODO QUE PEGA MAP, REDUCE E FILTER DE CADA VEZ. ABAIXO VAMOS FAZER ENCADEADO */


const totalValue = companies
    .map(company => {
        const newPrice = company.marketValue * 1.1

        const newCompany = {
            name: company.name,
            marketValue: newPrice,
            CEO: company.CEO,
            foundedOn: company.foundedOn
        }

        return newCompany
    })
    .filter(company => {
        return company.foundedOn < 1990
    })
    .reduce((total, company) => {
        return total + company.marketValue
    }, 0)

console.log(totalValue)

/*
    MAP + FILTER + REDUCE ENCADEADOS
    Usando SPREAD OPERATOR (...company)

    ...company copia todas as propriedades da empresa.
    Depois sobrescrevemos apenas marketValue.

    const totalValue = companies
    .map(company => ({
        ...company,
        marketValue: company.marketValue * 1.1
    }))
    .filter(company => {
        return company.foundedOn < 1990
    })
    .reduce((total, company) => {
        return total + company.marketValue
    }, 0)

console.log(totalValue)
*/


const marketValueAfterDrop = companies
    .map(company => {
        company.marketValue = company.marketValue * 0.9

        return company
    })
    .filter(company => company.foundedOn > 1980)
    .reduce((acc, company) => acc + company.marketValue, 0)

console.log(marketValueAfterDrop)