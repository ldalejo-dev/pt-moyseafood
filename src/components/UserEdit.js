import React, {useState, useEffect} from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './style.css';


const UserEdit2 = () => {

    //variable con la url de la API
    const url = "https://jsonplaceholder.typicode.com/users"

    const[name, setName] = useState('');
    const[username, setUsername] = useState('');
    const[email, setEmail] = useState('');
    const[phone, setPhone] = useState('');

    const {id} = useParams();
    const redirect = useNavigate();


    useEffect( () => {
        const getUser = async() => {
            const params = {headers:{'content-type':'application/jason'},params:{id:id}};
            const response = await axios.get(url,params);
            setName(response.data[0].name);
            setUsername(response.data[0].username);
            setEmail(response.data[0].email);
            setPhone(response.data[0].phone);
        }
        getUser();
    },[]);

    const update = async (e) => {
        e.preventDefaul();
        await axios.put(url,{id:id,name:name,username:username,email:email,phone:phone});
        redirect('/');
    }

  return (
    <div>
        <h1>Editar usuario</h1>
        <div>
            <form onSubmit={update} className='form'>
                <fieldset>
                    <label>{name}</label>
                </fieldset>

                <fieldset>
                    <label>{username}</label>
                </fieldset>

                <fieldset>
                    <label>Email: </label>
                    <input type="text" id="email" maxLength="100"
                    required={true} value={email} onchange={(e) => setEmail(e.target.value)}>
                    </input>
                </fieldset>

                <fieldset>
                    <label>Teléfono: </label>
                    <input type="text" id="phone" maxLength="80"
                    required={true} value={phone} onchange={(e) => setPhone(e.target.value)}>
                    </input>
                </fieldset>

                <button className='button'><Link to={`/`}>Guardar</Link></button>
            </form>
        </div>
    </div>
  )
}
export default UserEdit2;