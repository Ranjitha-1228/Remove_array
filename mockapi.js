function getPostDataAndFilterByTitle(titleToFilter) {
   
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(data => {
            
            const filteredPosts = data.filter(post => 
                post.title.includes(titleToFilter));
            
            
            console.log(filteredPosts);
        })
        .catch(error => console.error('Error fetching data:', error));
}


getPostDataAndFilterByTitle('quam voluptatibus rerum veritatis');