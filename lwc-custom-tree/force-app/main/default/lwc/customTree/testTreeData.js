const items = [
    {
        label: 'Root 1',
        key: '0',
        expanded: true,
        checked: false,
        selectable: true,
        items: [
            {
                label: 'Child 1.1',
                key: '0-0',
                expanded: true,
                checked: false,
                selectable: true,
                items: [
                    {
                        label: 'Grandchild 1.1.1',
                        key: '0-0-0',
                        checked: false,
                        selectable: false,
                    },
                    {
                        label: 'Grandchild 1.1.2',
                        key: '0-0-1',
                        checked: false,
                        selectable: false,
                    },
                    {
                        label: 'Grandchild 1.1.3',
                        key: '0-0-2',
                        expanded: false,
                        checked: false,
                        selectable: true,
                        items: [
                            {
                                label: 'Great Grandchild 1.1.3.1',
                                key: '0-0-2-0',
                                checked: false,
                                selectable: false,
                            },
                            {
                                label: 'Great Grandchild 1.1.3.2',
                                key: '0-0-2-1',
                                checked: false,
                                selectable: false,
                            },
                        ],
                    },
                ],
            },
            {
                label: 'Child 1.2',
                key: '0-1',
                expanded: false,
                checked: false,
                selectable: true,
                items: [
                    {
                        label: 'Grandchild 1.2.1',
                        key: '0-1-0',
                        checked: false,
                        selectable: false,
                    },
                    {
                        label: 'Grandchild 1.2.2',
                        key: '0-1-1',
                        checked: false,
                        selectable: false,
                    },
                ],
            },
            {
                label: 'Child 1.3',
                key: '0-2',
                expanded: false,
                checked: false,
                selectable: false,
            },
        ],
    },
    {
        label: 'Root 2',
        key: '1',
        expanded: false,
        checked: false,
        selectable: true,
        items: [
            {
                label: 'Child 2.1',
                key: '1-0',
                expanded: false,
                checked: false,
                selectable: true,
                items: [
                    {
                        label: 'Grandchild 2.1.1',
                        key: '1-0-0',
                        checked: false,
                        selectable: false,
                    },
                    {
                        label: 'Grandchild 2.1.2',
                        key: '1-0-1',
                        checked: false,
                        selectable: false,
                    },
                    {
                        label: 'Grandchild 2.1.3',
                        key: '1-0-2',
                        expanded: false,
                        checked: false,
                        selectable: true,
                        items: [
                            {
                                label: 'Great Grandchild 2.1.3.1',
                                key: '1-0-2-0',
                                checked: false,
                                selectable: false,
                            },
                            {
                                label: 'Great Grandchild 2.1.3.2',
                                key: '1-0-2-1',
                                checked: false,
                                selectable: false,
                            },
                        ],
                    },
                ],
            },
            {
                label: 'Child 2.2',
                key: '1-1',
                expanded: false,
                checked: false,
                selectable: true,
                items: [
                    {
                        label: 'Grandchild 2.2.1',
                        key: '1-1-0',
                        checked: false,
                        selectable: false,
                    },
                    {
                        label: 'Grandchild 2.2.2',
                        key: '1-1-1',
                        checked: false,
                        selectable: false,
                    },
                ],
            },
        ],
    },
    {
        label: 'Root 3',
        key: '2',
        expanded: false,
        checked: false,
        selectable: true,
        items: [
            {
                label: 'Child 3.1',
                key: '2-0',
                expanded: false,
                checked: false,
                selectable: true,
                items: [
                    {
                        label: 'Grandchild 3.1.1',
                        key: '2-0-0',
                        checked: false,
                        selectable: false,
                    },
                    {
                        label: 'Grandchild 3.1.2',
                        key: '2-0-1',
                        checked: false,
                        selectable: false,
                    },
                ],
            },
            {
                label: 'Child 3.2',
                key: '2-1',
                expanded: false,
                checked: false,
                selectable: true,
                items: [
                    {
                        label: 'Grandchild 3.2.1',
                        key: '2-1-0',
                        checked: false,
                        selectable: false,
                    },
                    {
                        label: 'Grandchild 3.2.2',
                        key: '2-1-1',
                        checked: false,
                        selectable: false,
                    },
                ],
            },
            {
                label: 'Child 3.3',
                key: '2-2',
                expanded: false,
                checked: false,
                selectable: true,
                items: [
                    {
                        label: 'Grandchild 3.3.1',
                        key: '2-2-0',
                        checked: false,
                        selectable: false,
                    },
                    {
                        label: 'Grandchild 3.3.2',
                        key: '2-2-1',
                        checked: false,
                        selectable: false,
                    },
                ],
            },
        ],
    },
    {
        label: 'Root 4',
        key: '3',
        expanded: false,
        checked: false,
        selectable: true,
        items: [
            {
                label: 'Child 4.1',
                key: '3-0',
                expanded: false,
                checked: false,
                selectable: true,
                items: [
                    {
                        label: 'Grandchild 4.1.1',
                        key: '3-0-0',
                        checked: false,
                        selectable: false,
                    },
                    {
                        label: 'Grandchild 4.1.2',
                        key: '3-0-1',
                        checked: false,
                        selectable: false,
                    },
                ],
            },
            {
                label: 'Child 4.2',
                key: '3-1',
                expanded: false,
                checked: false,
                selectable: true,
                items: [
                    {
                        label: 'Grandchild 4.2.1',
                        key: '3-1-0',
                        checked: false,
                        selectable: false,
                    },
                    {
                        label: 'Grandchild 4.2.2',
                        key: '3-1-1',
                        checked: false,
                        selectable: false,
                    },
                ],
            },
        ],
    },
    {
        label: 'Root 5',
        key: '4',
        expanded: false,
        checked: false,
        selectable: true,
        items: [
            {
                label: 'Child 5.1',
                key: '4-0',
                expanded: false,
                checked: false,
                selectable: true,
                items: [
                    {
                        label: 'Grandchild 5.1.1',
                        key: '4-0-0',
                        checked: false,
                        selectable: false,
                    },
                    {
                        label: 'Grandchild 5.1.2',
                        key: '4-0-1',
                        checked: false,
                        selectable: false,
                    },
                ],
            },
            {
                label: 'Child 5.2',
                key: '4-1',
                expanded: false,
                checked: false,
                selectable: true,
                items: [
                    {
                        label: 'Grandchild 5.2.1',
                        key: '4-1-0',
                        checked: false,
                        selectable: false,
                    },
                    {
                        label: 'Grandchild 5.2.2',
                        key: '4-1-1',
                        checked: false,
                        selectable: false,
                    },
                ],
            },
        ],
    },
];

export default items;