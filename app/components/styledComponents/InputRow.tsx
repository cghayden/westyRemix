export default function InputRow({ children }: { children: React.ReactNode }) {
  return (
    //font-size: 1.1rem?
    <div className='label__input-row w-full py-3 px-3  bg-blue-50 items-center flex'>
      {children}
    </div>
  );
}
