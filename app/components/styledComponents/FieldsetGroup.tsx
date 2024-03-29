export default function FieldsetGroup({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <fieldset
      className='my-4 mx-0 p-0
     border-none bg-blue-50 drop-shadow-md rounded '
    >
      {children}
    </fieldset>
  )
}
