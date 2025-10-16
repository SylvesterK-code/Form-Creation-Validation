// Wait for the entire DOM to load before executing the script
document.addEventListener('DOMContentLoaded', fetchUserData);

/**
 * Asynchronously fetches user data from the API and displays it in the DOM.
 */
async function fetchUserData() {
  // Step 1: Define the API endpoint
  const apiUrl = 'https://jsonplaceholder.typicode.com/users';

  // Step 2: Select the HTML element where the fetched data will be displayed
  const dataContainer = document.getElementById('api-data');

  try {
    // Step 3: Fetch user data from the API
    const response = await fetch(apiUrl);

    // Check if the response is successful
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    // Step 4: Parse the JSON response
    const users = await response.json();

    // Step 5: Clear the default "Loading user data..." text
    dataContainer.innerHTML = '';

    // Step 6: Create a <ul> element to hold user names
    const userList = document.createElement('ul');

    // Step 7: Loop through each user and add their name to the list
    users.forEach(user => {
      const listItem = document.createElement('li'); // Create a new list item
      listItem.textContent = user.name;              // Set the text to the user's name
      userList.appendChild(listItem);                // Append the list item to the <ul>
    });

    // Step 8: Append the completed user list to the data container
    dataContainer.appendChild(userList);

  } catch (error) {
    // Step 9: Handle errors (e.g., network failure or invalid response)
    console.error('Error fetching user data:', error);
    dataContainer.innerHTML = 'Failed to load user data.';
  }
}
