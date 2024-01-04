export const sendEmail = async(email, products) => {
    //const url = `https://api.giphy.com/v1/gifs/search?api_key=az0hsMZrbKats9ls4IAj8ibMAw8Nz0iA&q=${category}&limit=20`;
    const url = `https://rdeqqkkf08.execute-api.us-east-1.amazonaws.com/default/user-segmentation-send-email`;
    let prductsToSend;
    if(products.length < 6){
        prductsToSend = products;
    } else {
        prductsToSend = products.slice(0, 6);
    }
    const bodyMessage = {
        receivingEmail: email,
        courses: prductsToSend,
    };

    try {
        const resp = await fetch(url, {
            method: 'POST',
            body: JSON.stringify(bodyMessage),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        return await resp.json();
    } catch (error) {
        throw new Error(error);
    }
};