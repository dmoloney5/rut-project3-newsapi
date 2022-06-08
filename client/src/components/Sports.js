import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { NewsItem } from '.'
require('dotenv').config({ path: '../../.env' })

const SportsList = () => {
    const [data, setArticles] = useState([])

    useEffect(() => {
        const getArticles = async () => {
            const response = await axios.get(`https://inshorts.deta.dev/news?category=sports`)
            setArticles(response.data.data)
            console.log(response)
        }

        getArticles()
    }, [])
    return (
        <div className='Sports'>
            {data.map(data => {
                return (
                    <NewsItem
                        key={data.id}
                        title={data.title}
                        description={data.content}
                        url={data.url}
                        urlToImage={data.imageUrl}
                    />
                )
            })}
        </div>
    )
}

export default SportsList