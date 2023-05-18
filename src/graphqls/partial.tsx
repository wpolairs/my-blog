import { gql } from "@apollo/client"

export default gql`
  query rates($currency: String!) {
    rates(currency: $currency) {
      currency
      rate
      name
    }
  }
`
