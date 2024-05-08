import { Request } from 'express';
import type { User } from '../../model/User';

interface UserRequest extends Request {
  user?: User;
}
export default UserRequest;
