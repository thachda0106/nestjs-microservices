import { ClientProviderOptions, Transport } from '@nestjs/microservices';

export const SERVICES = {
  Auth: 'AUTH_SERVICE',
  Products: 'PRODUCTS_SERVICE',
};

export const SERVICES_PROVIDER: Array<ClientProviderOptions> = [
  {
    name: SERVICES.Auth,
    transport: Transport.TCP,
    options: {
      host: '127.0.0.1',
      port: 8080,
    },
  },
  {
    name: SERVICES.Products,
    transport: Transport.TCP,
    options: {
      host: '127.0.0.1',
      port: 8081,
    },
  },
];
