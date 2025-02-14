import { PrismaClient } from "@prisma/client";

export class CreateUser {
    private prismaClient: PrismaClient;
    constructor() {
        this.prismaClient = new PrismaClient();
    }

    public async execute() {
        this.prismaClient.user.create({
            data: {
                email: 'teste@teste.com',
                name: 'Teste da silva'
            }
        });
    }
}
