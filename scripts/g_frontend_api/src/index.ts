import { g_api } from './core';
import fetch from 'node-fetch-commonjs';
import { OpenApiType } from './core/type';

async function start() {
  const res = await fetch('http://localhost:7878/api-json');
  const json = await res.json();
  g_api(json as OpenApiType);
}

start();
