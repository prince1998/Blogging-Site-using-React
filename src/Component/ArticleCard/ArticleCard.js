import React from 'react'
import {Card, CardImg, CardTitle, CardSubtitle, CardBody, Badge} from 'reactstrap'
import classes from './ArticleCard.Module.css'

const ArticleCard = (props) => {
    return(
        <Card className = {classes.ArticleCard}>
            <CardImg
            top
            width = "100%"
            src = "https://picsum.photos/325/180"
            alt = "Card Image"
            className = {classes.CardImage}
            />
            <CardBody className = {classes.CardBody}>
                <CardTitle className = {classes.CardTitle}>
                    {props.data.title}
                </CardTitle>
                <CardSubtitle className = {classes.CardSubtitle}>
                    <Badge className = "classes.ArticleLabel">
                        Topic 
                    </Badge>
                </CardSubtitle>
            </CardBody>
        </Card>

    )

}
export default ArticleCard