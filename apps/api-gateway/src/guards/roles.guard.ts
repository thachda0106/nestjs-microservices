import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Observable } from 'rxjs';
import { Reflector } from '@nestjs/core';
import { FREE_PASSPORT } from '@libs/token-passport/token-passport.decorator';

const PERMISSION = {
  GET: 'canRead',
  POST: 'canCreate',
  PUT: 'canUpdate',
  DELETE: 'canDelete',
};

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private readonly reflector: Reflector) {}

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const isSkipAuth = this.reflector.getAllAndOverride<boolean>(
      FREE_PASSPORT,
      [context.getHandler(), context.getClass()],
    );

    if (isSkipAuth) {
      return isSkipAuth;
    }

    const request = context.switchToHttp().getRequest();
    const { user, url, method } = request;

    const isUserHasPermission = user.role.permission.some((permission) => {
      return (
        url.includes(permission.module.name) && permission[PERMISSION[method]]
      );
    });

    return isUserHasPermission;
  }
}
