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

//main app
function App() {
  return (
    <div className="App">
      {Navbar()}

      {PostList({ 
        posts: [
          { title: "Title 1", body: "Body 1" },
          { title: "Title 2", body: "Body 2" },
          { title: "Title 3", body: "Body 3" },
          { title: "Title 4", body: <h1>Alma</h1> },
      ]
      })}


    </div>
  );
}

export default App;
