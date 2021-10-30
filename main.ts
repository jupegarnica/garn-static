import { listenAndServe } from "./deps.ts";
import { join, parse } from "./deps.ts";

import { blue, dim, green, red, underline, white, yellow } from "./deps.ts";
import { MEDIA_TYPES } from "./media-types.ts";

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

export async function main(folder = "./", port = 8080) {
  const absoluteFolderPath = join(
    parse(import.meta.url).dir,
    folder,
  );
  console.info(
    `Serving folder ${yellow(absoluteFolderPath)}`,
    "at",
    underline(blue(`http://localhost:${port}`)),
  );
  await listenAndServe(":" + port, handleRequest(folder));
}
if (import.meta.main) {
  await main(Deno.args?.[0]);
}
