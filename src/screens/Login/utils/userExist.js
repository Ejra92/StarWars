/* eslint-disable prettier/prettier */
import { stringify } from '../../../global/utils/stringify'

const availableUsers = [
  {
    email: 'eric@gmail.com',
    password: '1234',
  },
  {
    email: 'mica@gmail.com',
    password: '1234',
  },
  {
    email: 'aconcagua@gmail.com',
    password: 'aconcagua',
  },
  {
    email: 'darthvader@gmail.com',
    password: 'darthvader',
  },
]

export const userExist = data => availableUsers.some(
  user => stringify(user) === stringify(data)
)