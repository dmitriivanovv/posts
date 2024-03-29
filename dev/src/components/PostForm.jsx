import React, { useState } from "react";
import MyButton from './UI/Button/MyButton';
import MyInput from './UI/Input/MyInput';

const PostForm = ({ create }) => {

  const [post, setPost] = useState({
    title: '',
    body: '',
  });


  const addNewPost = (event) => {
    event.preventDefault();

    const newPost = {
      id: Date.now(), ...post
    }
    create(newPost);
    setPost({ title: '', body: '' });
  }

  return (
    <form>
      {/* Управляемый компонент */}
      <MyInput
        value={post.title}
        onChange={e => setPost({ ...post, title: e.target.value })}
        type="text"
        placeholder="Описание заголовка"
      />
      <MyInput
        value={post.body}
        onChange={e => setPost({ ...post, body: e.target.value })}
        type="text"
        placeholder="Описание поста"
      />
      <MyButton onClick={addNewPost} >Создать пост</MyButton>
    </form>
  )
}
export default PostForm;