// req is an instance of http.IncomingMessage, plus some pre-built middlewares.
// res is an instance of http.ServerResponse, plus some helper functions.


// Do Not Fetch an API Route from getStaticProps or getStaticPaths
// You should not fetch an API Route from getStaticProps or getStaticPaths. Instead, write your server-side code directly in getStaticProps or getStaticPaths (or call a helper function).

// Here’s why: getStaticProps and getStaticPaths run only on the server-side and will never run on the client-side. Moreover, these functions will not be included in the JS bundle for the browser. That means you can write code such as direct database queries without sending them to browsers. Read the Writing Server-Side code documentation to learn more.

// ******
// A good use case for API Routes is handling form input. For example, you can create a form on your page and have it send a POST request to your API Route. You can then write code to directly save it to your database. The API Route code will not be part of your client bundle, so you can safely write server-side code.

export default function handler(req, res) {
  res.status(200).json({ text: 'Hello' });
}