import React, {useState, useHistory} from 'react'
import { axiosWithAuth } from '../utils/axiosWithAuth'

function AddFriendForm() {
    const [formValues, setFormValues] = useState({
        name: "",
        age: '',
        email: '',
    })

    const { push } = useHistory();

    const handleChanges = e => {
        setFormValues({...formvalues, [e.target.name]: e.target.value})
    }

    const handleSubmit = e => {
        e.preventDefault();
        axiosWithAuth()
        .post('/api/friends', formValues)
        .then(res => {
            console.log(res)
            push('/friends')})
        .catch( err => console.log({err}))
    }
    return (
        <div>
            <h3>Add New Friend</h3>
            <form onSubmit={handleSubmit}>
                <label htmlFor='name'>Name</label>
                <input id="name" name="name" value={formValues.name} onChange={handleChanges}/>
                <label htmlFor='age'>Age</label>
                <input id="age" name="age" value={formValues.age} onChange={handleChanges}/>
                <label htmlFor='email'>Email</label>
                <input id="email" name="email" value={formValues.email} onChange={handleChanges}/>
                <button>Add a Friend</button>
            </form>

        </div>
    )
}

export default AddFriendForm
