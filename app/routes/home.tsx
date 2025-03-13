import type { Route } from './+types/home';
import HomePage from '../home/home';

export async function loader () {
  const texts = await import('../build/en/texts.json');

  return { texts };
}

export default function Home({ loaderData } : Route.ComponentProps) {
  return <HomePage texts={loaderData.texts} />
}
