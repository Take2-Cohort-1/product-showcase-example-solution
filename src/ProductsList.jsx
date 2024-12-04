import ProductCard from './ProductCard';
import { useState } from 'react';

const ProductsList = (props) => {
  const [whichCardSelectedIndex, setWhichCardSelectedIndex] = useState(null);

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
  </>
}

export default ProductsList;