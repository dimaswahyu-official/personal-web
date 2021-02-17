import React from 'react'
import { Carousel } from 'antd';
import data from "./data";



function AppHero(){
    return(
       <div className="heroBlock">
           <Carousel>
               {data.map(data => {
                   return(
                     <div className="container-fluid">
                         <div className="content">
                             <h1>{data.title}</h1>
                             <p>{data.content}</p>
                         </div>

                     </div>
                   );
               })}
           </Carousel>
       </div>

    );
}

export default AppHero;