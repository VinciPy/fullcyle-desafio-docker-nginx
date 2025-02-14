import { PrismaClient } from "@prisma/client";
import express from 'express'

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

route.get('/', (req: express.Request, res: express.Response) => {
  res.json({ message: 'hello world with Typescript' })
})

app.use(route)


app.listen(3000, () => console.log('server running on port 3333'))

