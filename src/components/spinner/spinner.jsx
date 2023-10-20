import { useEffect, useState } from 'react';

import BasicExample from './sp';
import LoginInput from '../../hooks/LogInInput';

function Loading() {
    const [isloading, setloading] = useState(true)

   useEffect(()=> {
    setTimeout(() => {
        setloading(false)
    }, 4000);
 
   },[])

  return(
    <><div>
          {isloading
              ? (
                  <BasicExample />

              ) :
              (<LoginInput/>)}
      </div>
 
     </>


  )
}

export default Loading;