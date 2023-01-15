import fastifyView from '@fastify/view'
import fastify from 'fastify'
import ejs from 'ejs'

const app = fastify()

app.register(fastifyView, {
    engine: {
        ejs: ejs
    }
})

app.get('/', (req, res) => {
    const posts = [{
        title: 'Mon titre',
        content: 'Mon contenu'
    }, {
        title: 'Mon titre 2',
        content: 'Mon contenu 2'
    }]

    res.view('templates/index.ejs', {
        posts
    })
})

const start = async () => {
    try {
        await app.listen({ port: 3000 })
    } catch (err) {
        console.log(err)
        process.exit(1)
    }
}
start()