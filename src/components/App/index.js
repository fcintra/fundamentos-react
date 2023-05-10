import React, { useState } from "react";
import { ThemeProvider } from '../../context/ThemeContext';
import Header from "../Header";
import Post from "../Post";
import styles from './App.scss';


function App(){
  const [posts, setPosts] = useState([
    { id: Math.random(), title: 'Title#01', subtitle: 'Sub#01', likes: 10, read: false, removed: false },
    { id: Math.random(), title: 'Title#02', subtitle: 'Sub#02', likes: 20, read: true , removed: false},
    { id: Math.random(), title: 'Title#03', subtitle: 'Sub#03', likes: 30, read: false, removed: false },
    { id: Math.random(), title: 'Title#04', subtitle: 'Sub#04', likes: 50, read: true , removed: false},
  ]);


  function handleRefresh(){
    setPosts((prevState) => [
      ...prevState,
      {
        id: Math.random(), 
        title: `Title#0${posts.length + 1}`, 
        subtitle: `Sub#0${posts.length + 1}`, 
        likes: 50, 
        read: false,
      }
    ])

  }

  function handleRemovePost(postId){
    setPosts((prevState) => prevState.map(
      post => (
        post.id === postId 
        ? { ...post, removed: true }
        : post 
      )
    ))
  }

  return (
    <ThemeProvider>
      <Header>
        <h2 className={styles.title}>
          Posts da semana
          <button onClick={handleRefresh}>Atualizar</button>
        </h2>
      </Header>
      <hr />
      {posts.map((post) => (
          <Post 
            key={post.id}
            onRemove={handleRemovePost}
            post={post}
          />
      ))}
      {posts.map(post => {
        <h1>{post.title}</h1>
      })}
    </ThemeProvider>
  )
}

export default App;