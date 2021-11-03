import { serve } from "./main.ts";
import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import { delay } from "https://deno.land/std/async/mod.ts";

Deno.test({
  name: "must work",
  // only:true,
  fn: async () => {
    const server = serve();
    const body = await fetch("http://localhost:8080/test-data/hello").then((
      r,
    ) => r.text());
    assertEquals(body, "hola mundo");
    await server.abort();
    await server.promise;
    await delay(5);
  },
});



Deno.test({
  name: "must work with args",
  // only:true,
  fn: async () => {
    const server = serve('test-data', 2345);
    const body = await fetch("http://localhost:2345/hello").then((
      r,
    ) => r.text());
    assertEquals(body, "hola mundo");
    await server.abort();
    await server.promise;
    await delay(5);
  },
});

Deno.test({
  name: "cli must work",
  // only: true,
  fn: async () => {
    const cmd = "deno run --allow-net --allow-read ./main.ts test-data 12345"
      .split(
        " ",
      );
    const p = Deno.run({ cmd });
    await delay(100);
    const body = await fetch("http://localhost:12345/hello").then((
      r,
    ) => r.text());
    assertEquals(body, "hola mundo");
    await p.close();
  },
});

Deno.test({
  name: "cli must work without args",
  // only: true,
  fn: async () => {
    const cmd = "deno run --allow-net --allow-read ./main.ts"
      .split(
        " ",
      );
    const p = Deno.run({ cmd });
    await delay(100);
    const body = await fetch("http://localhost:8080/test-data/hello").then((
      r,
    ) => r.text());
    assertEquals(body, "hola mundo");
    await p.close();
  },
});

Deno.test({
  name: "install must work",
  // only: true,
  fn: async () => {
    const cmdInstall = "deno install --allow-net --allow-read -fn static ./main.ts"
      .split(
        " ",
      );
    const process = Deno.run({ cmd: cmdInstall })
    await process.status();
    await process.close();

    const cmd = "static test-data 3456"
      .split(
        " ",
      );
    const p = await Deno.run({ cmd });
    await delay(100);
    const body = await fetch("http://localhost:3456/hello").then((
      r,
    ) => r.text());
    assertEquals(body, "hola mundo");
    await p.close();
    // await delay(1000);

  },
});