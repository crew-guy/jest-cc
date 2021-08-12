const axios = require('axios')

const fetchData = async (id) => {
    const results = await axios.get(`https://jsonplaceholder.typicode.com/todos/${id}.json`);
    return results.data
}


const forEach = (items, callback) => {
    for (let i = 0; i < items.length; i++){
        callback(items[i]);
    }
}

it('item iteration mock function', () => {
    const mockCallback = jest.fn(x => 42 + x);

    forEach([0, 1], mockCallback);
    
    expect(mockCallback.mock.calls.length).toBe(2);
    expect(mockCallback.mock.calls[0][0]).toBe(0)
    expect(mockCallback.mock.calls[1][0]).toBe(1)
    expect(mockCallback.mock.results[0].value).toBe(42)
    expect(mockCallback.mock.results[1].value).toBe(43)
});

it('mock return', () => {
    const mock = jest.fn()
    mock.mockReturnValueOnce(true).mockReturnValueOnce(false).mockReturnValueOnce('Hello');
    const results1 = mock()
    const results2 = mock()
    const results3 = mock()
    expect(results1).toBe(true)
    expect(results2).toBe(false)
    expect(results3).toBe('Hello')
});

it('async mock', async () => {
    jest.spyOn(axios, "get").mockReturnValueOnce({
        data: {
            id: 1,
            todo:"get 1M subs"
        }
    })
    const results = await fetchData(1);
    expect(results.todo).toBe('get 1M subs')
})