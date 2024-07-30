/* eslint-disable @typescript-eslint/no-var-requires */
import { Module } from './module';
import { Role } from './role';

const csv = require('csvtojson');
const path = require('node:path');

export async function initPermission(prisma) {
  const permission =
    (await csv().fromFile(
      path.join(process.cwd(), '/libs/prisma/prisma/permission/permission.csv'),
    )) || [];

  const permissionMapped = permission.map((per) => ({
    create: Number(per['create']),
    update: Number(per['update']),
    delete: Number(per['delete']),
    read: Number(per['read']),
    roleId: Role[per['role']],
    moduleId: Module[per['module']],
  }));

  await prisma.permission.createMany({
    data: permissionMapped,
  });
  await prisma.permission.createMany({
    data: permissionMapped,
  });
}
