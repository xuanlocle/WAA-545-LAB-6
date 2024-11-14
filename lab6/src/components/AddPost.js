import { useRef } from "react";
import { Button, Card, Form } from "react-bootstrap";

export default function AddPost(props) {

    const { onAddPost } = props;


    const formRef = useRef();

    // const [formData, setFormData] = useState({
    //     title: '',
    //     author: '',
    //     content: '',
    // });

    // function handleInputChange(event) {
    //     const { id, value } = event.target;
    //     setFormData({ ...formData, [id]: value });
    // }

    const clearForm = (event) => {
        formRef.current.reset();
    }

    const handleAddPost = (event) => {
        const form = formRef.current;
        const data = {
            title: form['title'].value,
            author: form['author'].value,
            content: form['content'].value,
        }
        if (data.title === '' || data.author === '' || data.content === '') {
            alert('Form is not enough data')
        } else {
            event.preventDefault();
            onAddPost(data)
            clearForm();
        }
    }


    return (
        <Card className="p-3">
            <Form ref={formRef} className="float-start mt-1" onSubmit={handleAddPost}>
                <Form.Label className="float-start">Add Post</Form.Label>
                <Form.Control required type="text" id='title' className="mt-2" placeholder="Title" />
                <Form.Control required type="text" id='author' className="mt-2" placeholder="Author" />
                <Form.Control required type="text" id='content' className="mt-2" as="textarea" rows="5" placeholder="Content" />
                <Button className="mt-3 float-start" variant="primary" type="submit">
                    Add Post
                </Button>
            </Form>

        </Card>
    )
}