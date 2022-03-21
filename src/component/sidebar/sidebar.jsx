import React from "react";
import * as IoIcons from 'react-icons/io'
import * as AiIcons from 'react-icons/ai'


export const sidebarData = [
    {
        title: 'Home',
        path: '/dashboard',
        icon: <AiIcons.AiFillHome />,
        nName: 'nav-text',
        sName: 'sidebar-text'
    },
    {
        title: 'Catalog',
        path: '/product',
        icon: <IoIcons.IoIosPaper />,
        nName: 'nav-text',
        sName: 'sidebar-text'
    },
]