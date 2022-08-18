import { useParams } from "react-router-dom";
import { getChatById } from "../../services/fakeAPI";


export default function Chat () {
    const { id } = useParams();
    const chat = getChatById(id);

    const { name, message, photoUrl } = chat;
    
     return (
    <main>
             <img src={photoUrl} alt={name} width='40px' height='40px' />
             <h2>{name }</h2>
      <ul>
                 {message.map(({ text, date }) => {
                     return (
                         <li key={date}>
                             <p>{ text}</p>
                             <p>{ date}</p>
                         </li>
                     );
            })}
      </ul>
    </main>
  );
};
