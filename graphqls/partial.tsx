import { gql } from "@apollo/client"

export default gql`
  query GetRates($currency: String) {
    GetRates(currency: $currency) {
      ...Partial
    }
  }
`
