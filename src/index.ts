import { Hono } from 'hono'

const app = new Hono()

async function authMiddleware (c:any,next:any){
  if(c.req.header("Authroization")){

    //do validation
    await next();
  }else{
    return c.text("you dont have access");
  }

}

app.use(authMiddleware);
app.post('/', async (c) => {
  const body=await c.req.json();

  console.log(body);
  console.log(c.req.header("Authorization"));

  return c.text('Hello Hono!')
})

export default app
