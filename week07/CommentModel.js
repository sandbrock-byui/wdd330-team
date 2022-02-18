const commentList = [
    {
        hikeId: 1,
        date: new Date(),
        content: 'I hate hiking, but beautiful falls.'
    },
    {
        hikeId: 1,
        date: new Date(),
        content: 'I hate hiking, but beautiful falls.'
    },
    {
        hikeId: 2,
        date: new Date(),
        content: 'I hate hiking, but beautiful falls.'
    },
    {
        hikeId: 2,
        date: new Date(),
        content: 'I hate hiking, but beautiful falls.'
    },
    {
        hikeId: 3,
        date: new Date(),
        content: 'I hate hiking, but beautiful falls.'
    },
    {
        hikeId: 3,
        date: new Date(),
        content: 'I hate hiking, but beautiful falls.'
    },
]

export default class CommentModel {
    constructor() { }
  
    getCommentsByHike(hikeId) {
      return commentList.filter(comment => comment.hikeId === hikeId);
    }
  }