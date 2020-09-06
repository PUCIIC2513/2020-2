window.addEventListener('load', async () => {
  const response = await fetch('http://localhost:3001/posts');
  const posts = await response.json();

  posts.forEach((post) => {
    const postsContainer = document.getElementById('posts-container');

    // Create post element
    const postElement = document.createElement('div');
    postElement.classList.add('post');

    // Create post-title element
    const postTitleElement = document.createElement('h3');
    postTitleElement.textContent = post.title;
    postTitleElement.classList.add('post-title');

    // Create post-description element
    const postDescriptionElement = document.createElement('p');
    postDescriptionElement.textContent = post.description;
    postDescriptionElement.classList.add('post-description');

    postElement.appendChild(postTitleElement);
    postElement.appendChild(postDescriptionElement);

    postsContainer.appendChild(postElement);
  });
});
