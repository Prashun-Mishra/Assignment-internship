// import React, { useState } from 'react';
// import axios from 'axios';

// function CreatePost() {
//     const [title, setTitle] = useState('');
//     const [content, setContent] = useState('');

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         axios.post('http://localhost:5160/api/posts', { title, content }).then(() => {
//             alert('Post created!');
//         });
//     };

//     return (
//         <form onSubmit={handleSubmit}>
//             <input
//                 type="text"
//                 placeholder="Title"
//                 value={title}
//                 onChange={(e) => setTitle(e.target.value)}
//             />
//             <textarea
//                 placeholder="Content"
//                 value={content}
//                 onChange={(e) => setContent(e.target.value)}
//             ></textarea>
//             <button type="submit">Submit</button>
//         </form>
//     );
// }

// export default CreatePost;



import React, { useState } from 'react';
import axios from 'axios';

const CreatePost = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        const newPost = { title, content };
        axios.post('http://localhost:5160/api/posts', newPost)
            .then((response) => {
                alert('Post created successfully!');
                setTitle('');
                setContent('');
            })
            .catch((error) => console.error('Error creating post:', error));
    };

    return (
        <div className="container">
            <h1>Create Post</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Title:</label>
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                        style={{ display: 'block', marginBottom: '10px', padding: '5px', width: '100%' }}
                    />
                </div>
                <div>
                    <label>Content:</label>
                    <textarea
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        required
                        style={{ display: 'block', marginBottom: '10px', padding: '5px', width: '100%', height: '100px' }}
                    />
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default CreatePost;
