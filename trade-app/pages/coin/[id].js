import axios from 'axios';
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react';
import { CryptoState } from '../../AppContext';
import { SingleCoin } from '../../utils/endpoints';

const Post = () => {
//   const router = useRouter()
//   const { slug } = router.query
  const { query } = useRouter();
  const [coin, setcoin] = useState();
  const {currency , setcurrency} = CryptoState()

  const fetchcoin = async () =>{
     const {data} = await axios.get(SingleCoin(query.id));

     setcoin(data);
  }

  useEffect(() => {
    fetchcoin();
  }, [])

  console.log(coin);
  

  return (
    <div>
        <div >
            
        </div>

        {/* chart */}
    </div>
  )
}

export default Post