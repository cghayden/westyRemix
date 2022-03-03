// import type { MetaFunction } from 'remix';
import { Link } from 'remix';

export default function Index() {
  return (
    <div>
      <div>
        <h1>
          Remix <span>Jokes!</span>
        </h1>
        <nav>
          <ul>
            <li>
              <Link to='coffee'>Coffee</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
