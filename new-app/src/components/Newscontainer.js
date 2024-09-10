import React, { Component } from 'react';
import Newsitem from './Newsitem';
import Spinner from './Spinner'; // Import the Spinner component

export default class Newscontainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            articles: [],
            loading: true,
            error: null
        };
    }

    async componentDidMount() {
        try {
            const url = "https://newsdata.io/api/1/latest?apikey=pub_52770033f3536cd77e4778ab14bce771374d5&q=pizza";
            let resp = await fetch(url);
            if (!resp.ok) {
                if (resp.status === 426) {
                    console.error("Upgrade required: Please check API documentation for protocol changes.");
                    // Handle the specific 426 error or inform the user
                } else {
                    throw new Error(`HTTP error! status: ${resp.status}`);
                }
            }
            let data = await resp.json();
            let articles = data.results; // Adjust according to the new API response format
            this.setState({ articles, loading: false });
        } catch (error) {
            console.error("Error fetching news:", error);
            this.setState({ error, loading: false });
        }
    }
    handlePrev= async()=>{
        constructor(props) {
            super(props);
        const url = `https://newsdata.io/api/1/latest?apikey=pub_52770033f3536cd77e4778ab14bce771374d5&q=pizza&page={this.state.page+1}`;
            let resp = await fetch(url);
            let data= await resp.json();
            this
            this.state = {
                page:this.state.page+1,
                articles: [],
                loading: true,
                error: null
            };
        }
    }
    handleNext= async()=>{

    }

    render() {
        const { articles, loading, error } = this.state;

        if (loading) {
            return <Spinner />; // Display spinner while loading
        }

        if (error) {
            return <div>Error loading news: {error.message}</div>; // Display error message
        }

        return (
            <>
            <div className='container'>
                <div className='row'>
                    {articles.map((article, index) => (
                        <div className='col my-1' key={index}>
                            <Newsitem
                                title={article.title || "No title available"}
                                desc={article.description || "No description available"}
                                imgUrl={article.image_url || "/default-image.png"} // Provide a default image URL
                            />
                        </div>
                    ))}
                </div>
            <div class="d-flex justify-content-between">
            <button type="button" class="btn btn-primary" onClick={handlePrev}>previous</button>
            <button type="button" class="btn btn-primary" onClick={handleNext}>next</button>
            </div>
            </div>
            </>
        );
    }
}
