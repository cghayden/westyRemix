export default function FieldsetGroup({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    //will-change-opacity? will-change-transform?
    <fieldset
      className='my-4 mx-0 p-0 pl-4
     border-none bg-blue-50 drop-shadow-md rounded '
    >
      {children}
    </fieldset>
  );
}
