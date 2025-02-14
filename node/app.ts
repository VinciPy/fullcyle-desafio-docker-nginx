import { PrismaClient } from "@prisma/client";
import express from 'express'
import path from 'path';


class CreateUser {
    private prismaClient: PrismaClient;
    constructor() {
        this.prismaClient = new PrismaClient();
    }

    public async execute() {
        const response = await this.prismaClient.user.create({
            data: {
                email: 'teste@teste.com',
                name: 'Teste da silva'
            }
        });
        const list = await this.prismaClient.user.count();
        console.log(list, "")
        return response;
    }
}

const main = async () => {
    const createUserService = new CreateUser();
    const result = await createUserService.execute();
    console.log(result);
};
// main();

const app = express();
const route = express.Router()

app.use(express.json())
app.set('view engine', 'ejs');
app.set('views', './views');

route.get('/', async (req: express.Request, res: express.Response) => {
    try {
        const prismaClient = new PrismaClient();
        const users = await prismaClient.user.findMany();
        res.render('index', {users});
      } catch (err) {
        res.status(500).send('Erro ao buscar dados');
        console.log(err)
      }
//   res.json({ message: 'hello world with Typescript' })
})

app.use(route)


app.listen(3000, () => console.log('server running on port 3333'))

