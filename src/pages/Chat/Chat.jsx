import { useParams } from "react-router-dom";
import { nanoid } from 'nanoid';
import { getMassegeFromChuck } from "services/chuckNorrisAPI";
import SendMessageForm from "components/SendMessageForm/SendMessageForm";
import { useState } from "react";
import { useEffect } from "react";


export default function Chat({ chats, setChats }) {
    const { id } = useParams();
    const [chat, setChat] = useState(() => (chats.find((chat) => chat.id === id)))
    const { name, message, photoUrl } = chat;

    useEffect(() => {
        setChat(chats.find((chat) => chat.id === id));
        
    }, [chats, id]);

    



    const addMessage =  (values) => {
        if (values.text.trim() === '') {
            return
        }

         setChats(prevState => {
          return prevState.map(chat => {

              if (chat.id === id) {
                
                    return  { ...chat, message: [...chat.message, values] };;
                }
                return chat;
          })
             

         })   
        
        
        setTimeout(() => {

  addMessageFromChuck();
}, 12000);
        
        
    }
    
    const addMessageFromChuck = () => {
        getMassegeFromChuck().then(res => {
          const newMassege = { text: '', id: '', date: '' }
          const date = new Date();
          newMassege.text = res;
          newMassege.id = nanoid();
            newMassege.date = date.toLocaleString();
            
            setChats(prevState => {
          return prevState.map(chat => {

              if (chat.id === id) {
                
                    return  { ...chat, message: [...chat.message, newMassege] };;
                }
                return chat;
            })

         })   
        }).catch(e => console.log(e))
        
        
    
        
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

            

             <SendMessageForm addMessage={addMessage}  />


    </main>
  );
};
