export const Module = {
  access: 1,
  products: 2,
  employee: 3,
  order: 4,
};

export async function initModule(prisma) {
  await prisma.module.deleteMany({});

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
  });
}
