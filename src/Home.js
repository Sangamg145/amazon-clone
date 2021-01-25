import React from 'react'
import main1 from './main1.jpg'
import Product from './Product.js'
import './App.css';
function Home() {
    return (
        <div className='Homepag'>
             <div>
 
 <img src={main1} alt='abc' className='mainimg' />
</div>

<div className='dv'>
<Product 
id={'123'}
title={'Dell i3 Laptop With 8th Generation 4GB/1TB'}
price={34999}
rating={5}
image={"https://i.dell.com/sites/csimages/Video_Imagery/all/xps_7590_touch.png"}
buton={"Add To Cart"}
buton1={"Buy Now"}
/>
<Product 
id={'124'}
title={'Mi i5 With 10th Generation 8GB/256GB SSD'}
price={45999}
rating={5}
image={"https://i.gadgets360cdn.com/products/large/mi-gaming-laptop-2019-1200x800-1565002801.jpg"}
buton={"Add To Cart"}
buton1={"Buy Now"}
/>

</div>
<div className='dvv'>
<Product 
id={'125'}
title={'Oppo A9 With SD730'}
price={12999}
rating={5}
image={"https://images-na.ssl-images-amazon.com/images/I/71bp9IpcK-L._SX522_.jpg"}
buton={"Add To Cart"}
buton1={"Buy Now"}
/>
<Product 
id={'126'}
title={'One Plus 7T Pro'}
price={36999}
rating={5}
image={"https://static.digit.in/product/thumb_162999_product_td_300.jpeg"}
buton={"Add To Cart"}
buton1={"Buy Now"}
/>
<Product 
id={'127'}
title={'Redmi 9A'}
price={6799}
rating={5}
image={"https://i01.appmifile.com/webfile/globalimg/in/cms/F889619D-5CCC-A9AB-2A4D-50B281B536A1.jpg"}
buton={"Add To Cart"}
buton1={"Buy Now"}
/>
</div>
<div className='dvv'>
<Product 
id={'128'}
title={'T-Shirts For Men'}
price={399}
rating={5}
image={"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBw8QEBAQDxAQEBAPEA4NDw8PEA8PDw0QFREWFhURFRUYHSggGBolGxUVITEhJSkrLi4uGB8/ODMtNyg5LisBCgoKBQUFDgUFDisZExkrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrK//AABEIAOEA4QMBIgACEQEDEQH/xAAcAAEAAQUBAQAAAAAAAAAAAAAAAgEDBAcIBgX/xABHEAACAgEBBAYFCAQMBwAAAAAAAQIDEQQFITFBBgcSUWFxEyKBkaEUIzJygrHB0SRSkvAIFTM0QkNTZHOissJUYmN0o8Ph/8QAFAEBAAAAAAAAAAAAAAAAAAAAAP/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/ANGgAAAAAAAAAAD6mw+j2s10uzpNPZc1ulKKxXD603iMfaza/RPqVisWbSt9Jz+T0OUYfbs3N+UcebA1p0R6IavadnY08cQi0rL55VVXt5vwRspdDpaeyVOk+T0wq+a+UTg7tVdKO6dknucE5J4ipYSxzNt7J2ZRpYRqorhVXFYjCEVGK/8AvifG6Q6X0d3pF9G3f5TXFe3c/eB4+no5q2sT197/AMNOC90pSLsOiVz47Q1/sspj/wCs9do5JoyuyB5GHRi5bv4x2lj/ALiP4QKy6LW/8dr89/p4N/GB65ImkB4G/otq8YjrZ2LnHV0x1EZLuaTivgfD2h1c2aztwVWk090IOdOo0+aq7mml6K2lRSjnLalHLWN+d2NuOCJ0UpZl37vYByTtbZl2lunRqIOuyt4lF/enzXiYZ07056D6fadfr/N3w/k74pOUf+WS/pR8DSvSXq02lok5qv5TSv6zT5k4rvlX9JeayvEDxgAAAAAAAAAAAAAAAAAAAHuerfq9t2pP0trlVo4PEpr6d0lxhXn4y5ePIPldFehOu2k80VqNSfZlqLW4VJ80njMn4RTNvdGep7Q0YlqnLWWLf6+a6E88q4vL+1Jp9x77ZeyKdLVCjTwVdVcVGEI5wlne88W222297bM9RAsaTQ11QjCuEYQgsRhCMYQgu6MVuRkpEkVAiWtbpY3VuEt2d6f6slwZewUyB43E6LHCaw17muTXej6tFqkj62s0td0ezZHOODW6UfJnyHseyt/NTU490vVl+T+AF8uRQq01nOOPtRf4mRDTPm17N7AhXDtPC9vgX2uS5EnKMVhEI7wJYIusuIAeU6Q9Atm61ud2nirHxtqbqsb724/S9uTX22upVb3o9U1xxDUxym/rwW79lm6myOOHsA5E25se/RXz0+oh2LIe2M4vhOL5xff+JgHVPS7ojpNp1ej1EcTjl03w3W0yfc+ce+L3PzSa5t6U9Hr9namemvW9YlCa+hdW2+zZHweH5NNcgPkAAAAAAAAAAAAAPo9Htkz1uqo0tf0rrFDPHsR4ynjwim/YdY7D2bVpaK6KYqFdUVCEfBc33t8W+bZp/qE2D/L6+a5/JKG88kp2y+Naz9Y3bECTREkiKAmgUTK5AqGCuALUkQTZekQYEXN+BbnKTLjKYAtRgXYoYKgMlGCmQEtyI1/gUkyUHuArFfBnhetvo1HXaG2cI/P6JS1FTSzKcEvna+/fFZwucYnt+3jPtZCjfx354rvQHHQPpdJdn/JdZqtOlhUai6qOd/qRm1F+7B80AAAAAAAAAAet6rNhfLdqaeDXzdMvld31Kmmk/BycI/aA3/0L2L8h0Wi0rWJwp7dv+NZ69nuk2vJI9B2uX74LVz9fPck/jvL1kcoCcHnf4EUyFG5Nd3DyKgTKohklEC4irKRKyAhJkSsiGQKlcEckkBQiyTIMBkg2VbIgMFUyDZVgY+rs3Y5yaS8uZfpR8+23N3hH1YrvfNn0orGFz5gc6ddWzvQ7WtkuGpqp1KXdlOt/5q2/aeDN4fwgtluVGk1cV/JWT09mFndYlKDfck4SX2kaPAAAAAAAAAG/eoXYPodHbrJrE9ZPsV55UVNrK85uX7CNF7N0kr7qaItKV1tdMXJ4ipTkopt9287A2ds+vT01aetYrorhTDv7MIpJvx3AH9JeKaJLdufLd+Qcd/kTnECmPh9xFlIT3PyZVgEXIltMlGWQL6IyZVstyYEZSIJlJyCAmmTTLaJZAMg2SfAtNgUkyLZVlAKRGos7MXLuWV58viSaMXaD9THfKK+9/kBi7Lr9Z2S5bl+Z9One+0+fwMLS8Ely4mdED5HTbY/y7Z+q0yXanOpyqXD56Hr1rPjKKXtOUTsyKOUendNENpa1aayFtLvnZCdbTh6/ruEWtzUXJx3fqgfBAAAAAAAAPVdGusLamz1GNOoc6Y7lRqF6WpLHCOd8F4RaPKgDfnRzrq0drUddVPSzf9ZDN1D8XhdqPlh+ZsfZu19Lqo9rTaim+PP0VkJ480nle048J1WSi1KMnGS3qUW00+9NAdh28Sae5eSOWdB072tQsV669rutkr0vJWKWEdL7C1bu0mlulxu02nue7G+dUZPdy4gZ7kTqLCW8uye4CSlkXPBWlFvUMCEd5caKVLcTkBFFSiCAlLgYr4mVPgYt3ICSBGLJASij5+1Lsy7K4QWPtPf92D6Ce45061NramG1tbCGouhBSpXYhbZGC/R68+qnjiBvOvW1VQ7d1tdUeLlbONcV7ZNI+NtbrN2Rpk/0n5RNLKr0sXa5fb3Q/wAxzZZZKTcpNyk+Lk22/NsiB7vpv1nazaPapr/RdI8r0Vb+cuj/ANWfNcfVWFv35xk8IAAAAAAAAAAAAAAADq3oRLOy9nv+5aVe6qK/A5SOperuztbJ0D/u8I/s5j+AHoolW8simVrW8DJgtxjXveZXIw7HvAvUrcVkVp4FJARQzvCKcwLkuBi3r1TJfAszWYsCxUy4zHqe8vtgSZzD1l29ra+vec4vlD9lKOPgdOx4o5T6YWdraOvl+trdXL33SA+QAAAAAAAAAAAAAAAAAAB071WWqex9C1yrsh3b43Ti/ijmI6Q6mrM7H0y/VnqY/wDnnL/cB7VlyhFmT3mRQBdm9xhy4mVY9xi8wMurgRkTr4EJAQRF8SRDmBdIR5okRr4gfPe6TMiLLGpWJFytgXa+K8zkXadysvumt6nbbNPvUpt/ida3TcYzkt7UJteLSbOQQAAAAAAAAAAAAAAAAAAAHQ3UhZnZKX6uovj/AKX+Jzyb86hZt7NuT4R1lqXgvQ0v72wNjRW9mVWtxjLiZK4IBa9xjw4l65luCAyYcCEiceBCQECJJkWBMgnvRVEZAY20I7y3TIydfHKyYVEgMtRymu9Ne9HH52DRxRyFfDszkk84lJZXB4fEC2AAAAAAAAAAAAAAAAAABvXqBl+g6ld2qz76ofkaKN1fwfbs066Gfo2UTx9aM1/s+AG2oLeZBYr4l1MCNpSInxKxAvLgQkSRGQEGRZWRECSIzJIjMCt6zA+VW8M+ut8T5FqxID6FD3nH8nlt9+86+0zOQAAAAAAAAAAAAAAAAAAAAG3v4PkvX2gu+OlePJ2/mahNr9QE/n9au+ql+6cvzA3fWSiyC4EkBQrEoyoF2LIsqiLAhJkSsigEiMypCQFylnztfHDM6lljaEMgQol6rfdFv4HIx1lCeK7PCE3/AJWcmgAAAAAAAAAAAAAAAAAAANo9Qdi+WaqHOWmU134jbFP/AFI1cbB6j9R2Nq4/tdNfX8Yz/wBgHQfciZHJXIAkiOSqAuEWypFgQkRKyKAVyQmyRbmwEGXNUsxyWYmRHesAfNjHKku+Ml70cmHW8lhvHHEvuOSAAAAAAAAAAAAAAAAAAAAHtOqBtbW0+P1L8+XopHiz2XVHJratOP7LU58vQyf3pAdJIqUiw5dwFSUSOSsQJkWVIsCMmRyVkQyBVyLUmSky1kCaZdqkWCqkBgfxxTPVLTxU1LsXWqxpKuXorfRzit/aypdrlj1Xhs5TOgNva2FN8tQo9lae7Uaac3hJuzSai6ST5r16W+5p95z+AAAAAAAAAAAAAAAAAAAA9p1R6iENpwUnh2U6iuHjJwzj3JnizI0GsnRbXdW8TqnGyD5Zi8rPevADrelZSxv8t5cUX3P2mtth9bWzZwj8o9JpppJSUq5WwT59mUMtrzSPU6Xp1smxerr9Mv8AEs9F/rwB6Hf3Eoxfcz51HSHQz+hrdLL6uppf3SM6rXVS+jdXL6tkX9zAuYIl5SfJ5+JCTf7pAY8pFC5LPcvciDk/3SAtyZBl1uX7pEG5fukBSKJ9nvZ83X7d0lH841VFXhZdCLfks5Z5XbHWvsujKqlZqp8MUwcYJ+M543eWQPp9Ldj6aGk2lqVXF3z0erzbJtuP6O4+rl+ruiluxn2nNZ7npd1mavX1S08IQ01E8KcYNzssSeezKbx6u5bkl7VuPDAAAAAAAAAAAAAAAAAAAAAAAAAAAB9voj/OIm/ujn0Ief4AAeg0/wDS9hOXIAD5G1uD85fcac6wfov2/eABr0AAAAAAAAAAAAAAAH//2Q=="}
buton={"Add To Cart"}
buton1={"Buy Now"}
/>
<Product 
id={'129'}
title={'Jeans For Mens'}
price={36999}
rating={4}
image={"https://5.imimg.com/data5/TD/FS/GLADMIN-29652014/men-denim-jeans-250x250.jpg"}
buton={"Add To Cart"}
buton1={"Buy Now"}
/>
<Product 
id={'130'}
title={'Shirts for Mens'}
price={699}
rating={3}
image={"https://rukminim1.flixcart.com/image/332/398/jrdt8cw0/shirt/t/h/d/40-skcsh-1106-mao-fubar-original-imafd6vmgygzhvbp.jpeg?q=50"}
buton={"Add To Cart"}
buton1={"Buy Now"}
/>
</div>
<div className='dvv'>
<Product 
id={'128'}
title={'Smoodies Litchi 1 Litre(Pack of 2)'}
price={129}
rating={5}
image={"https://images-na.ssl-images-amazon.com/images/I/61vqWd-Y%2BlL._SX679_.jpg"}
buton={"Add To Cart"}
buton1={"Buy Now"}
/>
<Product 
id={'129'}
title={'NIVEA Lotion Body Milk,400ml'}
price={199}
rating={4}
image={"https://images-na.ssl-images-amazon.com/images/I/51shDMCVn%2BL._SL1000_.jpg"}
buton={"Add To Cart"}
buton1={"Buy Now"}
/>
<Product 
id={'130'}
title={'General Knowledge 2021'}
price={30}
rating={5}
image={"https://images-na.ssl-images-amazon.com/images/I/41oYf2TQzeL._SX328_BO1,204,203,200_.jpg"}
buton={"Add To Cart"}
buton1={"Buy Now"}
/>
</div>
<div className='dvv'>
<Product 
id={'128'}
title={'Smoodies Litchi 1 Litre(Pack of 2)'}
price={129}
rating={5}
image={"https://images-na.ssl-images-amazon.com/images/I/61vqWd-Y%2BlL._SX679_.jpg"}
buton={"Add To Cart"}
buton1={"Buy Now"}
/>
<Product 
id={'129'}
title={'NIVEA Lotion Body Milk,400ml'}
price={199}
rating={4}
image={"https://images-na.ssl-images-amazon.com/images/I/51shDMCVn%2BL._SL1000_.jpg"}
buton={"Add To Cart"}
buton1={"Buy Now"}
/>
<Product 
id={'130'}
title={'General Knowledge 2021'}
price={30}
rating={5}
image={"https://images-na.ssl-images-amazon.com/images/I/41oYf2TQzeL._SX328_BO1,204,203,200_.jpg"}
buton={"Add To Cart"}
buton1={"Buy Now"}
/>
</div>
<div className='dvv'>
<Product 
id={'128'}
title={'Smoodies Litchi 1 Litre(Pack of 2)'}
price={129}
rating={5}
image={"https://images-na.ssl-images-amazon.com/images/I/61vqWd-Y%2BlL._SX679_.jpg"}
buton={"Add To Cart"}
buton1={"Buy Now"}
/>
<Product 
id={'129'}
title={'NIVEA Lotion Body Milk,400ml'}
price={199}
rating={4}
image={"https://images-na.ssl-images-amazon.com/images/I/51shDMCVn%2BL._SL1000_.jpg"}
buton={"Add To Cart"}
buton1={"Buy Now"}
/>
<Product 
id={'130'}
title={'General Knowledge 2021'}
price={30}
rating={3}
image={"https://images-na.ssl-images-amazon.com/images/I/41oYf2TQzeL._SX328_BO1,204,203,200_.jpg"}
buton={"Add To Cart"}
buton1={"Buy Now"}
/>
</div>



<div className='dvv'>
    

</div>
</div>
    )
}

export default Home
