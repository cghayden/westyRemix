import { useContext } from 'react'
import { ThemeContext } from '~/context/ThemeContext'

export default function PageHeading({ text = '' }: { text: string }) {
  const { pageTextColor } = useContext(ThemeContext)

  return (
    <h2
      className='text-2xl sm:text-2xl font-medium sm:py-6 text-center pt-4'
      style={{ color: `${pageTextColor}` }}
    >
      {text}
    </h2>
  )
}
