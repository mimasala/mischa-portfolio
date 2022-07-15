import CollectionsBookmarkIcon from '@mui/icons-material/CollectionsBookmark';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { SvgIconTypeMap } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";

export interface CollapseObject {
    displayName: string
    children: CollapseChild[]
}

interface CollapseChild{
    key: number
    displayName: string
    route: string
}

export const module: CollapseObject = {
    displayName: 'Module',
    children: 
    [
        {
            key:1,
            displayName: 'Module 1',
            route: '/module/1'
        },
    ]
}
