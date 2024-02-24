import {gql} from '@apollo/client'

export const get_user=gql `
query getuser{
    users{
      id,login,avatar_url
    }
  }
`