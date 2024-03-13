// import index.js
const { seed } = require('./seed');
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

describe('Database Seeding Tests', () => {
    beforeAll(async () => {
        // Seed the database, if not already seeded
        await seed();
    });

    afterAll(async () => {
        // Cleanup test users created during tests
        // delete only top 100 users
        await prisma.user_list.deleteMany({
            where: {
                create_time: {
                    gte: new Date(Date.now() - 5 * 60 * 1000) // Delete users created within the last 5 minutes
                }
            }
        })
        await prisma.$disconnect();
    });

    it('should have seeded 100 test users', async () => {
        // Assuming your seeding logic is complete...
        const userCount = await prisma.user_list.count({
            where: {
                create_time: {
                    gte: new Date(Date.now() - 5 * 60 * 1000) // Users created within the last 5 minutes
                }
            }
        });

        expect(userCount).toBe(100);
    });

    it('should have seeded users with non-null data', async () => {
        // Use dynamic data from your seeding script if possible
        const seededUser = await prisma.user_list.findFirst();
        expect(seededUser).not.toBeNull();
    });

});
