import React from 'react';
import { connect } from 'react-redux';
import { IUserDetailProps, IState, User } from '../interfaces';

const UserDetails: React.FC<IUserDetailProps> = (props: IUserDetailProps) => {
    const { full, searched } = props.users;
    let listToSearch: User[] = full;
    if (searched.length) listToSearch = searched;
    const user = listToSearch.find(user => user._id === props.match.params._id);

    return (
        <main className='container'>
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
                <p>Location: {user?.latitude}, {user?.longitude}</p>
            </section>
            <header>About Me</header>
            <section>
                <p>Eye color: {user?.eyeColor.toUpperCase()}</p>
                <p>Favorite Fruit: {user?.favoriteFruit.toUpperCase()}</p>
                <p>Buddies: {user?.friends.map(friend => friend.name).join(', ')}</p>
            </section>
        </main>
    )
}

const mapState = (state: IState) => ({
    users: state.users
})

export default connect(mapState, null)(UserDetails);