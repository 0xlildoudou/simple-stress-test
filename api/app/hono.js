import { serve } from '@hono/node-server'
import { Hono } from 'hono'
import { prettyJSON } from 'hono/pretty-json'
import winston from "winston";

const app = new Hono()
app.use(prettyJSON())
app.notFound((c) => c.json({ message: 'Not Found', ok: false }, 404))

const logger = winston.createLogger({
    level: 'debug',
    format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.json()
    ),
    transports: [
        new winston.transports.Console(),
    ],
});

app.use('*', (c, next) => {
    logger.debug({
        method: c.req.method,
        url: c.req.url,
        timestamp: new Date().toISOString(),
    });
    next();
});

export default logger;


app.get('/', (c) => {
  return c.json({'status':'OK'})
})

app.get('/users', (c) => {
  return c.json({'users':[
    {'user1':'enable'},
    {'user2':'enable'},
    {'user3':'disable'},
  ]})
})

const port = process.env.PORT || 3000
console.log(`Server is running on port ${port}`)

serve({
  fetch: app.fetch,
  port,
})
