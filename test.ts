import { assert } from "https://deno.land/std@0.84.0/_util/assert.ts";
import { serve } from "./main.ts";
import {assertEquals} from 'https://deno.land/std/testing/asserts.ts'

Deno.test("must work", async () => {
    const server = serve();
    server.run();
    const body = await fetch('http://localhost:8080/test-data/hello').then(r => r.text())
    assertEquals(body, 'hola mundo')
    server.abort();
});


// Deno.test("cli must work", async () => {
//    Deno.run('deno run --allow-net --allow-read main.ts test-data 8081'.split(''))
//     const body = await fetch('http://localhost:8080/test-data/hello').then(r => r.text())
//     assertEquals(body, 'hola mundo')
//     server.abort();
// });