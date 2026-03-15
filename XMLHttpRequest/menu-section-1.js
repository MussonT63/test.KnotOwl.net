const xhr1 = new XMLHttpRequest();                                      // 1. Create an XMLHttpRequest object

xhr1.open('GET', 'http://localhost:63/XMLHttpRequest/menu-section-1.html', true);      // 2. Configure the request with open() // Method, URL, Asynchronous (true)

xhr1.onload = function() {                                              // 3. Set up an event handler for when the request is complete
  if (xhr1.status === 200) { // Check if the request was successful (status 200 is "OK")
      const data = xhr1.responseText; // Parse the response, typically JSON, and use the data
      console.log(data);
      document.getElementById("menu-section-1").innerHTML = xhr1.responseText; // You can update the webpage content here
  } else { console.error('Error: ' + xhr1.status + ' ' + xhr1.statusText); } // Handle HTTP errors
};

xhr1.onerror = function() { console.error("Network error occurred"); }; // 4. Set up an event handler for network errors

xhr1.send();                                                            // 5. Send the request // Used for GET requests; for POST, you can pass data to send()
