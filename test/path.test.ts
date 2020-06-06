import { path } from "../core/path.ts";
Deno.test({
  name: "testing paths",
  fn(): void {
    console.log( 'PATH JOIN -> ',  path.join( 'lastPath') );
    console.log( 'PATH BASE -> ', path.base );
  }
});