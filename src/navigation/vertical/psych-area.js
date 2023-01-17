export default [
    { heading: 'Área do Psicólogo' },
    {
        title: 'Clientes',
        icon: {icon: 'tabler-users'},
        children: [
            {
                title: 'Novo Cliente',
                to: 'forms-checkbox',
            },
            {
                title: 'Lista de Clientes',
                to: 'forms-checkbox',
            },
        ]
    },
    {
        title: 'Consultas',
        icon: {icon: 'tabler-license'},
        children: [
            {
                title: 'Nova Consulta',
                to: 'apps-appointments-new',
            },
            {
                title: 'Nova Referenciação',
                to: 'forms-checkbox',
            },
            {
                title: 'Calendário',
                to: 'forms-checkbox',
            },
        ]
    },
    {
        title: 'Anotações',
        icon: {icon: 'tabler-pencil'},
        to: 'forms-checkbox'
    },
    {
        title: 'Rating',
        icon: {icon: 'tabler-stars'},
        to: 'forms-checkbox'
    },
]
