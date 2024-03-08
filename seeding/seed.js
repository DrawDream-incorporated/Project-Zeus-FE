const { PrismaClient, Prisma } = require('@prisma/client');
const { faker } = require('@faker-js/faker');

const prisma = new PrismaClient();

async function seed() {
    try {
        for (let i = 0; i < 100; i++) {
            // Create user list
            await prisma.user_list.create({
                data: {
                    user_id: faker.internet.userName(),
                    user_names: faker.person.firstName(),
                    user_nickname: faker.internet.userName(),
                    user_Pw: faker.internet.password(),
                    user_email: faker.internet.email(),
                    user_address: faker.location.streetAddress(),
                    user_postalcode: faker.location.zipCode(),
                    user_status: faker.number.int({ min: 0, max: 1 }),
                    user_delete_flag: faker.datatype.boolean(),
                    // user_no is autoincremented, so no need to include it
                    // update_time and create_time have default values, so they are also not included
                },
            });
        }
    } catch (error) {
        if (error instanceof Prisma.PrismaClientValidationError) {
            console.error("The prisma.user_list.create() is not up-to-date with the schema. Please modify data: {} to match the schema.");
            console.error('Error messages: ', error.message);
            process.exit(1);
        }
        console.error('Error seeding database:', error);
        process.exit(1);
    }
    console.log('Database has been seeded.');
}

// expoert seed funciton
module.exports = { seed };
