export const Role = {
  customer: 1,
  employee: 2,
  manager: 3,
};

export async function initRole(prisma) {
  await prisma.role.deleteMany({});

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
  });
}
