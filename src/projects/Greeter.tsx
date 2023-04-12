import propTypes from 'prop-types';

const Greeter = ({first} : any) => {
    
    return (
        <div>
        <h1>Greetings ,{first}</h1>
        </div>
    );
};
Greeter.propTypes = {
    first: propTypes.string.isRequired
}

export default Greeter;