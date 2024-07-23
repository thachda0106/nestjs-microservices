import { HelmetOptions } from 'helmet';

export const HELMET_OPTIONS: HelmetOptions = {
  contentSecurityPolicy: {
    useDefaults: true,
    directives: {
      defaultSrc: ["'self'"],
      scriptSrc: ["'self'"],
      styleSrc: ["'self'"],
    },
  },
  frameguard: { action: 'deny' },
  xssFilter: true,
  noSniff: true,
};
