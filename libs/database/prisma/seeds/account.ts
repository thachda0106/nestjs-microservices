export async function initAccount(prisma, rolesMapper) {
  await prisma.account.createMany({
    data: [
      {
        username: 'admin',
        password:
          '$2b$10$yQf7g5jJsDxY7sBwhbGiGevOLUne3JQUDDB6iZyjZ88dkbbWgvKq6',
        roleId: rolesMapper.get('manager'),
      },
    ],
    skipDuplicates: true,
  });
}
