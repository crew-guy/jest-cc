const fetchData = require('./async');

    it('test todo id', async() => {
        const todo = await fetchData(1);
        console.log(todo.data.id)
        expect(todo.data.id).toBe(1);
    })
