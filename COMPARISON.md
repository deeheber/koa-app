# Comparison between Express and Koa

*Note: this doc contains my personal opinions based off of my experience*

## Summary

  The most obvious difference when I began building this app was that Koa does not bundle middleware at its core. Instead of using callbacks, you can just call another function.

  With Express, you can write custom middleware functions, but because Koa is set up without middleware at the core, it is much easier to take a third party middleware to add functionality such as routing to the application. With it being easier to pull middleware from third parties, I also found myself doing a lot of research to determine which solutions were the best for what I wanted to do and also which third party modules were the most well maintained.

  The application knows when to return the response to the server by using the `yield` keyword in a function. I found that my routes were a lot shorter and more functional programming like in nature.

  Using the `koa-bodyparser` middleware allowed for me to have more control over what `this` was in my routes. Before I implemented that middleware, I wasn't super sure how to handle or even how to find the request or response objects to do something with it.

  During my testing, I initially attempted to use chai-http and just include my exported `app` module like I did with Express. I quickly realized that exporting the `app` that referenced `koa()` was also exporting the entire http server as well and preventing my test from running properly. Including all of that in the `koa()` call can be helpful to spinning up an app quickly, but for testing purposes can complicate things a bit.

  To resolve this issue, I discovered the `supertest-koa-agent` module which allowed me to utilize supertest instead of chai-http and transform my Koa app into a supertest compatible agent instance. During this project, I realized that I really enjoyed using supertest over chai-http.

  Overall Koa appears to be more minimalist and is good if you want a super lightweight framework. It will only be as complicated as the amount of middleware that you choose to add. Express already includes a lot of these middleware functions at the code, and in my opinion I feel Express would be best if creating a large scale application.
