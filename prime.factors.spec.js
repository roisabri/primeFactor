const primeFactorsOf = require ('./prime.factors')

describe ('primeFactors', () => {
	it ('1 sould have no prime factor', () => {
		expect(primeFactorsOf(1)).toEqual ([])
	})
})
