import { Inter } from 'next/font/google'
import { useEffect, useRef, useState } from 'react'
import { saveAs } from 'file-saver'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const canvasRef = useRef(null)

  const [tokenId, setTokenId] = useState(null)
  const [tokenData, setTokenData] = useState('')

  useEffect(() => {
    setTokenId(4762)
  }, [])

  useEffect(() => {
    const getTokenData = async (id) => {
      const response = await fetch(`/api/armada/${id}`)
      const res = await response.json()
      const jsonMimeType = 'application/json'
      const encoded = res.data.split(',')[1]
      const metadata = JSON.parse(Buffer.from(encoded, 'base64').toString('utf8'))
      setTokenData(metadata.image_data)
    }

    if (tokenId !== null) {
      getTokenData(tokenId)
    }
  }, [tokenId])

  useEffect(() => {
    if (tokenData) {
      const canvas = canvasRef.current
      if (canvas) {
        const context = canvas.getContext('2d')
        if (context) {
          const image = new Image()
          image.onload = () => {
            context.clearRect(0, 0, 1200, 1200)
            context.fillStyle = 'white'
            context.fillRect(0, 0, 1200, 1200)
            context.drawImage(image, 0, 0, 1200, 1200)
          }
          image.src = tokenData
        }
      }
    }
  }, [tokenData])

  const download = () => {
    const canvas = canvasRef.current
    if (canvas) {
      canvas.toBlob((blob) => {
        saveAs(blob, `punk-armada-${tokenId}.png`)
      })
    }
  }

  return (
    <main
      className={`dark flex min-h-screen flex-col items-center p-4 ${inter.className} bg-[url('/panel.png')]`}>
      {tokenId !== null && (
        <form className='max-w-sm mx-auto my-4' onSubmit={download}>
          <div className='mb-5'>
            <label
              htmlFor='tokenId'
              className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
              Punk Armada ID #
            </label>
            <input
              type='number'
              onChange={(e) => {
                setTokenId(parseInt(e.target.value))
              }}
              min={0}
              max={33333}
              value={tokenId}
              id='tokenId'
              className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
              required
            />
          </div>
          <button type="submit" href="#_" className="relative px-6 py-3 font-bold text-white rounded-lg group uppercase">
            <span className="absolute inset-0 w-full h-full transition duration-300 transform -translate-x-1 -translate-y-1 bg-purple-800 ease opacity-80 group-hover:translate-x-0 group-hover:translate-y-0"></span>
            <span className="absolute inset-0 w-full h-full transition duration-300 transform translate-x-1 translate-y-1 bg-pink-800 ease opacity-80 group-hover:translate-x-0 group-hover:translate-y-0 mix-blend-screen"></span>
            <span className="relative">Download PNG</span>
          </button>
        </form>
      )}
      <canvas width='1200' height='1200' ref={canvasRef} className='w-[400px] h-[400px]' />
    </main>
  )
}
