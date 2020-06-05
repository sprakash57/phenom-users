import React, { useState } from 'react';
import { connect } from 'react-redux';
import { User, IState } from '../interfaces';
import { searchUser } from '../store/actions/user';

interface SearchProps extends IState {
    searchUser: Function
}

const SearchBar: React.FC<SearchProps> = (props: SearchProps) => {
    const [query, setQuery] = useState<string>('');

    const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
        let searchedList: User[] = [];
        const inputQuery: string = e.currentTarget.value;
        setQuery(inputQuery);
        const pattern = new RegExp(inputQuery, 'gi');
        searchedList = props.users.full.filter(user => user.name.match(pattern) || user.company.match(pattern));
        props.searchUser(searchedList);
    }

    return <input type="text" value={query} onChange={handleChange} />
}

const mapState = (state: IState) => ({
    users: state.users
})

export default connect(mapState, { searchUser })(SearchBar);