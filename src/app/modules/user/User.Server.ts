import { User } from './user.Model';

const getUser = async () => {
  const result = await User.find();
  return result;
};

export const userService = {
  getUser,
};
