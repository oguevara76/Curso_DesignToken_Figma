import type { Route } from './+types/index';
import HomePage from '../home/home';

export async function loader () {
  //const texts = await import('../build/es/texts.json');

  //return { texts };

  return { texts: {} };
}

export default function Index({ loaderData } : Route.ComponentProps) {
  return <HomePage texts={loaderData.texts} />
}
