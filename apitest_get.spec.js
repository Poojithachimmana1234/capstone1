import { test, expect } from '@playwright/test';
test.only('Demo API Test Get',asyn({request})=> {


    const response = await request.get('https://reqres.in/api/users/2',{
        headers: {
            "x-api-key": "reqres_a2ff53d9acfd4f7dbe00637f2f52e711"
}})

expect(response.status()).toBe(200);
const text = await response.text();
expect(text).toContain('Janet');
console.log(await response.json());
})