import { serve } from "./main.ts";
import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import { delay } from "https://deno.land/std/async/mod.ts";
Deno.test("must work", async () => {
  const server = serve();
  const body = await fetch("http://localhost:8080/test-data/hello").then((r) =>
    r.text()
  );
  assertEquals(body, "hola mundo");
  server.abort();
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
    await delay(1000);
    const body = await fetch("http://localhost:12345/hello").then((
      r,
    ) => r.text());
    assertEquals(body, "hola mundo");
    await p.close();
  },
});
