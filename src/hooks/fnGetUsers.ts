import axios from 'axios';
import { useEffect, useState } from 'react';

function fnGetUsers(url){
    const [data, setName] = useState({users:[]});
    useEffect(() => {         
       axios.get(url).then(response=>{
        setName({users: response.data});
        });      
        
    }, []);
return data;    
}
export default fnGetUsers;