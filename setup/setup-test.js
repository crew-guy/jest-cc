const prods = ['prod1', 'prod2','prod3','prod4','prod5','prod6']

beforeAll(() => {
    console.log('Before all the tests')
})
afterAll(() => {
    console.log('After all the tests')
})


describe('when prods are tested', () => {
    beforeEach(() => {
        console.log('Before each PROD test')
    })
    
    afterEach(() => {
        console.log('After each PROD test')
    })
    
    it('prod test 1', () => {
        expect(prods[prods.length-1]).toBe('prod6')
    })
    it('prod test 2', () => {
        expect(prods.length).toBe(6)
    })
    it('prod test 3', () => {
        expect(prods[0]).toBe('prod1')
    })
})

describe('random detached test', () => {
    it('truthy test', () => {
        expect(true).toBeTruthy();
    })
})