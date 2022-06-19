import { SvgIconTypeMap } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";

export interface CollapseObject {
    icon: OverridableComponent<SvgIconTypeMap<{}, "svg">> & {muiName: string;}
    displayName: string
    children?: CollapseChild[]
}

interface CollapseChild{
    key: number
    displayName: string
    icon: OverridableComponent<SvgIconTypeMap<{}, "svg">> & {muiName: string;}
    route: string
}
