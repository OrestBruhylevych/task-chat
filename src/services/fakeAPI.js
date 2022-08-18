 export const chatsData = [
    {
        id: 'id-1',
        name: 'Rosie Simpson',
        message: [
            {
                text: 'Hello',
                date: '17.18.213'
            },
            {
                text: 'Hello',
                date: '17.18.241'
            }],
        photoUrl: 'https://discoverymood.com/wp-content/uploads/2020/04/Mental-Strong-Women-min.jpg'
    },
    {
        id: 'id-2',
        name: 'Hermione Kline',
        message: [
            {
                text: 'Hello',
                date: '17.18.251'
            },
            {
                text: 'Hello',
                date: '17.18.261'
            }],
        photoUrl: 'https://imageio.forbes.com/specials-images/imageserve/626bd95f640aebc53adeb25c/Headshot-of-author-Deepa-Purushothaman-wearing-white-shirt/960x0.jpg?format=jpg&width=960'
    },
    {
        id: 'id-3',
        name: 'Eden Clements',
        message: [
            {
                text: 'Hello',
                date: '17.18.271'
            },
            {
                text: 'Hello',
                date: '17.18.281'
            }],
        photoUrl: 'https://cdn.shopify.com/s/files/1/0045/5104/9304/files/Styling-American-Crew-Phillipe-RGMN_58cb1549-9653-4a1e-bbdc-4fee6c4bec4c.jpg?v=1648568598'
    },
    {
        id: 'id-4',
        name: 'Annie Copeland',
        message: [
            {
                text: 'Hello',
                date: '17.18.291'
            },
            {
                text: 'Hello',
                date: '17.18.201'
            }],
        photoUrl: 'https://www.international.gc.ca/world-monde/assets/images/issues_development-enjeux_developpement/gender_equality-egalite_des_genres/jacqueline_oneill.jpg'
    },
];


export const getChats = () => {
  return chatsData;
};

export const getChatById = (chatId) => {
  return chatsData.find((chat) => chat.id === chatId);
};