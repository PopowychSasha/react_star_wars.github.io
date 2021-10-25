import HomePage from "../containers/HomePage/HomePage";
import PeoplePage from "../containers/PeoplePage/PeoplePage";

const routesConfig = [
    {
        path:'/',
        exact:true,
        component:HomePage
    },
    {
        path:'/people',
        exact:true,
        component:PeoplePage
    }
];

export default routesConfig;