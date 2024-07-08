import Cart from '../pages/Cart'
import FilterProductByCategory from '../pages/FilterProductByCategory'
import Home from '../pages/Home'
interface Route {
  path: string
  component: () => JSX.Element
}
const publicRoute: Route[] = [
  { path: '/', component: Home },
  { path: "/men's clothing", component: FilterProductByCategory },
  { path: '/jewelery', component: FilterProductByCategory },
  { path: '/electronics', component: FilterProductByCategory },
  { path: "/women's clothing", component: FilterProductByCategory },
  { path: '/cart', component: Cart }
]

export { publicRoute }
