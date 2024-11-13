import { useState } from "react";
import { Button, Card, Form } from "react-bootstrap";

export default function AddPost(props) {

    const { onAddPost } = props;


    const [formData, setFormData] = useState({
        title: '',
        author: '',
        content: '',
    });

    function handleInputChange(event) {
        const { id, value } = event.target;
        setFormData({ ...formData, [id]: value });
    }

    const clearForm = (event) => {
        setFormData({
            title: '',
            author: '',
            content: '',
        });
    }
    const handleAddPost = (event) => {
        if (formData['title'].trim === '' || formData['author'].trim === '' || formData['content'].trim === '') {
            alert('Form is not enough data')
        } else {
            event.preventDefault();
            clearForm();
            onAddPost(formData)
        }
    }


    return (
        <Card className="p-3">
            <Form className="float-start mt-1" onSubmit={handleAddPost}>
                <Form.Label className="float-start">Add Post</Form.Label>
                <Form.Control required type="text" id='title' onChange={handleInputChange} value={formData['title']} className="mt-2" placeholder="Title" />
                <Form.Control required type="text" id='author' onChange={handleInputChange} value={formData['author']} className="mt-2" placeholder="Author" />
                <Form.Control required type="text" id='content' onChange={handleInputChange} value={formData['content']} className="mt-2" as="textarea" rows="5" placeholder="Content" />
                <Button className="mt-3 float-start" variant="primary" type="submit">
                    Add Post
                </Button>
            </Form>

        </Card>
    )
}