import React from 'react';
import { Card } from 'react-bootstrap';

const News = (props) => {
    const { title, description, publishedAt, author, source, url, urlToImage } = props.article;
    const name = source.name;

    return (
        <Card className="w-75 mx-auto text-center mt-4">
            <Card.Header className="h1">{name}</Card.Header>
            <Card.Img className='w-75 d-block mx-auto my-3' variant="top" src={urlToImage} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>{description}</Card.Text>
                <a className="btn btn-primary" href={url} target="_blank">See Full News</a>
            </Card.Body>
            <Card.Footer className="text-muted">
                <Card.Text>By_ {author}</Card.Text>
                <Card.Text>Published At: {publishedAt}</Card.Text>
            </Card.Footer>
        </Card>
    );
};

export default News;