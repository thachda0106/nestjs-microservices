/* eslint-disable @typescript-eslint/no-var-requires */
const csv = require('csvtojson');
const path = require('node:path');

export async function initPermission(prisma, rolesMapper, modulesMapper) {
  const permission =
    (await csv().fromFile(
      path.join(process.cwd(), '/libs/database/prisma/permission/permission.csv'),
    )) || [];

  const permissionMapped = permission.map((per) => ({
    create: Number(per['create']),
    update: Number(per['update']),
    delete: Number(per['delete']),
    read: Number(per['read']),
    roleId: rolesMapper.get(per['role']),
    moduleId: modulesMapper.get(per['module']),
  }));

  await prisma.permission.createMany({
    data: permissionMapped,
    skipDuplicates: true,
  });
}
