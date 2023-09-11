const token = '1gwgleaz3781gwgleaz378'
async function store(user)
{

    const url = 'http://localhost:3000/users'
    
    let addedUser = await fetch(url, {
        method: 'POST',
        headers: {
            accept: 'application.json',
            'Content-Type': 'application/json',
            authentication: token
        },
        mode:'cors',
        body: JSON.stringify({
            name: user.name,
            email: user.email,
            cin: user.cin
        }),
        cache: 'default'
    })


    return addedUser.json();
    
}




async function getAll()
{
    const url = 'http://localhost:3000/users';
    // const token = 'xrzvb9itjkxrzvb9itjk'
    

    let users = await fetch(url,{headers: {authentication: token}});


    return users.json()
}

async function update(user, id)
{
    const url = 'http://localhost:3000/users/'+id;
    // console.log(url);



    let updatedUser = await fetch(url, {
        method: 'PUT',
        headers: {
            accept: 'application.json',
            'Content-Type': 'application/json',
            authentication: token
        },
        body:JSON.stringify({
            name: user.name,
            email: user.email,
            cin: user.cin
        }),
    })


    return updatedUser.json();
}


async function deleteUser(id)
{
    const url = 'http://localhost:3000/users/'+id;


    let deletedUser = await fetch(url, {
        method: 'DELETE',
        headers: {
            authentication: token
        },
    })


    return deletedUser.json();
}
export default {store, getAll, update, deleteUser}