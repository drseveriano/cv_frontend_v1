import mock from '@/@fake-db/mock'

const data = {
    clients: [
        {
            id: 1,
            picture: '',
            fullName: 'Cliente X1',
            email: 'cliente1@x.pt'
        },
        {
            id: 2,
            picture: '',
            fullName: 'Cliente X2',
            email: 'cliente2@x.pt'
        },
        {
            id: 3,
            picture: '',
            fullName: 'Cliente X3',
            email: 'cliente3@x.pt'
        },
        {
            id: 4,
            picture: '',
            fullName: 'Cliente X4',
            email: 'cliente4@x.pt'
        },
        {
            id: 5,
            picture: '',
            fullName: 'Cliente X5',
            email: 'cliente5@x.pt'
        },
    ]
}

mock.onGet('/apps/appointments/new/client/list').reply(config => {
    return [200, data.clients]
})

