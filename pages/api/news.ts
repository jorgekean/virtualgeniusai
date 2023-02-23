
const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '88c59ca3d3msh08fec52a7cfaac1p1e0fd9jsn98b27a7943e9',
        'X-RapidAPI-Host': 'contextualwebsearch-websearch-v1.p.rapidapi.com'
    }
};

// const API_KEY = 'YOUR_API_KEY';

export type Article = {
    id: string;
    title: string;
    description: string;
    datePublished: Date;
    url: string;
    image: { url: string };
    provider: { name: string };
};

export async function getNews(query: string, fromPublishedData: string): Promise<Article[]> {
    // const url = `https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/Search/NewsSearchAPI?q=${query}&pageNumber=1&pageSize=10&autoCorrect=true`;
    const response = await fetch(`https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/search/NewsSearchAPI?q=${query}&pageNumber=1&pageSize=10&autoCorrect=true&fromPublishedDate=${fromPublishedData}&toPublishedDate=null`, options)
    //   .then(response => response.json())
    //   .then(response => console.log(response))
    //   .catch(err => console.error(err));

    const data = await response.json();
    return data.value;
}
