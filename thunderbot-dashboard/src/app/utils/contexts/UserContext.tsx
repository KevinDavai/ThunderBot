import {createContext} from 'react'
import {User} from '../types'

type UserContextType = {
  user: User
  updateUser: (user: User) => void
}

export const UserContext = createContext<UserContextType>({
  updateUser: () => {},
  user: {
    id: '',
    discordId: '',
    username: '',
    discriminator: '',
  },
})
