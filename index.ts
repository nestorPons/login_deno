import { path } from "https://deno.land/x/easypath/mod.ts";
import { __ } from 'https://deno.land/x/dirname/mod.ts';
const { __filename, __dirname } = __(import.meta);

console.log(__dirname);
console.log(__filename);
console.log(
    path(__dirname)
      .toString()
);