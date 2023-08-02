import { fetchPokemons } from './helpers';

const mockFetch = (data: any, status = 200) =>
    jest.fn().mockResolvedValue({
        ok: status >= 200 && status < 300,
        status,
        json: async () => data,
    });

describe('fetchPokemons', () => {
    // Test for successful response
    it('should fetch pokemons from the API successfully', async () => {
        const currentPage = 1;
        const pageSize = 10;
        const responseData = { /* Sample data to be returned by the API */ };
        const mockResponse = mockFetch(responseData);

        global.fetch = mockResponse;

        const result = await fetchPokemons(currentPage, pageSize);

        expect(result).toEqual(responseData);
        expect(mockResponse).toHaveBeenCalledWith(
            `https://pokeapi.co/api/v2/pokemon?limit=${pageSize}&offset=${(currentPage - 1) * pageSize}`
        );
    });

    // Test for failed response
    it('should throw an error for a failed network response', async () => {
        const currentPage = 2;
        const pageSize = 10;
        const mockResponse = mockFetch({}, 404); // Simulate a failed network response

        global.fetch = mockResponse;

        await expect(fetchPokemons(currentPage, pageSize)).rejects.toThrowError(
            'Network response was not ok'
        );

        expect(mockResponse).toHaveBeenCalledWith(
            `https://pokeapi.co/api/v2/pokemon?limit=${pageSize}&offset=${(currentPage - 1) * pageSize}`
        );
    });
});
