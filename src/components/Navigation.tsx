import React from 'react';
import { Link } from 'react-router-dom';
import { User } from '../interfaces';

interface NavigationProps {
    currentPage: number | undefined,
    users: User[]
}

const Navigation: React.FC<NavigationProps> = (props) => {
    if (props.currentPage !== undefined) {
        const { currentPage, users } = props;
        const next = currentPage < 6 && users.find(user => user.index === currentPage + 1)?._id
        const prev = currentPage > 0 && users.find(user => user.index === currentPage - 1)?._id

        return <nav className='navigation'>
            <Link style={currentPage > 0 ? { visibility: 'visible' } : { visibility: 'hidden' }} to={`/${prev}`}>Previous</Link>
            <Link to='/'>Home</Link>
            <Link style={currentPage < 6 ? { visibility: 'visible' } : { visibility: 'hidden' }} to={`/${next}`}>Next</Link>
        </nav>
    }
    return null;
}

export default Navigation;