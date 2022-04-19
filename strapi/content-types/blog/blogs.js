import { graphql } from '../strapi-graphql.js'
export async function get(API_URL) {
    const query = `
    query {
        blogs {
          data {
            attributes {
              title
              featured_image {
                data {
                  attributes {
                    url
                  }
                }
              }
              date
              slug
              excerpt
              blog_categories {
                data {
                  attributes {
                    title
                  }
                }
              }
              blog_tags {
                data {
                  attributes {
                    title
                  }
                }
              }
            }
          }
        }
      }
    `
    return await graphql(API_URL, query)
}