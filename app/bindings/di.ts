import { container } from 'tsyringe';
import { TYPES } from './types';
import { IUserService } from '../interfaces/iuser.service';
import { UserService } from '../services/user.service';
import { UserRepo } from '../repositories/user.repo';
import { IUserRepo } from '../interfaces/iuser.repo';

container.registerSingleton<IUserService>(TYPES.IUserService, UserService);
container.registerSingleton<IUserRepo>(TYPES.IUserRepo, UserRepo);