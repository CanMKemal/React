import axios from 'axios'

async function getData(number){

    const {data : user } = await axios (`https://jsonplaceholder.typicode.com/users/${number}`);
    const {data : post } = await axios (`https://jsonplaceholder.typicode.com/posts?userId=${number}`);
    
    /* const postVerified = post.filter(item => item.id==`${number}`);
    return {user , postVerified} ; */

    return {user, post};
}


export default getData;