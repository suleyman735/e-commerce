import React from 'react'
import Products from './Products'
import "./Home.css"
function Home() {
  return (
    <div>
        <div className='home'>
            <div className="home__container">
                <img src="https://storage-cdn-01.myecomz.com/assets/e-shop-home/Theme/01645fefd88340219fcb56005d99b3cf-Optimal.png" alt="" className="home__image" />
                <div className="home__row">

                </div>
                <div className="home__row">
                    <Products
                    id="1"
                     title = "this is first shows" 
                              price={11.96}
                              image="https://www.charleskeith.eu/dw/image/v2/BCWJ_PRD/on/demandware.static/-/Sites-ck-products/default/dw5792b88f/images/hi-res/2021-L3-CK2-30781483-51-1.jpg?sw=756&sh=1008"
                              rating={1} />
                    <Products 
                                id="2"
                                title = "this is second shows" 
                                         price={15}
                                         image="https://www.charleskeith.eu/dw/image/v2/BCWJ_PRD/on/demandware.static/-/Sites-ck-products/default/dw5792b88f/images/hi-res/2021-L3-CK2-30781483-51-1.jpg?sw=756&sh=1008"
                                         rating={1}                      
                    />
                    
                    </div>
                    <div className="home__row">
                    <Products
                                id="4"
                                title = "this is first shows" 
                                         price={20}
                                         image="https://www.charleskeith.eu/dw/image/v2/BCWJ_PRD/on/demandware.static/-/Sites-ck-products/default/dw5792b88f/images/hi-res/2021-L3-CK2-30781483-51-1.jpg?sw=756&sh=1008"
                                         rating={1}              
                    />
                    <Products
                                id="5"
                                title = "this is first shows" 
                                         price={40}
                                         image="https://www.charleskeith.eu/dw/image/v2/BCWJ_PRD/on/demandware.static/-/Sites-ck-products/default/dw5792b88f/images/hi-res/2021-L3-CK2-30781483-51-1.jpg?sw=756&sh=1008"
                                         rating={5}               
                    />
                    <Products
                                id="6"
                                title = "this is first shows" 
                                         price={50}
                                         image="https://www.charleskeith.eu/dw/image/v2/BCWJ_PRD/on/demandware.static/-/Sites-ck-products/default/dw5792b88f/images/hi-res/2021-L3-CK2-30781483-51-1.jpg?sw=756&sh=1008"
                                         
                                         rating={4} 
                    />
                    
                    </div>
                    <div className="home__row">
                    <Products/>
                    <Products/>
                    
                    </div>
            </div>

        </div>
    </div>
  )
}

export default Home