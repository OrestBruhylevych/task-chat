import { useParams } from "react-router-dom";
import SendMessageForm from "components/SendMessageForm/SendMessageForm";


export default function Chat({ chats, setChats }) {
    const { id } = useParams();
    const chat = chats.find((chat) => chat.id === id);

    const { name, message, photoUrl } = chat;

    const addMessage = (values) => {
        if (values.text.trim() === '') {
            return
        }
        

       
        const chatUpdate = { ...chat, message: [...chat.message, values] };
        
    setChats(prevState => {
          
        return prevState.map(chat => {

            if (chat.id === id) {
                    return chatUpdate;
                }
                return chat;
            })

    })   
        
    }
    
  
    

    

    
    
     return (
    <main>
             <img src={photoUrl} alt={name} width='40px' height='40px' />
             <h2>{name }</h2>
      <ul>
                 {message.map(({ text, date, id }) => {
                     return (
                         <li key={id}>
                             <p>{ text}</p>
                             <p>{ date}</p>
                         </li>
                     );
            })}
             </ul>

            

             <SendMessageForm onSubmit={addMessage} />


    </main>
  );
};
