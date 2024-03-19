const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function deleteAllUsers() {
    // delete only top 100 users
    await prisma.user_list.deleteMany({});
}

try {
    deleteAllUsers();
    console.log('All users have been deleted.');
} catch (error) {
    console.error('Error deleting users:', error);
}

