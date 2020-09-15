import Art from '../components/artCalculator'
import Mathe from '../components/MathCalulator'
import Home from '../components/Home'
  const routerlist=[
    {   
        tap:"首页",
        path:"/Home",
        component:Home,
    },
    {
        tap:"艺术计算器",
        path:"/artCalculator",
        component:Art,
    },

    {   
        tap:"数学计算器",
        path:"/mathCalculator",
        component:Mathe,
    }
    
]
export default routerlist
//路由表