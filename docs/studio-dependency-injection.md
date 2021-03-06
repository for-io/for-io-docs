---
id: studio-dependency-injection
title: Dependency Injection
sidebar_label: Dependency Injection
slug: /studio/dependency-injection
---

For.io has a first-class, built-in support for dependency injection. It consists of two parts:

- By utilizing code generation, the discovery of components is prearranged at build-time. For.io Studio generates the dependency injection information (e.g. `modules.js`).

- Then, during run-time, the backend relies on the open source For.io Runtime library (npm package `for-io-runtime`) to load the modules and initialize the application components with their dependencies.

This results in a fast discovery of application components/dependencies (very important e.g. for serverless deployments), and avoids the need to explicitely register most of the components, or to search for them at run-time.

For.io supports dependency injection in two different scopes:

- components with `singleton scope`, which are injected once (upon initialization),

- API controller parameters/dependencies with `request scope`, which are injected every time a controller is invoked to handle an HTTP/API request.

```javascript
// src/api/getMovie.js

exports['CONTROLLER getMovie'] = (db, types, responses) => {   // (1)
    return async function getMovie(movieId, userId) {   // (2)
        let filter = {
            _id: movieId,
            owner: userId,
        };

        let data = await db.movies.getOne(filter);
        let movie = types.Movie(data);

        return movie;
    }
}

```

1. `db`, `types` and `responses` are singleton components that are injected when the application starts.

2. `movieId` and `userId` are request-scoped parameters that are provided for each request.