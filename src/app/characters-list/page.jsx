import getQueryClient from "@/utils/getQueryClient"
import Hydrate from "@/utils/hydrate.client"
import { dehydrate } from "@tanstack/query-core"
import { CharctersList, fetchCharcters } from "./characters-list"

const Hydation = async ({params}) => {
  const queryClient = getQueryClient()
  await queryClient.prefetchQuery(["hydrate-charachters"], fetchCharcters)
  const dehydratedState = dehydrate(queryClient)

  console.log('params : ' , params)

  return (
    <Hydrate state={dehydratedState}>
      <CharctersList />
    </Hydrate>
  )
}

export default Hydation