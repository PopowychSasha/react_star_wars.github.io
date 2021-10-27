import HomePage from "../containers/HomePage/HomePage";
import PeoplePage from "../containers/PeoplePage/PeoplePage";
import NotFoundPage from "../containers/NotFoundPage/NotFoundPage";
import PersonPage from "../containers/PersonPage/PersonPage";
import FavoritesPage from "../containers/FavoritesPage/FavoritesPage";
import ErrorMessage from "../components/ErrorMessage/ErrorMessage";
import SearchPage from "../containers/SearchPage/SearchPage";
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
    },
    {
        path:'/people/:id',
        exact:true,
        component:PersonPage
    },
    {
        path:'/favorites',
        exact:true,
        component:FavoritesPage
    },
    {
        path:'/not-found',
        exact:true,
        component:NotFoundPage
    },
    {
        path:'/fail',
        exact:true,
        component:ErrorMessage
    },
    {
        path:'/search',
        exact:true,
        component:SearchPage
    },
    {
        path:'*',
        exact:false,
        component:NotFoundPage
    }
];

export default routesConfig;