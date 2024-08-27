import express from 'express'
import cors from 'cors'

const app = express()

const port = 3000

app.use(
  cors({
    credentials: true,
    origin: true,
  })
)

app.use(express.static('dist'))

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Listening on port ${port}`)
})
