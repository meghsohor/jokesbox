
## JokesBox
##### Live: [JokesBox](https://meghsohor.github.io/jokesbox/)
<hr>
![enter image description here](https://raw.githubusercontent.com/meghsohor/jokesbox/master/public/images/screenshot.jpg)
<hr>

#### Created using React, Fetch API & JokeAPI

### Features:

 - Random Programming jokes (used **Fetch** API to get jokes from **JokeAPI**)
 - Live search - search jokes by topics: **programming**, **dog**, **cat** etc.
 
 **Note:** **`AbortController`** has been used to cancel all the previous requests while a user types in search-box.
 **`AbortController`** can be used to abort not only `fetch`, but other asynchronous tasks as well.
 To know more, please check MDN: [AbortController](https://developer.mozilla.org/en-US/docs/Web/API/AbortController)

 
 ### Run the app locally:

 1. Clone the Repo
 2. Open Terminal window in the project folder
 3. Run `npm install` to install all the dependencies
 4. After installation completes, run `npm start`
 5. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.