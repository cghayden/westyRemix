export default function PlusSvg({ w = '20', h = '20' }) {
  return (
    <svg width={w} height={h} viewBox='0 0 23 23'>
      <path
        fill='transparent'
        strokeWidth='2'
        stroke='currentColor'
        strokeLinecap='round'
        opacity='1'
        d='M 11 .5 L 11 18.346'
      ></path>
      <path
        fill='transparent'
        strokeWidth='2'
        stroke='currentColor'
        strokeLinecap='round'
        opacity='1'
        d='M 2 9.423 L 20 9.423'
      ></path>
    </svg>
  );
}
