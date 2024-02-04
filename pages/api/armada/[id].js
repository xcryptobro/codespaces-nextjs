// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { ethers } from 'ethers'
import { punkArmada } from './pa'

const NEXT_PUBLIC_INFURA_API_KEY = process.env.NEXT_PUBLIC_INFURA_API_KEY

const handler = async (req, res) => {
  const { id } = req.query

  const provider = new ethers.InfuraProvider(
    'mainnet',
    NEXT_PUBLIC_INFURA_API_KEY
  )
  const armadaContract = new ethers.Contract(
    punkArmada.address,
    punkArmada.abi,
    provider
  )
  const armada = await armadaContract.tokenURI(parseInt(`${id}`))
  res.status(200).json({ data: armada })
}

export default handler
