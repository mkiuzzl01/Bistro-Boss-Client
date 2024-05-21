const Card = ({item}) => {
    const {name,image,recipe,price} = item;
  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img
            src={image}
            alt={name}
          />
        </figure>
        <p className="absolute right-10 top-5 bg-black text-white p-2">${price}</p>
        <div className="card-body items-center">
          <h2 className="card-title">{name}</h2>
          <p>{recipe}</p>
          <div className="card-actions">
            <button className="btn btn-outline  bg-stone-300 text-orange-600 border-0 border-b-2">Order Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
