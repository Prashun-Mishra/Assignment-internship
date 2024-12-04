// import React from 'react';
// import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
// import Home from './components/Home';
// import CreatePost from './components/CreatePost';

// function App() {
//     return (
//         <Router>
//             <nav>
//                 <Link to="/">Home</Link>
//                 <Link to="/create">Create Post</Link>
//             </nav>
//             <Routes>
//                 <Route path="/" element={<Home />} />
//                 <Route path="/create" element={<CreatePost />} />
//             </Routes>
//         </Router>
//     );
// }

// export default App;



import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import CreatePost from './components/CreatePost';
import './App.css';

function App() {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/create" element={<CreatePost />} />
            </Routes>
        </Router>
    );
}

export default App;
