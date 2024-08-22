
export const addSubComment = (commentId, content, comments) => {
    return comments.map(comment => {
      if (comment.id === commentId) {
        const newSubComment = { id: Date.now(), content, likes: 0, subComments: [] };
        return { ...comment, subComments: [...comment.subComments, newSubComment] };
      }
      return {
        ...comment,
        subComments: addSubComment(commentId, content, comment.subComments),
      };
    });
  };
  export function getComments ( comments) {
    return comments.map(comment => ({
        ...comment,
        subComments: getComments(comment.subComments)
    }));
  }

  export const likeComment = (commentId, comments) => {
    return comments.map(comment => {
      if (comment.id === commentId) {
        return { ...comment, likes: comment.likes + 1 };
      }
      return {
        ...comment,
        subComments: likeComment(commentId, comment.subComments),
      };
    });
  };