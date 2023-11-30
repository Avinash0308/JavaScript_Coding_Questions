/*Write a function getData that returns a Promise. Use this function to fetch data from two different APIs sequentially, and return the combined result.
Use any random API that you want
Solution Approach:
Utilize the .then method to chain promises.*/

function fetchData(url) {
  return fetch(url).then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json();
  });
}

function getData() {
  const apiUrl1 = "https://jsonplaceholder.typicode.com/todos/1";
  const apiUrl2 = "https://randomuser.me/api/";

  // Fetch data from the first API
  return fetchData(apiUrl1)
    .then((data1) => {
      // Fetch data from the second API using the result from the first API
      return fetchData(apiUrl2).then((data2) => {
        // Combine the results from both APIs
        return {
          api1Result: data1,
          api2Result: data2,
        };
      });
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
}

// Usage example
getData().then((combinedResult) => {
  console.log("Combined Result:", combinedResult);
});
