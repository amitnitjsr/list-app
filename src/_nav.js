export default {
    items: [
        {
            name: 'Dashboard',
            url: '/dashboard',
            icon: 'icon-speedometer'
        },
        {
            name: 'Manage Medicine',
            url: '/medicine',
            icon: 'fa fa-film',
            children: [
                {
                    name: 'Add Medicine',
                    url: '/medicine/add',
                    icon: 'fa fa-plus-square',
                },
                {
                    name: 'Medicine List',
                    url: '/medicine/list',
                    icon: 'fa fa-list-alt',
                },
                {
                    name: 'Cart List',
                    url: '/medicine/cart',
                    icon: 'fa fa-list-alt',
                }
            ]
        },
    ],
};
