const { seed } = require('./seed');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

seed()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });