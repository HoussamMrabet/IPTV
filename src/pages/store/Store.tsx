import { FilterList, Footer, NavBar, ProductsList } from '../../components'

import "./store.css";

const Store = () => {
  return (
    <>
        <NavBar isHome={false} />
        <div className="store_content">
            <FilterList />
            <ProductsList />
        </div>
        <Footer isHome={false} />
    </>
  )
}

export default Store