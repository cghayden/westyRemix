export default function PageHeading({ text }: { text: string }) {
  return (
    <h2 className='text-2xl sm:text-2xl font-medium sm:py-6 text-center text-slate-800'>
      {text}
    </h2>
  )
}
