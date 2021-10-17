import "./App.css";
import Header from "./components/Header/Header";
import PostForm from "./components/PostForm/PostForm";
import Post from "./components/Post/Post";
import Avatar from "./components/Avatar/Avatar";


const posts = [
  {
    userName: "Jonas Grossi",
    date: "13 Oct 2021 - 20:21",
    message: "Maneiro essa coisa!",
    comments: [
      {
        userName: "Baraky",
        date: "13 Oct 2021 - 20:33",
        message: "Concordo",
      },
      {
        userName: "Helena",
        date: "13 Oct 2021 - 20:35",
        message: "Concordo",
      }
    ]
  },
  {
    userName: "Baraky",
    date: "13 Oct 2021 - 20:48",
    message: "Testess",
  },
];


//const firstPost = posts[0];

posts.push({
  userName: "Guilherme Rodrigues",
  date: "13 oct 2021 - 20:30",
  message: "Dá pra mudar a const??",
});

function App() {
  return (
    <div className="App">
      <Header />
      <Avatar />
      <PostForm />
      {posts.map((post) => {
        //cada post e um item do array posts 
        return <Post data={post} />;
      })}
    </div>
  );
}

export default App;
