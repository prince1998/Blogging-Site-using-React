import React, {Component} from 'react'
import {Container} from 'reactstrap'
import firebase from '../../../Config/firebase'
import ArticleCard from "../../../Component/ArticleCard/ArticleCard"


const db = firebase.firestore()

class Main extends Component{
    constructor(props) {
        super(props);
        this.state = {
            isLoaded: false, //initially firebase is not loaded
            articles: []
            
        }

    }

    componentDidMount() { //When firebase is loaded
        this.getMyArticles()

    }

    getMyArticles = () => {
        db
        .collection("Articles") //get data from collection "Articles"
        .limit(8) // Only get 8 articles
        .get() //getting the articles
        .then(docs => {
                                    console.log("Fuck off");


            if(!docs.empty)  { // if there are articles 
                let allArticles = []
                docs.forEach(function (doc){
                    const article = {
                        id:doc,
                        ...doc.data(),
                    }
                    allArticles.push(article)
                })
                this.setState({
                    articles: allArticles
                }, () => { //we put 2 set states so that isloaded is true only when articles are populated
                    this.setState({
                        isLoaded: true
                    })
                })
            }
        })
    }

    render() {
        return (
            <div>
                <Container>
                    {
                        this.state.isLoaded?
                        this.state.articles.map((article,index => {
                            return(
                                <ArticleCard key = {index} 
                                data = {article}/>
                            )
                        })
                        )
                        : " "
                    }
                </Container>
            </div>
        );
    }

}

export default Main;