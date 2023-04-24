import React,{useState, useEffect} from 'react';
import {Table, TableContainer,TableRow,TableHead,TableCell, TableBody} from '@mui/material';
import {Edit} from '@mui/icons-material';

const UsersTable = () => {
    //setear los hooks
    const [users, setUsers] = useState([])
    const [search, setSearch] = useState("")

    //variable con la url de la API
    const url = "https://jsonplaceholder.typicode.com/users"

    const showData = async  () => {
        const response = await fetch(url)
        const data = await response.json()
        setUsers(data)
    }

    //funcion para la busqueda de usuarios
    const searcher = (e) => {
        setSearch(e.target.value)
    }

    //metodo de filtrado por Nombre, alias, email o telefono
    let results = []
    if (!search){
        results = users
    } else {
        results = users.filter( (datas) => 
        datas.name.toLowerCase().includes(search.toLocaleLowerCase()) || 
        datas.username.toLowerCase().includes(search.toLocaleLowerCase()) ||
        datas.email.toLowerCase().includes(search.toLocaleLowerCase()) ||
        datas.phone.includes(search)
        )
    }


    useEffect( () => {
        showData();
    },[])



  return (
    <div>
        <input type="text" placeholder='Buscar' value={search} onChange={searcher}></input>
        <TableContainer>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Nombre</TableCell>
                        <TableCell>Alias</TableCell>
                        <TableCell>Email</TableCell>
                        <TableCell>Teléfono</TableCell>
                        <TableCell>Editar</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {results.map( (user) => (
                        <TableRow key={user.id}>
                            <TableCell>{user.name}</TableCell>
                            <TableCell>{user.username}</TableCell>
                            <TableCell>{user.email}</TableCell>
                            <TableCell>{user.phone}</TableCell>
                            <TableCell><Edit/></TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    </div>
  )
}

export default UsersTable;