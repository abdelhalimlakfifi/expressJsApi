import crud from "./crud.js";





const form = document.getElementById('addForm')

// On submit form (Adding user)
form.addEventListener("submit", (e) => {
    e.preventDefault();

    const user = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        cin: document.getElementById('cin').value,
    }


    if (isEditModal()) {
        let userId = document.getElementById('userId').value;
        crud.update(user, userId).then((updatedUser) => {
            updateUserTable(updatedUser)
        });
        toggleModal();
        clearForm()

        Swal.fire(
            'Good job!',
            'Arkadian Updated!',
            'success'
        )
    } else {
        crud.store(user).then((addeduser) => {

            if(addeduser.status === 403) {
                Swal.fire({
                    icon: 'error',
                    title: 'Not Authenticated!',
                    text: 'Oops...',
                })
                return 
            }
            toggleModal();
            addUserToTable(addeduser);
            clearForm()
        });
        Swal.fire(
            'Good job!',
            'Arkadian Added!',
            'success'
        )
    }
});
// End On submit form (Adding user)



// Fetch All data and append it on the table
crud.getAll().then((users) => {

    if(users.status === 403) {
        document.getElementById('newArkadianButton').remove();
        Swal.fire({
            title: 'Ooops!',
            text: 'Forbidden',
            imageUrl: 'https://i.pinimg.com/originals/9e/97/fc/9e97fc7736c9093308512cddea19f99e.gif',
            imageWidth: 400,
            imageHeight: 200,
            imageAlt: 'Custom image',
        })
        return 
    }
    appendUsersToTable(users);
    let deleteButtons = document.querySelectorAll('.deleteUser');

    for (let i = 0; i < deleteButtons.length; i++) {
        deleteButtons[i].addEventListener('click', (e) => {
            deleteArkadian(e.target.getAttribute('data-id'))
        });
    }
})
// Fetch All data and append it on the table





function deleteArkadian(id) {
    Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
        if (result.isConfirmed) {

            crud.deleteUser(id).then((res) => {
                removeElement(id);
                Swal.fire(
                    'Deleted!',
                    'Arkadian deleted.',
                    'success'
                )
            })
        }
    })
}