import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { AccountService } from './account.service';
import { CreateAccountDto } from './dto/create-account.dto';
import { UpdateAccountDto } from './dto/update-account.dto';
import { PrismaService } from '@libs/prisma';
import { from } from 'rxjs';

@Controller()
export class AccountController {
  constructor(
    private readonly accountService: AccountService,
    private readonly db: PrismaService,
  ) {}

  @MessagePattern({ cmd: 'ping' })
  async ping() {
    return from(this.db.account.findMany());
  }

  @MessagePattern('createAccount')
  create(@Payload() createAccountDto: CreateAccountDto) {
    return this.accountService.create(createAccountDto);
  }

  @MessagePattern('findAllAccount')
  findAll() {
    return this.accountService.findAll();
  }

  @MessagePattern('findOneAccount')
  findOne(@Payload() id: number) {
    return this.accountService.findOne(id);
  }

  @MessagePattern('updateAccount')
  update(@Payload() updateAccountDto: UpdateAccountDto) {
    return this.accountService.update(updateAccountDto.id, updateAccountDto);
  }

  @MessagePattern('removeAccount')
  remove(@Payload() id: number) {
    return this.accountService.remove(id);
  }
}
