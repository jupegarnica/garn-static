import { listenAndServe } from "./deps.ts";
import { fromFileUrl, join, parse } from "./deps.ts";

import { blue, dim, green, red, underline, white, yellow } from "./deps.ts";
import { MEDIA_TYPES } from "./media-types.ts";

const info = (...args: string[]) =>
  console.log(...["| ", ...args, " |"].map(yellow));
const handleRequest = (folder: string) =>
  async function (request: Request): Promise<Response> {
    const { pathname } = new URL(request.url);
    const startTime = Date.now();
    let response;
    let status = 200;
    let { ext, dir, root, base } = parse(pathname);
    let path = join(folder, root, dir, base);

    try {
      const file = await Deno.readFile(path);
      response = new Response(file, {
        status,
        headers: {
          "content-type": MEDIA_TYPES[ext],
        },
      });
    } catch (error) {
      try {
        if (!ext) {
          ext = ".html";
          base = join(base, "index.html");
          path = join(folder, root, dir, base);
        } else {
          throw error;
        }
        const file = await Deno.readFile(path);
        response = new Response(file, {
          status,
          headers: {
            "content-type": MEDIA_TYPES[ext],
          },
        });
      } catch (error) {
        console.error(red("ERROR"), dim(error?.message));
        status = 404;
        response = new Response(
          `<html>
        <body style="padding:2em; font-family:sans;">
          <h1>404</h1>
          <h2>${error?.message}</h2>
          <p><pre>${error?.stack}</pre></p>
        </body>
      </html>`,
          {
            status,
            headers: {
              "content-type": "text/html; charset=utf-8",
            },
          },
        );
      }
    }
    const success = status >= 200 && status < 300;
    const colorize = success ? green : red;
    const icon = success ? "✓" : "✗";
    console.info(
      colorize(icon),
      colorize(`${request.method}`.padEnd(4)),
      colorize(`${status}`),
      dim(`${Date.now() - startTime}ms`.padStart(5)),
      white(`${path}`),
    );

    return response;
  };

interface Server {
  abort: () => void;
  promise: Promise<void>;
}

export function serve(folder = "./", port = 8080) {
  const controller = new AbortController();
  const signal = controller.signal;
  const absoluteFolderPath = join(
    (Deno.cwd()),
    folder,
  )
  const url = `http://localhost:${port}`;
  const infoLength = Math.max(absoluteFolderPath.length, url.length);
  const fixedLength = (t: string, char = " ") => t.padEnd(infoLength, char);
  const border = fixedLength("", "-");
  console.log("\n");
  info(border);
  info(fixedLength("serving folder:"));
  info(fixedLength(absoluteFolderPath));
  info(fixedLength("at:"));
  info(blue(fixedLength(url)));
  info(border);
  console.log("\n");

  const server: Server = {
    abort: () => controller.abort(),

    promise: listenAndServe(":" + port, handleRequest(folder), {
      signal,
    }),
  };

  return server;
}

if (import.meta.main) {
  const port = Number(Deno.args?.[1]) || undefined;
  await serve(Deno.args?.[0], port).promise;
}
