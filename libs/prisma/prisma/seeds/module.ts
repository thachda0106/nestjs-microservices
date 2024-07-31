export async function initModule(prisma) {
  await prisma.module.createMany({
    data: [
      {
        name: 'access',
      },
      {
        name: 'products',
      },
      {
        name: 'employee',
      },
      {
        name: 'order',
      },
    ],
    skipDuplicates: true,
  });

  return await prisma.module.findMany();
}
