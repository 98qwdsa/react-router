import Home from '../Hook/PraApp-com';
import Art from '../Hook/PraApp-com';
import Math from '../Hook/PraApp-com';
import Result from '../Hook/PraApp-com';


const routerDomConf = [
    {
        path:"/home",
        component:Home,
        exact:true
    },
    {
        path:"/art",
        component:Art
    },
    {
        path:"/math",
        component:Math
    },
    {
        path:"/result",
        component:Result
    }
]
export default routerDomConf;