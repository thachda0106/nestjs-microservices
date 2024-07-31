export async function initRole(prisma) {
  await prisma.role.createMany({
    data: [
      {
        name: 'customer',
      },
      {
        name: 'employee',
      },
      {
        name: 'manager',
      },
    ],
    skipDuplicates: true,
  });

  return await prisma.role.findMany();
}
