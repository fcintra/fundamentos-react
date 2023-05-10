import PropTypes from "prop-types";
import React from "react";
import styles from './Post.scss';
import PostHeader from "./PostHeader";
import { Rate, Subtitle } from './styles';

export default function Post(props){
  return (

    <article 
      className={
        props.post.removed ? styles.postDeleted : styles.post
      }
    > 
        <PostHeader 
          onRemove={props.onRemove}
          post={{
            id: props.post.id,
            title: props.post.title,
            read: props.post.read,
          }}
        />
        <br />
        <Subtitle>{props.post.subtitle}</Subtitle>
        <br />
        <Rate>Média: {props.post.likes / 2}</Rate>
    </article>
   
  )
}

Post.propTypes = {
  onRemove: PropTypes.func.isRequired,
  post: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    likes: PropTypes.number.isRequired,
    read: PropTypes.bool.isRequired,
    removed: PropTypes.bool.isRequired, 
  }).isRequired,
}

