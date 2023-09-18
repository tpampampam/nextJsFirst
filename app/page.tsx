
import Link from '@/node_modules/next/link'
import ProductCard from './components/ProductCard'


export default function Home() {
  return (
    <main>
      <h1>
        Hello world!
      </h1>
      <Link href='/users'>users </Link><br />
      <Link href='/users/new'>newUser </Link>
      <ProductCard/>
    </main>
  )
}
