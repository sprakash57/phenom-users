import React, { useState } from 'react';
import { connect } from 'react-redux';
import { User, IState } from '../interfaces';
import { searchUser, searchQuery } from '../store/actions/user';

interface SearchProps extends IState {
    searchUser: Function,
    searchQuery: Function
}

const SearchBar: React.FC<SearchProps> = (props: SearchProps) => {
    const [query, setQuery] = useState<string>(props.users.query);

    const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
        let searchedList: User[] = [];
        const inputQuery: string = e.currentTarget.value;
        const pattern = new RegExp(inputQuery, 'gi');
        searchedList = props.users.full.filter(user => user.name.match(pattern) || user.company.match(pattern));
        setQuery(inputQuery);
        props.searchUser(searchedList);
        props.searchQuery(inputQuery);
    }

    return <input
        className='search'
        placeholder='Seach by Name or Company'
        type="text"
        value={query}
        onChange={handleChange}
    />
}

const mapState = (state: IState) => ({
    users: state.users
})

export default connect(mapState, { searchUser, searchQuery })(SearchBar);