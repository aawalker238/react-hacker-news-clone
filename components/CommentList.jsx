import { Fragment } from 'react';
import Comment from './Comment';

export default ({ comments }) => (
  <Fragment>
    {comments.map(comment => (
      <Comment key={comment.id} comment={comment} />
    ))}
  </Fragment>
);
