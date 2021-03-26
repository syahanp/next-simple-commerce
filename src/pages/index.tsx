import React from 'react'
import { GetStaticProps } from 'next'
import api from 'api'

import Navbar from 'components/Navbar'
import Carousel from 'components/Carousel'
import Container from 'components/Layout/Container'
import RecommendedProductList from 'components/RecommendedProductList'
import TrendingProductList from 'components/TrendingProductList'
import About from 'components/About'

const LandingPage = ({ recommendedItems, trendingItems }) => {
    return (
        <>
            <Navbar />
            
            <Carousel />
            
            <br/><br/>
            
            <Container>
                <RecommendedProductList items={recommendedItems} />

                <TrendingProductList items={trendingItems} />

                <About />
            </Container>
        </>
    )
}

export default LandingPage;

export const getStaticProps:GetStaticProps = async () => {
    let recommendedItems = []
    let trendingItems = []

    await api.get(`/products?isRecommended=true`)
    .then(res => {
        recommendedItems = res.data
    })
    .catch(err => {
        console.log(err.response);
    })

    await api.get(`/products?isTrending=true`)
    .then(res => {
        trendingItems = res.data
    })
    .catch(err => {
        console.log(err.response);
    })

    return {
        props: {
            recommendedItems,
            trendingItems
        }
    }
}
