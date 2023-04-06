import {useEffect, useState} from 'react'
import {getAuthStatus} from '../api'
import {User} from '../types'

export function useFetchUser() {
  const [user, setUser] = useState<User>({
    id: '',
    discordId: '',
    username: '',
    discriminator: '',
    avatar: '',
  })
  const [error, setError] = useState()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    getAuthStatus()
      .then(({data}) => {
        setUser(data)
      })
      .catch((err) => {
        setError(err)
      })
      .finally(() => {
        setTimeout(() => setLoading(false), 1500)
      })
  }, [])

  return {user, loading, error}
}
