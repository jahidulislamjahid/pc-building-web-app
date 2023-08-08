export const ProductCard = ({ product }) => {
  return (
    <div className="card w-90 bg-white shadow-xl hover:opacity-90">
      <figure className="px-10 pt-10">
        <img src={product.images} alt="Shoes" className="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{product.name}</h2>
        <p>{product.Status}</p>
        <div className="card-actions">
          <button className="btn bg-curiousGreen text-white border rounded-md hover:text-black">Buy Now</button>
        </div>
      </div>
    </div>
  )
}

