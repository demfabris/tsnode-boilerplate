import app from 'app'
import 'dotenv/config'

const serverPort = process.env.PORT || 5000

app.listen(serverPort, () => {
    console.log(`Listening on ${serverPort}`)
})
