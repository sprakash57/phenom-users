import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { IUserDetailProps, IState } from '../interfaces';
import Navigation from './Navigation';
import { LOCATION_API } from '../constants';

const UserDetails: React.FC<IUserDetailProps> = (props: IUserDetailProps) => {
    const [location, setLocation] = useState('');
    const user = props.users.full.find(user => user._id === props.match.params._id);

    const loadLocation = async () => {
        let fetchedLocation = '';
        try {
            const buffer = await fetch(LOCATION_API);
            const data = await buffer.json();
            fetchedLocation = data.results[0].formatted_address
        } catch (error) {
            fetchedLocation = user?.latitude + ', ' + user?.longitude;
        }
        setLocation(fetchedLocation);
    }

    useEffect(() => {
        loadLocation();
    }, [])

    return (
        <main className='container'>
            <Navigation currentPage={user?.index} users={props.users.full} />
            <header>Introduction</header>
            <section className='intro'>
                <section className='intro-photo'>
                    <div className='fill'>
                        <img src='http://placehold.it/64x64' alt="pic" />
                    </div>
                    <summary>
                        Status: <span className={user?.isActive ? 'status-success' : 'status-danger'}>
                            {user?.isActive ? 'Active' : 'Not Active'}
                        </span>
                    </summary>
                    <small>Registered on {user?.registered.split('T')[0]}</small>
                </section>
                <article className='info'>
                    <summary><strong>Name:</strong> {user?.name}</summary>
                    <summary><strong>Age:</strong> {user?.age}</summary>
                    <summary><strong>Gender:</strong> {user?.gender.toUpperCase()}</summary>
                    <summary><strong>Address:</strong> {user?.address}</summary>
                    <summary><strong>Email:</strong> {user?.email}</summary>
                    <summary><strong>Phone:</strong> {user?.phone}</summary>
                </article>
            </section>
            <section className='tags'>
                Known for: {user?.tags.map((tag, i) => <span key={i}>{tag}</span>)}
            </section>
            <header>Bio</header>
            <section className='bio'>{user?.about}</section>
            <header>Professional Info</header>
            <section>
                <p>Company: {user?.company}</p>
                <p>Balance: {user?.balance}</p>
                <p>Location: {location}</p>
            </section>
            <header>About Me</header>
            <section>
                <p>Eye color: {user?.eyeColor.toUpperCase()}</p>
                <p>Favorite Fruit: {user?.favoriteFruit.toUpperCase()}</p>
                <p>Friends: {user?.friends.map(friend => friend.name).join(', ')}</p>
            </section>
        </main>
    )
}

const mapState = (state: IState) => ({
    users: state.users
})

export default connect(mapState, null)(UserDetails);