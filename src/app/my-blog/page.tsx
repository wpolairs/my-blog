"use client"
import React from "react"
import { useQuery } from "@apollo/client"
import { PARTIAL } from "../../graphqls"

const Page = () => {
  const { loading, error, data } = useQuery(PARTIAL, {
    variables: {
      currency: "USD",
    },
  })

  console.info(data)

  return <div>page</div>
}

export default Page
