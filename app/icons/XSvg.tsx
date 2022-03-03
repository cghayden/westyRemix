export default function XSvg({ w = '20', h = '20' }) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={w}
      height={h}
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    >
      <line x1='18' y1='6' x2='6' y2='18' />
      <line x1='6' y1='6' x2='18' y2='18' />
    </svg>
  );
}
