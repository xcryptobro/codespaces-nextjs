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
      const encoded = res.data.replace(`data:${jsonMimeType};base64,`, '')
      const metadata = JSON.parse(atob(encoded))
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
      className={`flex min-h-screen flex-col items-center justify-between p-4 ${inter.className}`}>
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
          <button
            type='submit'
            className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'>
            Download PNG
          </button>
        </form>
      )}
      <canvas width='1200' height='1200' ref={canvasRef} />
    </main>
  )
}
