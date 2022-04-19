import { graphql } from '../strapi-graphql.js'
export async function get(API_URL, { slug }) {
    const query = `
    query {
        blogs (
          filters: {
            slug: {
              eq: "${slug}"
            }
          }
        ) {
          data {
            attributes {
              title
              content,
              blog_categories {
                data {
                  attributes {
                    title
                  }
                }
              }
              gallery {
                data {
                  attributes {
                    url
                  }
                }
              }
              featured_image {
                data {
                  attributes {
                    url
                  }
                }
              }
              date
              blog_tags {
                data {
                  attributes {
                    title
                  }
                }
              }
              slug
              blog_comments {
                data {
                  attributes {
                    content 
                    users_permissions_user {
                      data {
                        attributes {
                          username
                        }
                      }
                    }
                    approved
                  }
                }
              }
              excerpt
            }
          }
        }
      }
        
    `
    return await graphql(API_URL, query)
}