import { gql } from "@apollo/client";
// GraphQL queries
export const GET_ALL_PEOPLE: string | string[] | any = gql`
query ($page: Int!) {
  getPeople(page: $page) {
    count
    next
    previous
    results {
      name
      height
      mass
      gender
      homeworld {
        name,
        population
      }
    }
  }
}
`
export const GET_PERSON_BY_NAME: string | string[] | any = gql`
query ($name: String!) {
  getPerson(name: $name) {
    count
    next
    previous
    results {
      name
      height
      mass
      gender
      homeworld {
        name,
        population
      }
    }
  }
}
`;