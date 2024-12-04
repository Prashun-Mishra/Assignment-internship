// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// function Home() {
//     const [posts, setPosts] = useState([]);

//     useEffect(() => {
//         axios.get('http://localhost:5160/api/posts').then((response) => {
//             setPosts(response.data);
//         });
//     }, []);

//     return (
//         <div>
//             <h1>Blog Posts</h1>
//             {posts.map((post) => (
//                 <div key={post.id}>
//                     <h2>{post.title}</h2>
//                     <p>{post.content}</p>
//                 </div>
//             ))}
//         </div>
//     );
// }

// export default Home;




// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const Home = () => {
//     const [posts, setPosts] = useState([]);

//     useEffect(() => {
//         // Fetch posts from the backend
//         axios.get('http://localhost:5160/api/posts')
//             .then(response => setPosts(response.data))
//             .catch(error => console.error('Error fetching posts:', error));
//     }, []);

//     return (
//         <div>
//             <h1>Blog Posts</h1>
//             {posts.length > 0 ? (
//                 <ul>
//                     {posts.map((post) => (
//                         <li key={post.id}>
//                             <h2>{post.title}</h2>
//                             <p>{post.content}</p>
//                         </li>
//                     ))}
//                 </ul>
//             ) : (
//                 <p>No posts available. Create one!</p>
//             )}
//         </div>
//     );
// };

// export default Home;




import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Home = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5160/api/posts')
            .then((response) => setPosts(response.data))
            .catch((error) => console.error('Error fetching posts:', error));
    }, []);

    return (
        <div className="container">
            <h1>Blog Posts</h1>
            {posts.length > 0 ? (
                <ul>
                    {posts.map((post) => (
                        <li key={post.id} style={{ marginBottom: '20px' }}>
                            <h2>{post.title}</h2>
                            <p>{post.content}</p>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No posts available. Create one!</p>
            )}
        </div>
    );
};

export default Home;
