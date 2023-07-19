import { useState } from 'react';

//inporting css
import './App.css';

//Button
import Button from './components/core/button/Button';
import './components/core/button/style.Button.css'

//Navbar
import Navbar from './components/core/navbar/Navbar';
import './components/core/navbar/style.Navbar.css'

//Post
import './components/post/element/style.Post.css'

//Post List
import PostList from './components/post/list/PostList';
import './components/post/list/style.PostList.css'

//Open Post
import OpenPost from './components/post/open/OpenPost';
import './components/post/open/style.OpenPost.css'

//importing posts elements list
import posts from './constants/post';




//main app
function App() {
  
  let openPost = () =>{
    setIsOpen(!isOpen)
  }

  let [isOpen, setIsOpen] = useState(false);
  let postState = PostList({ posts: posts })

  if (isOpen) {postState = OpenPost()}else {postState = PostList({ posts: posts })}

  return (
    <div className="App">
      {Navbar()}
      {postState}
    </div>
  );
}

export default App;
