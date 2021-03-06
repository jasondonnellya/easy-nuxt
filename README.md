# Easy Nuxt

IMPORTANT: Only supported in Nuxt3+

Easy nuxt is a helper module for adding easy cross-site versioning of frontend css frameworks and headless content management systems with NuxtJS.

Currently Supported: Bulma, Strapi.

TODO:

Nuxt3 has support for dynamic component imports, so the Easy Nuxt api is not necessary anymore.

## Warnings

- ! Documentation for easy-nuxt is not ready.
- ! Installation for easy-nuxt is not quite ready and I advise against hacking together an installation due to future migration issues.
- ! Easy Nuxt is not a production ready package and is only in testing.

## Easy Nuxt API

Easy Nuxt uses an internal API that needs to be registered in your project. It currently only has one route for getComponents.

This can be found in /api directory.

## Bulma

### Components

> Bulma components are registered through the Easy Nuxt API by running the /easy-nuxt/bulma/import.js

By registering Vue Components globally, developers are able to remove bloat from their /components directory. Easy Nuxt then uses the API to automatically check if you want to override a Bulma component using the /components/Bulma directory.

By doing this, developers can essentially render the same components throughout their entire project, use Bulma variables in SASS as a theme and then if a component is overridden or changed it will take effect over the entire site.

## Strapi

### Components

> Strapi components are registered through the Easy Nuxt API by running the /easy-nuxt/strapi/import.js

The Strapi components for easy-nuxt are not based on classes but instead use Bulma at the moment and a Template version of Strapi that I will release as a seperate respository. Ideally these will be re-created using a variety of CSS frameworks after they are supported. These components are helpers such as Products, Product, Blogs, Blog, Stripe etc.

The purpose of the Strapi components is to provide an easy integration with a Strapi Blog, E Commerce and General functionality such as maintenance pages etc. Ideally these features will be provided in a containerized template that you can easy disable or enable different portions of the template.

### API

The Strapi section of Easy Nuxt will also provide helpful API requests for user authentication, storing JWT as HTTP-Only Cookies and securely calling data from the Strapi API. (Some of these requests require custom endpoints which will be available in the Strapi Template)
