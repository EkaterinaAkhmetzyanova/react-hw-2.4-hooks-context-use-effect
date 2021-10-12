import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

export default function Details({info}) {
    const [user, setUser] = useState();
    const [isLoading, setLoading] = useState(false);

    useEffect(() => {
        if (info) {
            setLoading(true);
        fetch(`https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/${info.id}.json`)
        .then((response) => response.json())
        .then((data) => {
            setUser(data);
            setLoading(false);
        })
        .catch((e) => {
           setLoading(false);
           throw new Error('Error');
        }) 
        }
         
    }, [info]);

    return (
        <div className='Details'>
            {isLoading && <div className='LoadingWrapper'>Loading...</div>}
            {!isLoading && user && (
            <div className='UserDetails'>
            <div className='UserAvatar infoItem'><img scr={user.avatar} alt={user.name}></img></div>
            <div className='UserName infoItem'>{user.name}</div>
            <div className='UserCity infoItem'>City: {user.details.city}</div>
            <div className='UserCompany infoItem'>Company: {user.details.company}</div>
            <div className='UserPosition infoItem'>Position: {user.details.position}</div>
            </div>
            )}
        </div>
    )
}

Details.propTypes = {
    info: PropTypes.object,
}

