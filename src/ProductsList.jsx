import ProductCard from './ProductCard';
import ProductDetail from './ProductDetail';
import { useState } from 'react';

const ProductsList = (props) => {
  const [whichCardSelectedIndex, setWhichCardSelectedIndex] = useState(null);
  const selectedProduct = props.productsData[whichCardSelectedIndex];
  return <>
    <div className="flex mx-auto gap-4">
      {props.productsData.map((element, index) => {
        function onclick(){
          setWhichCardSelectedIndex(index);
        }
        return <ProductCard
          name={element.name}
          price={element.price}
          selected={whichCardSelectedIndex === index}
          onClickHandler={onclick}
        />
      })}
    </div>
    <div className="flex flex-col items-center" >
    <ProductDetail
    name={selectedProduct?.name}
    description={selectedProduct?.description}
    price={selectedProduct?.price}
    imageUrl={selectedProduct?.imageUrl}
    />
    </div>


  </>
}

export default ProductsList;