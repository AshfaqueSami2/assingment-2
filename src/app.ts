import express, { Request, Response } from 'express'

const app = express()
// const port = 3000

app.get('/', (req: Request, res: Response) => {
  const a = 10
  res.send(a)
})

export default app
