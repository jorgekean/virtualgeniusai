import { useEffect, useState } from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { getNews, Article } from '../pages/api/news';
import data from '../pages/data/news.json'

type Props = {};


const News = (props: Props) => {
    const [articles, setArticles] = useState<Article[]>([]);

    function jsonToArticles(json: any): Article[] {
        const articles = json.value.map((article: any) => {
            return {
                id: article.id,
                title: article.title,
                description: article.description,
                url: article.url,
                image: article.image,
                provider: article.provider,
                datePublished: new Date(article.datePublished)
            };
        });

        return articles;
    }

    useEffect(() => {
        const query = 'artificial intelligence';
        const fromPublishedDate = new Date();
        fromPublishedDate.setDate(fromPublishedDate.getDate() - 10);

        async function fetchNews() {
            // const data = await getNews(query, fromPublishedDate.toISOString().slice(0, 10));
            const news = jsonToArticles(data)
            setArticles(news);
        }

        fetchNews();
    }, []);

    return (
        <>
            <Container fluid>
                <Row>
                    {articles.map((article, ix) => (

                        <Col sm={12} md={6} lg={6} key={article.id}>
                            <Card className="my-3 p-3">
                                <Card.Img src={article.image.url} variant="top" />
                                <Card.Body>
                                    <Card.Title as="div">
                                        <strong>{article.title}</strong>
                                    </Card.Title>
                                    <Card.Text as="div">{article.description}</Card.Text>
                                    <Button variant="success" href={article.url} target="_blank">
                                        Read More
                                    </Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>

        </>
    );
}

export default News;

