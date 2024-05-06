import React from "react"
import { LoadContainer } from "./styles"
import { ActivityIndicator } from "react-native"


export const Loading = () => {
  return (
    <LoadContainer>
      <ActivityIndicator size="large" color="#0000ff" />
    </LoadContainer>
  )
}