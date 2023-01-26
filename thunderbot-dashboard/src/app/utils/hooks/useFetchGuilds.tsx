import {useEffect, useState} from 'react'
import {getGuild} from '../api'
import {PartialGuild} from '../types'

export function useFetchGuilds() {
  const [ownerGuilds, setOwnerGuild] = useState<PartialGuild[]>()
  const [mutualGuilds, setMutualGuild] = useState<PartialGuild[]>()

  const [loading, setLoading] = useState(true)
  const [error, setError] = useState()

  useEffect(() => {
    getGuild()
      .then(({data}) => {
        setOwnerGuild(data.ownerUserGuilds)
        setMutualGuild(data.mutualGuilds)
      })
      .catch((err) => {
        console.log(err)
        setError(err)
      })
      .finally(() => {
        setTimeout(() => setLoading(false), 1500)
      })
  }, [])

  return {ownerGuilds, mutualGuilds, loading, error}
}
