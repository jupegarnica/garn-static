import examples from './examples.json.js';

import { chooseColor } from './colors.js';

import * as chroma from 'https://deno.land/x/chroma@v1.0.10/index.ts';

const count = 16;
const size = 16;
const spacing = 1;
const width = count * (size + spacing) - spacing;
const input = document.getElementById('input');
const editor = document.getElementById('editor');
const comment = document.getElementById('comment');
const output = document.getElementById('output');
const context = output.getContext('2d');
const dpr = window.devicePixelRatio || 1;
const defaultTextColor = '#f24';

let callback = function () {};
let startTime = null;
let code = `[
  x - y % t ,
  'black',
   i,
  'white'
]`;


// let code ="[\n16+x-y-t,\n'black',\ni,\n`linear-gradient(${sin(t/3)*360}deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%)`,\n ]";

output.width = output.height = width * dpr;
context.scale(dpr, dpr);
output.style.width = output.style.height = `${width}px`;

function readURL() {
  const url = new URL(document.location);

  input.value = url.searchParams.get('code') || code;
}

readURL();

function checkLength() {
  if (code.length > 32) {
    editor.classList.add('over-limit');
  } else {
    editor.classList.remove('over-limit');
  }
}

function updateCallback() {
  code = input.value.trim();
  startTime = null;

  checkLength();

  try {
    callback = new Function(
      't',
      'i',
      'x',
      'y',
      `
      try {
        with (Math) {
          return ${code};
        }
      } catch (error) {
        return error;
      }
    `,
    );
  } catch (error) {
    callback = null;
  }
}

input.addEventListener('input', updateCallback);
updateCallback();

input.addEventListener('focus', function () {
  editor.classList.add('focus');
  updateComments([
    'hit "enter" to save in URL',
    'or get <a href="https://twitter.com/aemkei/status/1323399877611708416">more info here</a>',
  ]);
});

input.addEventListener('blur', function () {
  updateCommentsForCode();
  editor.classList.remove('focus');
});

input.addEventListener('keyup', (event) => {
  event.preventDefault();
  if (!event.shiftKey && event.key === 'Enter') {
    const url = new URL(document.location);
    const param = code.trim();
    url.searchParams.set('code', param);
    history.replaceState(null, param, url);
  }
});

function render() {
  let time = 0;

  if (startTime) {
    time = (new Date() - startTime) / 1000;
  } else {
    startTime = new Date();
  }

  if (!callback) {
    window.requestAnimationFrame(render);
    return;
  }

  output.width = output.height = width * dpr;
  context.scale(dpr, dpr);
  let index = 0;
  for (let y = 0; y < count; y++) {
    for (let x = 0; x < count; x++) {
      const returned = callback(time, index, x, y);
      const isArray = Array.isArray(returned);
      let value;

      let positiveColor = '#fff';
      let negativeColor = defaultTextColor;
      let backgroundColor = '#000';
      if (isArray) {
        [
          value,
          positiveColor = positiveColor,
          negativeColor = negativeColor,
          backgroundColor = backgroundColor,
        ] = returned;
      } else {
        value = Number(returned);
      }
      const offset = size / 2;
      let color = positiveColor;
      let radius = (value * size) / 2;

      if (radius < 0) {
        radius = -radius;
        color = negativeColor;
      }

      if (radius > size / 2) {
        radius = size / 2;
      }
      const fillStyle =
        typeof color == 'string' ? color : chooseColor(color);
      context.beginPath();
      context.fillStyle = fillStyle;
      context.arc(
        x * (size + spacing) + offset,
        y * (size + spacing) + offset,
        radius,
        0,
        2 * Math.PI,
      );
      context.fill();

      if (index === 0) {
        const background =
          typeof backgroundColor == 'string'
            ? backgroundColor
            : chooseColor(backgroundColor);
        let contrastedColor = '#fff';
        let distance = 60;
        try {
          const bgColor = chroma.color(background);
          distance = chroma.distance(
            defaultTextColor,
            bgColor,
          );
          contrastedColor = bgColor.textColor();

        } catch (_) {}
        document.documentElement.style.setProperty(
          '--text-color',
          distance < 70 ? '#000' : defaultTextColor,
        );
        document.documentElement.style.setProperty(
          '--input-color',
          contrastedColor,
        );

        document.documentElement.style.setProperty(
          '--background',
          background,
        );
      }
      index++;
    }
  }

  window.requestAnimationFrame(render);
}

render();

function updateComments(comments) {
  const lines = comment.querySelectorAll('label');

  if (comments.length === 1) {
    lines[0].innerHTML = '&nbsp;';
    lines[1].innerHTML = `// ${comments[0]}`;
  } else {
    lines[0].innerHTML = `// ${comments[0]}`;
    lines[1].innerHTML = `// ${comments[1]}`;
  }
}

function updateCommentsForCode() {
  const code = input.value.trim();

  const snippets = Object.values(examples);
  const comments = Object.keys(examples);
  const index = snippets.indexOf(code);
  const newComment = comments[index];

  if (!newComment) {
    return;
  }

  const newComments = newComment.split('\n');

  updateComments(newComments);
}

function nextExample() {
  const snippets = Object.values(examples);

  let index = snippets.indexOf(code);

  if (snippets[index + 1]) {
    index = index + 1;
  } else {
    return;
  }

  const newCode = snippets[index];
  input.value = newCode;

  updateCommentsForCode();
  updateCallback();
}

output.addEventListener('click', nextExample);

window.onpopstate = function () {
  readURL();
  updateCallback();
};

updateCommentsForCode();
