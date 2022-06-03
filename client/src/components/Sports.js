import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { NewsItem } from '.'
require('dotenv').config({ path: '../../.env' })

const SportsList = () => {
    const [article, setArticle] = useState([])

    useEffect(() => {
        const getArticle = async () => {
            const response = await axios.get(`https://newsapi.org/v2/top-headlines?country=us&category=sports&apiKey=61b7a8f9debe482ca9463aa72a5ca4a3`)
            setArticle(response.data.article)
            console.log(response)
        }

        getArticle()
    }, [])
    return (
        <div className= "Sports">
            {article.map(article => {
                return (
                    <NewsItem
                        title={article.name}
                        description={article.description}
                        url={article.url}
                        urlToImage={article.urlToImage}
                    />
                )
            })}
        </div>
    )
}

export default SportsList
