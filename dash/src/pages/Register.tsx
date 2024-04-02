import React, { ChangeEvent, FormEvent, useState } from 'react'
import axios from 'axios';

interface formData{
    username: string;
    email: string;
    password: string;
}
function Register() {
    const[data, setData] = useState<formData>({
        username:'',
        email:'',
        password:'',
    });

    const handleChange=(e: ChangeEvent<HTMLInputElement>)=>{
        const{name,value} = e.target;
        setData({...data,[name]:value});
    };

    const handleSubmit = async(e:FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        try{
            await axios.post('http://localhost:5000/add',data);
            alert('admin added successfully');
        }
        catch(error){
            alert('failed to add admin');
        }
    }
  return (
    <>
    Add admin
        <form onSubmit={handleSubmit}>
            <input type="text" name="username" id="username" value={data.username} onChange={handleChange}/>
            <input type="email" name="email" id="email" value={data.email} onChange={handleChange}/>
            <input type="text" name="password" id="password" value={data.password} onChange={handleChange}/>
            <button type='submit'>Create</button>
        </form>
    </>
  )
}

export default Register