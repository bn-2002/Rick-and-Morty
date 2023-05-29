import getQueryClient from "@/utils/getQueryClient"
import Hydrate from "@/utils/hydrate.client"
import { dehydrate } from "@tanstack/query-core"
import { CharctersList, fetchCharcters } from "./characters-list"
// import './style.css'

const Hydation = async () => {
  const queryClient = getQueryClient()
  await queryClient.prefetchQuery(["hydrate-charachters"], fetchCharcters)
  const dehydratedState = dehydrate(queryClient)

  return (
    <Hydrate state={dehydratedState}>
      <CharctersList />
    </Hydrate>
  )
}

export default Hydation