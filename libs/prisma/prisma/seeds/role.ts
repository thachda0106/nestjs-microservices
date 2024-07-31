export async function initRole(prisma) {
  await prisma.role.createMany({
    data: [
      {
        code: 'customer',
      },
      {
        code: 'employee',
      },
      {
        code: 'manager',
      },
    ],
    skipDuplicates: true,
  });

  return await prisma.role.findMany();
}
