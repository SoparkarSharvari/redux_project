import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { updateUser } from '../redux/UserReducer';

function Update() {
    const { id } = useParams();
    const users = useSelector((state) => state.users);
    const existingUser = users.find((user) => user.id === parseInt(id));
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(updateUser({
            id: parseInt(id),
            name: event.target.name.value,
            email: event.target.email.value
        }));
        navigate('/');
    };

    return (
        <div className='d-flex w-100 vh-100 justify-content-center align-items-center'>
            <div className='w-50 border bg-secondary text-white p-5'>
                <h3>Update User</h3>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="name">Name:</label>
                        <input
                            type="text"
                            name='name'
                            className='form-control'
                            placeholder='Enter name'
                            defaultValue={existingUser ? existingUser.name : ''}
                        />
                    </div>
                    <div>
                        <label htmlFor="email">Email:</label>
                        <input
                            type="email"
                            name='email'
                            className='form-control'
                            placeholder='Enter email'
                            defaultValue={existingUser ? existingUser.email : ''}
                        />
                    </div>
                    <br />
                    <button type='submit' className='btn btn-info'>Submit</button>
                </form>
            </div>
        </div>
    );
}

export default Update;
