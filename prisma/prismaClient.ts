import { PrismaClient } from '@prisma/client';

const PrismaClientSingelton = () => {
    return new PrismaClient();
}

declare global {
    var prismaGlobal: undefined | ReturnType<typeof PrismaClientSingelton>;
}

export const prisma = globalThis.prismaGlobal ?? PrismaClientSingelton();

if (process.env.NODE_ENV !== 'production') globalThis.prismaGlobal = prisma;