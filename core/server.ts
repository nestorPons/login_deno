import { Application, Router, RouterContext, config, User } from "./deps.ts";
import { getNotes, createNote, getSingleNote, updateNote, deleteNote } from './routes.ts';

config({
  "path": "../.env", 
  "export": true
}); 
const u = new User(1, 'PEPE'); 
console.log(u.email('NuevoEmail@es.es'));
console.log(u);
/*
const router = new Router();

router
  .get('/', (ctx: RouterContext) => {
    ctx.response.body = 'Welcome to notes API';
  })
  .get('/user', getNotes)
  .get('/user/:id', getSingleNote)
  .post('/user', createNote)
  .put('/user/:id', updateNote)
  .delete('/user/:id', deleteNote)
  ;

const app = new Application();
app.use(router.routes());
app.use(router.allowedMethods());

const PORT = Deno.env.get('PORT');
app.listen({port: Number(PORT)});
console.log("Server is up and running");
*/