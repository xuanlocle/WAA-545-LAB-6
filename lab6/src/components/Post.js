export default function Post(props) {

    let { post} = props;

    return (
        <div>
            <h4>Id: {post.id}</h4>
            <h4>Title: {post.title}</h4>
            <h4>Author: {post.author}</h4>
        </div>
    )
}