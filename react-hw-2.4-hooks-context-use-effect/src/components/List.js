import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

export default function List({handleClick}) {
    const [users, setUsers] = useState([]);
    const [isLoading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        fetch('https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/users.json')
        .then((response) => response.json())
        .then((data) => {
            setUsers(data);
            setLoading(false);
        })
        .catch((e) => {
           throw new Error('Error');
        })
    }, []);

    return (
        <ul className='UserList'>
            {isLoading && <li className='UserListItem'>Loading...</li>}
            {users.map((el) => {
                return <li className='UserListItem' key={el.id} onClick={handleClick(el)}>{el.name}</li> 
            })}
        </ul>
    );
}

List.propTypes = {
    handleClick: PropTypes.func.isRequired,
}