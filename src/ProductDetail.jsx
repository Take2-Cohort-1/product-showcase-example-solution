function ProductDetail(props){
  return(
    <div className="flex flex-col my-4 border border-gray-700 w-1/3" >
   <p className="mx-auto my-4 ">{props.name}</p>
   <p className="mx-auto my-4 ">{props.description}</p>
   <p className="mx-auto my-4 ">{props.price}</p>
   <div className="mx-auto my-4 h-10">
    <img className="h-10 object-cover" src={props.imageUrl} />
   </div>

   </div>
   )
}

export default ProductDetail;