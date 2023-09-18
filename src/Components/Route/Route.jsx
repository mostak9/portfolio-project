import PropTypes from 'prop-types';

const Route = ({route}) => {
    const {path, name} = route;
    return (
        <li className='font-semibold uppercase mr-4 p-3 hover:bg-sky-600 rounded-md'>
            <a href={path}>{name}</a>
        </li>
    );
};

Route.propTypes = {
    route: PropTypes.object.isRequired,
}
export default Route;