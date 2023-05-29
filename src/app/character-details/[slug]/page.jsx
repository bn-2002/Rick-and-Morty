import getQueryClient from "@/utils/getQueryClient"
import Hydrate from "@/utils/hydrate.client"
import { dehydrate } from "@tanstack/query-core"
import { CharctersDetails, fetchCharcter } from "./character-details"

const Hydation = async () => {
  const queryClient = getQueryClient()
  await queryClient.prefetchQuery(["hydrate-charachter"], fetchCharcter)
  const dehydratedState = dehydrate(queryClient)

  return (
    <Hydrate state={dehydratedState}>
      <CharctersDetails />
    </Hydrate>
  )
}

export default Hydation