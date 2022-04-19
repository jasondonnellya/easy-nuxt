import { graphql } from '../strapi-graphql.js'
export async function get(API_URL) {
    const query = `
    query {
      products {
        data {
          id
          attributes {
            title
            excerpt
            featured_image {
              data {
                attributes {
                  name
                  alternativeText
                  url
                }
              }
            }
            price
            discount_price
            slug
            stock
            weight
            product_categories {
              data {
                attributes {
                  title
                  slug
                  product_categories {
                    data {
                      attributes {
                        title
                        slug
                      }
                    }
                  }
                }
              }
            }
            product_tags {
              data{
                attributes{
                  title
                  slug
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