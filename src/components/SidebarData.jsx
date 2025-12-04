import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import EmailIcon from '@mui/icons-material/Email';

import SettingsIcon from '@mui/icons-material/Settings';

export const SidebarData =  [
    {
        title:"ホーム",
        icon: <HomeIcon />,
        link:"/home",
    },
    {
        title:"メール",
        icon: <EmailIcon />,
        link:"/mail",
    },
    {
        title: "詳細設定",
        icon: <SettingsIcon></SettingsIcon>,
        link:"/setting",
    }

]


