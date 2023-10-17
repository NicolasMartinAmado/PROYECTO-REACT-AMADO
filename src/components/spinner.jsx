import { useEffect, useState } from 'react';
import LoginInput from './hooks/LogInInput';
import BasicExample from './sp';
import SizesExample from './sp';

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
              (<LoginInput />)}
      </div>
 
     </>


  )
}

export default Loading;