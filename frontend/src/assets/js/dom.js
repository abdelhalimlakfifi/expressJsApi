

// NewArkadian button to open the add Modal
// const newArkadianButton = document.getElementById("newArkadianButton");
// newArkadianButton.onclick = toggleModal


function appendUsersToTable(users)
{
    users.forEach(user => {
        let tbody = document.getElementById('tableBody');
        tbody.innerHTML += `
        <tr class="bg-white border-b" id="user_${user.id}">
            <th scope="row" class="id px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                ${user.id}
            </th>
            <th scope="row" class="name px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                ${user.name}
            </th>
            <td class="email px-6 py-4">
                ${user.email}
            </td>
            <td class="cin px-6 py-4">
                ${user.cin}
            </td>
            <td class="px-6 py-4">
                ${user.createdAt}
            </td>
            <td class="px-6 py-4 flex gap-4">
                <button data-id='${user.id}' onclick="editModal(${user.id})" class="modal-open editModal bg-transparent hover:bg-blue-500 text-blue-700 hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                    Edit
                </button>

                <button data-id='${user.id}'  onclick="deleteUser()" class="deleteUser bg-red-500 hover:bg-red-700 text-white py-2 px-4 rounded">
                    Remove
                </button>
            </td>
        </tr>
    `
    });

}

// Editing Modal
function editModal(id)
{
    var user = {
        name: document.querySelector('#user_' + id + ' > .name').innerHTML.trim(),
        email: document.querySelector('#user_' + id + ' > .email').innerHTML.trim(),
        cin: document.querySelector('#user_' + id + ' > .cin').innerHTML.trim()
    }

    document.getElementById('modalTitle').innerHTML = "Edit " + user.name;

    document.getElementById('name').value = user.name;
    document.getElementById('email').value = user.email;
    document.getElementById('cin').value = user.cin;
    document.getElementById('userId').value = id;
    document.getElementById('type').value = 'edit';
    toggleModal("edit");
}


function toggleModal(edit = null) 
{
    if (edit != "edit") 
    {
        document.getElementById('modalTitle').innerHTML = 'Add news Arkadian'
        document.getElementById('name').value = '';
        document.getElementById('email').value = '';
        document.getElementById('cin').value = '';
        document.getElementById('userId').value = '';
        document.getElementById('type').value = '';
    }
    const body = document.querySelector('body')
    const modal = document.querySelector('.modal')
    modal.classList.toggle('opacity-0')
    modal.classList.toggle('pointer-events-none')
    body.classList.toggle('modal-active')
}

function updateUserTable(updatedUser)
{
    document.querySelector('#user_' + updatedUser.id + ' > .name').innerHTML = updatedUser.name;
    document.querySelector('#user_' + updatedUser.id + ' > .email').innerHTML = updatedUser.email;
    document.querySelector('#user_' + updatedUser.id + ' > .cin').innerHTML = updatedUser.cin;
}

function addUserToTable(addeduser)
{
    document.getElementById('tableBody').innerHTML += `
                <tr class="bg-white border-b" id="user_${addeduser.id}">
                    <th scope="row" class="id px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                        ${addeduser.id}
                    </th>
                    <th scope="row" class="name px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                        ${addeduser.name}
                    </th>
                    <td class="email px-6 py-4">
                        ${addeduser.email}
                    </td>
                    <td class="cin px-6 py-4">
                        ${addeduser.cin}
                    </td>
                    <td class="px-6 py-4">
                        ${addeduser.createdAt}
                    </td>
                    <td class="px-6 py-4 flex">
                        <button  class="modal-open bg-transparent hover:bg-blue-500 text-blue-700 hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                            Edit
                        </button>
                        <button data-id="${addeduser.id}" class="bg-red-500 removeButton hover:bg-red-700 text-white py-2 px-4 rounded">
                            Remove
                        </button>
                    </td>
                </tr>
            `
}


function isEditModal()
{
    return document.getElementById('type').value == 'edit';
}
function clearForm()
{
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('cin').value = '';
    document.getElementById('userId').value = '';
    document.getElementById('type').value = '';
    document.getElementById('modalTitle').innerHTML = '';
}
// Modal Opening and closing
// const overlay = document.querySelector('.modal-overlay')
// overlay.addEventListener('click', toggleModal)

var closemodal = document.querySelectorAll('.modal-close')
for (var i = 0; i < closemodal.length; i++) {
    closemodal[i].addEventListener('click', toggleModal)
}

// document.onkeydown = function (evt) {
//     evt = evt || window.event
//     var isEscape = false
//     if ("key" in evt) {
//         isEscape = (evt.key === "Escape" || evt.key === "Esc")
//     } else {
//         isEscape = (evt.keyCode === 27)
//     }
//     if (isEscape && document.body.classList.contains('modal-active')) {
//         toggleModal()
//     }
// };

// var openmodal = document.querySelectorAll('.modal-open')
// for (var i = 0; i < openmodal.length; i++) {
//     console.log(openmodal[i]);
//     openmodal[i].addEventListener('click', function (event) {
//         event.preventDefault()
//         toggleModal()
//     })
// }