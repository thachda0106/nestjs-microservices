import { PrismaClient } from '@prisma/client';
import { initRole } from './role';
import { initModule } from './module';
import { initPermission } from './permission';
const prisma = new PrismaClient();

async function main() {
  await Promise.all([initRole(prisma), initModule(prisma)]);
  await initPermission(prisma);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
