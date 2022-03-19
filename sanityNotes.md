## Sanity with Remix

https://www.sanity.io/guides/remix-run-live-preview

When requests to your website are made, we can check for authentication and serve either published content or put the page into preview mode and continually listen to and show updates. No serverless function step is required
?if you are authed into sanity, sanity will present preview content, not the live site???
The package groq-store streams the entire dataset to your browser and overlays draft content into published documents.

So that our studio and website can talk to each other, we'll need to adjust some CORS settings.
In sanity.io/manage go to the API tab and add a new CORS origin for http://localhost:3000 with credentials allowed.
Note: You'll need to repeat this step once your website is deployed to add any deployed URLs as well.
In the web folder, create a .env file for secrets. These can be read server-side by Remix. This file should not be checked into git.

Back in sanity.io/manage, create a "viewer" token for your project and paste it into your .env file for the SANITY_API_TOKEN key. The other SANITY_PREVIEW_SECRET can be any random string.

Remix doesn't load .env files by default, we'll need to enqueue them. In the web folder install the dotenv package.

`npm install dotenv`

Then import and initialize the package in your site's entry.server.jsx file

```
import dotenv from "dotenv";

// ...leave the parameters in this function as-is
export default function handleRequest() {
	dotenv.config();

	// ...and the rest
}
```

or, initialize dotenv in the json scripts when starting dev:
`"dev:remix": "node -r dotenv/config node_modules/.bin/remix dev"`

### Activating preview mode for querying drafts

For any request to any page, we'll check the URL for a ?preview= search parameter that may contain a secret string. If it exists and is correct, the preview client will load with an authentication token server-side to read draft documents.

Back in $slug.jsx we can update our loader() function and the default export to:

Check for the ?preview=asdf-1234 search parameter
Use either the normal or preview client as a result
Pass a prop down to the page so we can show whether preview mode is activated or not
