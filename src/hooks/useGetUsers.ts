import axios from 'axios';
import { useEffect, useState } from 'react';
const url='https://jsonplaceholder.typicode.com/users';
function useGetUsers(){
    const [data, setName] = useState({users:[]});
    useEffect(() => {         
       axios.get(url).then(response=>{
        setName({users: response.data});
        });      
        
    }, []);
return data;    
}
export default useGetUsers;