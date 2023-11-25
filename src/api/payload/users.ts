import { User } from "@/types";
import { nanoid } from "nanoid";

export default [
  {
    id: nanoid(),
    firstName: 'Minh',
    lastName: 'Ngoc',
    citizenId: '022090001234',
    phoneNumber: '0912763488',
    email: 'minhngoc@gmail.com',
    username: 'minhngoc07',
    password: '1234',
    imageUrl: '',
    bio: 'Just eating'
  }
] as User[]