import { Box } from "components/Box/Box";
import { MassegeItemStyledFromUser, MassegeItemStyledNotFromUser } from "./MassegeList.styled";



export default function MassegeList({message}) {
    
    return (
        <Box as='ul' p={4} >
            {message.map(({ text, date, id, fromUser }) => {

                     if (fromUser === true) {
                         return (
                         <MassegeItemStyledFromUser key={id}>
                             <p>{ text}</p>
                             <p>{ date}</p>
                         </MassegeItemStyledFromUser>
                     );
                     }
                    
                
                
                     return (
                         <MassegeItemStyledNotFromUser key={id}>
                             <p>{ text}</p>
                             <p>{ date}</p>
                         </MassegeItemStyledNotFromUser>
                     );
            })}
             </Box>
    );
    
};
