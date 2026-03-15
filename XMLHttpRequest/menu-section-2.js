const xhr2 = new XMLHttpRequest();                                      // 1. Create an XMLHttpRequest object

xhr2.open('GET', 'http://localhost:63/XMLHttpRequest/menu-section-2.html', true);      // 2. Configure the request with open() // Method, URL, Asynchronous (true)

xhr2.onload = function() {                                              // 3. Set up an event handler for when the request is complete
  if (xhr2.status === 200) { // Check if the request was successful (status 200 is "OK")
      const data = xhr2.responseText; // Parse the response, typically JSON, and use the data
      console.log(data);
      document.getElementById("menu-section-2").innerHTML = xhr2.responseText; // You can update the webpage content here
  } else { console.error('Error: ' + xhr2.status + ' ' + xhr2.statusText); } // Handle HTTP errors
};

xhr2.onerror = function() { console.error("Network error occurred"); }; // 4. Set up an event handler for network errors

xhr2.send();                                                            // 5. Send the request // Used for GET requests; for POST, you can pass data to send()
