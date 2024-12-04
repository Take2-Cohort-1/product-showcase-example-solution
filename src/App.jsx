import Header from './Header';
import ProductsList from './ProductsList';

const products = [
  {
    name: 'Sector 67 Card',
    description: 'Unlocks Sector 67',
    price: 10000,
    imageUrl: 'https://picsum.photos/id/123/200'
  },
  {
    name: 'Sione',
    description: 'Eats cake',
    price: 100000,
    imageUrl: 'https://picsum.photos/id/144/200'
  }
]

function App() {
  return (
    <>
      <Header />
      <ProductsList productsData={products} />
    </>
  )
}

export default App
