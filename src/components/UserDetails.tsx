/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { IUserDetailProps, IState } from '../interfaces';
import Navigation from './Navigation';
import { LOCATION_API } from '../constants';
import PageNotFound from './PageNotFound';

const UserDetails: React.FC<IUserDetailProps> = (props: IUserDetailProps) => {
    const [location, setLocation] = useState('');

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

    const user = props.users.full.find(user => user._id === props.match.params._id);
    if (user === undefined) return <PageNotFound />
    const { index, greeting, isActive, name, age, gender, address, email, phone, about, company, balance, eyeColor, favoriteFruit, tags, friends, registered } = user;

    return (
        <React.Fragment>
            <p className='alert'>{greeting}</p>
            <main className='container'>
                <Navigation currentPage={index} users={props.users.full} />
                <header>Introduction</header>
                <section className='intro'>
                    <section className='intro-photo'>
                        <div className='fill'>
                            <img src='http://placehold.it/64x64' alt="pic" />
                        </div>
                        <summary>
                            Status: <span className={isActive ? 'status-success' : 'status-danger'}>
                                {isActive ? 'Active' : 'Not Active'}
                            </span>
                        </summary>
                        <small>Registered on {registered.split('T')[0]}</small>
                    </section>
                    <article className='info'>
                        <summary><strong>Name:</strong> {name}</summary>
                        <summary><strong>Age:</strong> {age}</summary>
                        <summary><strong>Gender:</strong> {gender.toUpperCase()}</summary>
                        <summary><strong>Address:</strong> {address}</summary>
                        <summary><strong>Email:</strong> {email}</summary>
                        <summary><strong>Phone:</strong> {phone}</summary>
                    </article>
                </section>
                <section className='tags'>
                    Known for: {tags.map((tag, i) => <span key={i}>{tag}</span>)}
                </section>
                <header>Bio</header>
                <section className='bio'>{about}</section>
                <header>Professional Info</header>
                <section>
                    <p>Company: {company}</p>
                    <p>Balance: {balance}</p>
                    <p>Location: {location}</p>
                </section>
                <header>About Me</header>
                <section>
                    <p>Eye color: {eyeColor.toUpperCase()}</p>
                    <p>Favorite Fruit: {favoriteFruit.toUpperCase()}</p>
                    <p>Friends: {friends.map(friend => friend.name).join(', ')}</p>
                </section>
            </main>
        </React.Fragment>
    )
}

const mapState = (state: IState) => ({
    users: state.users
})

export default connect(mapState, null)(UserDetails);