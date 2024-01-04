export const getProductsServer = async(search) => {
    //const url = `https://api.giphy.com/v1/gifs/search?api_key=az0hsMZrbKats9ls4IAj8ibMAw8Nz0iA&q=${category}&limit=20`;
    const url = `https://rdeqqkkf08.execute-api.us-east-1.amazonaws.com/default/courses?userId=${search}`;
    const resp = await fetch(url);
    const {body} = await resp.json();

    const min = Math.ceil(1);
    const max = Math.floor(7);
    

    const products = body.map(product => {
        const image = Math.floor(Math.random() * (max - min) + min);
        return {
            id: product.id,
            courseName: product.course_name,
            hours: product.hours,
            price: product.price,
            url: `assets/images/${image}.png`
        }
    });
    
    return products;
};