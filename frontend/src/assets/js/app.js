import crud from "./crud.js";

const form = document.getElementById('addForm')

let editId;

crud.store()

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const cin = document.getElementById('cin').value;

    const data = {
        name,
        email,
        cin
    }


    
    const url = 'http://localhost:3000/users'
    fetch(url, {
        method: 'POST',
        headers: {
            accept: 'application.json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: name,
            email: email,
            cin: cin
        }),
        cache: 'default'
    }).then((element) => {
        toggleModal();

        document.getElementById('name').value   =   '';
        document.getElementById('email').value  =   '';
        document.getElementById('cin').value    =   '';


        element.json().then(el => {
            console.log(el);
            document.getElementById('tableBody').innerHTML += `
            <tr class="bg-white border-b">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                    ${el.id}
                </th>
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                    ${el.name}
                </th>
                <td class="px-6 py-4">
                    ${el.email}
                </td>
                <td class="px-6 py-4">
                    ${el.cin}
                </td>
                <td class="px-6 py-4">
                    ${el.createdAt}
                </td>
                <td class="px-6 py-4 flex">
                    <button onclick="toggleModal('edit', el)" class="modal-open bg-transparent hover:bg-blue-500 text-blue-700 hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                        Edit
                    </button>

                    <button class="bg-red-500 hover:bg-red-700 text-white py-2 px-4 rounded">
                        Remove
                    </button>
                </td>
            </tr>
            `
        })
        Swal.fire(
            'Good job!',
            'You clicked the button!',
            'success'
        )
    });
});





const overlay = document.querySelector('.modal-overlay')
overlay.addEventListener('click', toggleModal)

var closemodal = document.querySelectorAll('.modal-close')
for (var i = 0; i < closemodal.length; i++) {
    closemodal[i].addEventListener('click', toggleModal)
}

document.onkeydown = function (evt) {
    evt = evt || window.event
    var isEscape = false
    if ("key" in evt) {
        isEscape = (evt.key === "Escape" || evt.key === "Esc")
    } else {
        isEscape = (evt.keyCode === 27)
    }
    if (isEscape && document.body.classList.contains('modal-active')) {
        toggleModal()
    }
};


function toggleModal(param = null, id=null) {

    console.log(id);
    if (param == 'edit') {
        document.getElementById('modalTitle').innerHTML = 'Edit Arkadian';
        document.getElementById('type').value = 'edit';
        editId = id;
    }else{
        document.getElementById('modalTitle').innerHTML = 'New Arkadian';
        document.getElementById('type').value = 'add';
    }


    const body = document.querySelector('body')
    const modal = document.querySelector('.modal')
    modal.classList.toggle('opacity-0')
    modal.classList.toggle('pointer-events-none')
    body.classList.toggle('modal-active')
}


fetchArkadians()

async function fetchArkadians()
{
    fetch('http://localhost:3000/users').then((res) => {
        res.json().then((data) => {
            

            data.forEach(element => {
                let tbody = document.getElementById('tableBody');
                let stringJson = JSON.stringify(element)
                tbody.innerHTML += `
                <tr class="bg-white border-b">
                    <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                        ${element.id}
                    </th>
                    <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                        ${element.name}
                    </th>
                    <td class="px-6 py-4">
                        ${element.email}
                    </td>
                    <td class="px-6 py-4">
                        ${element.cin}
                    </td>
                    <td class="px-6 py-4">
                        ${element.createdAt}
                    </td>
                    <td class="px-6 py-4 flex gap-4">
                        <button onclick="toggleModal('edit', ${element.id})" class="modal-open bg-transparent hover:bg-blue-500 text-blue-700 hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                            Edit
                        </button>

                        <button class="bg-red-500 hover:bg-red-700 text-white py-2 px-4 rounded">
                            Remove
                        </button>
                    </td>
                </tr>
                `
            });
        })
    })
}




var openmodal = document.querySelectorAll('.modal-open')
for (var i = 0; i < openmodal.length; i++) {
    console.log(openmodal[i]);
    openmodal[i].addEventListener('click', function (event) {
        event.preventDefault()
        toggleModal()
    })
}



