import Art from '../components/artCalculator'
import Mathe from '../components/MathCalulator'
import home from '../App'
  const routerlist=[
 
    {
        tap:"输入艺术成绩",
        path:"/artCalculator",
        component:Art,
    },

    {   
        tap:"输入数学成绩",
        path:"/mathCalculator",
        component:Mathe,
    },
    {
        tap:"查看结果",
        path:"/Home",
        component:home,
    }
    
]
export default routerlist
//路由表