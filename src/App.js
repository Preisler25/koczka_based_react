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
import getPost from './constants/post';




//main app
function App() {
  let openPost = () =>{
    setIsOpen(!isOpen)
  }

  let [isOpen, setIsOpen] = useState(false);

  let posts = getPost(openPost);

  let pageState = null;

  if (isOpen) {
    console.log("open");
    pageState = OpenPost(openPost)
    console.log(pageState);
  }

  return (
    <div className="App">
      {Navbar("Koczka Based  v2.0")}
      {PostList({ posts: posts })}
      {pageState}
    </div>
  );
}

export default App;
