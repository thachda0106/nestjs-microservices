import { PrismaClient } from '@prisma/client';
import { initRole } from './role';
import { initModule } from './module';
import { initPermission } from './permission';
import { initAccount } from './account';
const prisma = new PrismaClient();

async function main() {
  const [roles, modules] = await Promise.all([
    initRole(prisma),
    initModule(prisma),
  ]);
  const rolesMapper = new Map();
  const modulesMapper = new Map();
  roles.forEach((role) => {
    rolesMapper.set(role['code'], role['id']);
  });
  modules.forEach((module) => {
    modulesMapper.set(module['name'], module['id']);
  });

  await initPermission(prisma, rolesMapper, modulesMapper);
  await initAccount(prisma, rolesMapper);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
