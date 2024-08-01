import { SetMetadata } from '@nestjs/common';

export const FREE_PASSPORT = 'isSkipAuth';
export const FreePassport = () => SetMetadata(FREE_PASSPORT, true);
