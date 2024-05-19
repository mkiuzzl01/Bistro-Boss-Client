import PropTypes from 'prop-types';

const Menu_Card = ({menu}) => {
    const {name,image,recipe,price} = menu;
    return (
        <div className='flex items-center space-x-4'>
            <div className=''>
                <img src={image} style={{borderRadius:"0px 200px 200px 200px"}} className='w-[100px]' alt="" />
            </div>
            <div>
            <div className='flex justify-between'>
            <h1 className='text-3xl'>{name}</h1>
            <p className='text-yellow-500'>{price}</p>
            </div>
            <p>{recipe}</p>
            </div>
        </div>
    );
};

Menu_Card.propTypes = {
    menu:PropTypes.object,
};

export default Menu_Card;