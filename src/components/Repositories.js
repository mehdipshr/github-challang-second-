import React, {useState, useEffect} from 'react'
import axios from 'axios';


export default function Api() {
    const [repo , setRepo] = useState({});
    let [index , setIndex]= useState([0]);

    useEffect( ( ) => {
        axios.get(`http://api.github.com/users/mehdipshr/repos?client_id=9feb87019af451a837fd&client_secret=05032c35adbf757b9a5914849b83b20fc74&sort=created`)
            .then( response => {
                // console.log(response);
                setRepo(response.data[index])
                
                
            })
            .catch( err => {
                console.log(err)
            })
    },[index])

    const pervPost = () =>{
        if(index > 0 )
        setIndex( index-- )
        console.log(index)
    }
    const nextPost = () =>{
        if(index >= 0)
        setIndex( index++ )
        
        

        console.log('next index', index)
    }
    return (
        <div>
            <table>
                <tr>
                    <th>Link</th>
                    <th>Description</th>
                </tr>
                <tr>
                    <td>
                        <a id='a' target="blank" href={repo.clone_url}> {repo.name}</a> 
                    </td>
                    <td>
                        {repo.description}
                    </td>
                </tr>
            </table>
            <div id='btn'>
                <button className='btn' onClick={pervPost}>pervious Repo</button>
                <button className='btn' onClick={nextPost}>next Repo</button>
            </div>
        </div>
    )
}
