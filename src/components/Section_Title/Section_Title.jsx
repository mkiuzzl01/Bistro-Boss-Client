import PropTypes from 'prop-types';

const Section_Title = ({Heading,Sub_Heading}) => {
    return (
        <div className='text-center w-96 m-auto'>
            <h1 className='text-yellow-500 italic'>---{Sub_Heading}---</h1>
            <h1 className='text-3xl border-y-2 my-4 p-4'>{Heading}</h1>
        </div>
    );
};

Section_Title.propTypes = {
    Heading:PropTypes.string,
    Sub_Heading:PropTypes.string,
};

export default Section_Title;