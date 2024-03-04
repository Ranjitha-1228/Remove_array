function getPostDataAndFilterByTitle(titleToFilter) {
    // Assuming your mock API endpoint is 'https://mockapi.com/posts'
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(data => {
            // Filter posts based on the title
            const filteredPosts = data.filter(post => post.title.includes(titleToFilter));
            
            // Log the filtered posts to console
            console.log(filteredPosts);
        })
        .catch(error => console.error('Error fetching data:', error));
}

// Call the function with the title you want to filter
getPostDataAndFilterByTitle('quam voluptatibus rerum veritatis');