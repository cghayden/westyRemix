export default function MinusSvg({ w = '20', h = '20' }) {
  return (
    <svg
      width={w}
      height={h}
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    >
      <line x1='5' y1='12' x2='19' y2='12'></line>
    </svg>
  );
}
