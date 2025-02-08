import { PmkinClient } from 'pmkin'

if (!process.env.PMKIN_API_KEY) {
  throw new Error('PMKIN_API_KEY is not set')
}

export const pmkin = new PmkinClient({
  token: process.env.PMKIN_API_KEY
})
