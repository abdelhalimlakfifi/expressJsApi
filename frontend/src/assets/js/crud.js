async function store(user)
{

    const url = 'http://localhost:3000/users'
    
    let addedUser = await fetch(url, {
        method: 'POST',
        headers: {
            accept: 'application.json',
            'Content-Type': 'application/json'
        },
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


    let users = await fetch(url);

    return users.json()
}

export default {store, getAll}