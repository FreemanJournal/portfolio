import request, { gql } from "graphql-request"
const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;

export const getProjects = async () => {
    const query = gql`
   query MyQuery {
        projectsConnection {
            edges {
            node {
                id
                title
                description {
                html
                markdown
                }
                projectPhoto {
                url
                }
                projectSlug
            }
            }
        }
        }
    `

    const results = await request(graphqlAPI, query)
    return results.projectsConnection.edges;
}


export const getProjectDetails = async (slug) => {
    const query = gql`
    query GetProjectDetails($slug:String!) {
        project(where:{projectSlug:$slug}){
             clientCode
             description {
             html
             markdown
             }
             liveLink
             projectScreenShots {
             url
             }
             serverCode
             title
            }
       
        }
    `

    const result = await request(graphqlAPI, query,{slug})
    return result.project;
}
// Query by Id
// export const getProjectDetails = async (slug) => {
//     const query = gql`
//     query GetProjectDetails($slug:ID!) {
//         project(where:{id:$slug}){
//                 clientCode
//     #         description {
//     #         html
//     #         markdown
//     #         }
//     #         liveLink
//     #         projectScreenShots {
//     #         url
//     #         }
//     #         serverCode
//     #         title
//             }
       
//         }
//     `

//     const result = await request(graphqlAPI, query,{slug})
//     return result.project;

  

// }

//      query GetDetails($id:String!){
//          project(where: {id: $id}) {
            //  clientCode
            //  description {
            //  html
            //  markdown
            //  }
            //  liveLink
            //  projectScreenShots {
            //  url
            //  }
            //  serverCode
            //  title
//          }
//      }

    

    // const result = await request(graphqlAPI, query)
    // return result