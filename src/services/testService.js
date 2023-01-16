import axios from 'axios';

const getScore = () => {
    const promise = axios
    .get('http://localhost:3001/romantic')
    // .then(response => {        
    //     console.log(typeof response)
    //     console.log('promise fulfilled')
    //     return response.data  
    // })
    return promise

    
}



export default { getScore };