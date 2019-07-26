import React,{useState} from 'react'


export default function MediatorCases() {
    const [cases,setCases]= useState([])
    useEffect(() => {
        async function fetchCases() {
          const res = await axios.get(`${process.env.REACT_APP_API_URL}/users`);
          setCases(res.data);
        }
    
        fetchCases()
      }, [offset]);

    return (
        <div>
            
        </div>
    )
}
