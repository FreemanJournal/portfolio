import request, { gql } from "graphql-request"
const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;

export const getProjects = async () => {
    const query = gql`
    query MyQuery {
        
        projectsConnection {
            edges {
                node {
                    title
                    description {
                        html
                        text
                        raw
                        markdown
                    }
                    projectPhoto {
                        url
                    }
                }
            }
        }
        }
    `

    const results = await request(graphqlAPI, query)
    return results.projectsConnection.edges;
}