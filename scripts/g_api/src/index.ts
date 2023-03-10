import { generateApi } from './core';

async function start() {
  const res = await fetch('http://localhost:7878/api-json');
  const json = await res.json();
  generateApi(json);
}

start();
