export default function CoffeeCupIcon({ w = '20', h = '20' }) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={w}
      height={h}
      viewBox='0 0 28 28'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    >
      <path d='M22 10h1a4 4 0 0 1 0 8h-1'></path>
      <path d='M2 8h20v15a4 10 0 0 1-4 4H6a4 10 0 0 1-4-4V8z'></path>
      <line x1='8' y1='1' x2='8' y2='4'></line>
      <line x1='12' y1='1' x2='12' y2='4'></line>
      <line x1='16' y1='1' x2='16' y2='4'></line>
    </svg>
  );
}
