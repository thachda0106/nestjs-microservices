export async function initAccount(prisma, rolesMapper) {
  await prisma.account.createMany({
    data: [
      {
        username: 'admin',
        password: 'password',
        roleId: rolesMapper.get('manager'),
      },
    ],
    skipDuplicates: true,
  });
}
