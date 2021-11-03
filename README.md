# garn-static

Super simple server for static files that works in deno deploy

## Usage

As code:

```ts
import { serve } from "https://deno.land/x/static/main.ts";

// default serving folder . at port 8080
const server = serve();

// serving folder ./dist at port 1234
const server = serve("./dist", 1234);

// await until completion
await server.promise;

// or to close the server
await server.abort();
```

As installed script:

```bash
deno install --allow-net --allow-read -fn static https://deno.land/x/static/main.ts

static dist 80

# or with default args
static
```

Run remotely

```bash
deno run --allow-net --allow-read  https://deno.land/x/static/main.ts  dist 8081
```
