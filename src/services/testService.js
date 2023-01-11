import axios from 'axios';

const testCreatePostButton = () => {
    const promise = axios
    .get('http://127.0.0.1:8000/musicgenerator/test/')
    .then(response => {        
        console.log('promise fulfilled')
        console.log(response.data)    
    })
}



export {testCreatePostButton};