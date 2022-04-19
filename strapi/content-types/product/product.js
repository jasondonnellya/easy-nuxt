import { graphql } from '../strapi-graphql.js'
export async function get(API_URL, { slug }) {
    const query = `
    query {
      products (
        filters: {
          slug: {
            eq: "${slug}"
          }
        }
      ) {
        data {
          id
          attributes {
            title
            content
            featured_image {
              data {
                attributes {
                  url
                }
              }
            }
            price
            discount_price
            slug
            stock
            weight
            volume
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
              data {
                attributes {
                  title
                  slug
                }
              }
            }
            product_attribute {
              data {
                attributes {
                  title
                }
              }
            }
            assigned_product_attributes {
              product_attribute_value {
                data {
                  attributes {
                    title
                  }
                }
              }
              price
              discount_price
              stock
              weight
              volume
            }
            visual_attributes {
              product_attribute {
                data {
                  attributes {
                    title
                  }
                }
              }
              product_attribute_values {
                data {
                  attributes {
                    title
                  }
                }
              }
              conditional_assigned_product_attribute_value {
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
    }
        
    `
    return await graphql(API_URL, query)
}