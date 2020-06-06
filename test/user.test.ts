import { assertEquals, assert } from "https://deno.land/std/testing/asserts.ts";
import { Utils } from "../libs/Utils.ts";
import { User } from "../models/User.ts";

//export const User = await import(path.join('models/User.ts'));
Deno.test({
  name: "testing user",
  async fn() {

    const u = new User(1, 'pepe', 'e@e.e', ['c: la cochera'], [123456789,987654321], 'asdasdadasdsa', 2);  
    u.addOnedir('c/ napoleon 3 13');
    u.addOneTel(321312321);
    assertEquals( u.email() , 'e@e.e');
    assertEquals( u.name() , 'pepe');
    assertEquals( u.id() , 1);

    for (const i of u.dirs()) {
      assert( typeof i == 'string');
    }
    for (const i of u.tels()) {
      assert( typeof i == 'number');
    }
    const u2 = new User(2, 'juan');
    
    await Utils.delay( 5000 );

    u2.role(2);
    console.log(u2);

  }
});
 