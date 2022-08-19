import { FiUser } from 'react-icons/fi';


export default function User({photoUrl, name}) {
    

    return (
        <>
            {photoUrl ? <div>
                <img src={photoUrl} alt='user' width='50px' height='50px' />
                {name && <h2>{name }</h2>}
            </div> : <FiUser />}
            
        </>
    )
    
};
