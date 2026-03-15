const xhr3 = new XMLHttpRequest();                                      // 1. Create an XMLHttpRequest object

xhr3.open('GET', 'http://localhost:63/XMLHttpRequest/menu-section-3.html', true);      // 2. Configure the request with open() // Method, URL, Asynchronous (true)

xhr3.onload = function() {                                              // 3. Set up an event handler for when the request is complete
  if (xhr3.status === 200) { // Check if the request was successful (status 200 is "OK")
      const data = xhr3.responseText; // Parse the response, typically JSON, and use the data
      // console.log(data);
      document.getElementById("menu-section-3").innerHTML = xhr3.responseText; // You can update the webpage content here
  } else { console.error('Error: ' + xhr3.status + ' ' + xhr3.statusText); } // Handle HTTP errors
};

xhr3.onerror = function() { console.error("Network error occurred"); }; // 4. Set up an event handler for network errors

xhr3.send();                                                            // 5. Send the request // Used for GET requests; for POST, you can pass data to send()
