import { UserDetails } from '../../utils/types';
export interface IAuthService {
  validateUser(details: UserDetails);
}
