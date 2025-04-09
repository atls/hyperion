import cors    from 'cors'
import express from 'express'

const port = 3000

const app = express()

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
