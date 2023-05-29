// import getQueryClient from "@/utils/getQueryClient";
// import Hydrate from "@/utils/hydrate.client";
// import { dehydrate } from "@tanstack/query-core";
// import { CharctersList, fetchCharcters } from "./characters-list";

// const Hydation = async () => {
//   const queryClient = getQueryClient();
//   await queryClient.prefetchQuery(["hydrate-charachter"], fetchCharcters);
//   const dehydratedState = dehydrate(queryClient);

//   return (
//     <Hydrate state={dehydratedState}>
//       <CharctersList />
//     </Hydrate>
//   );
// }

// export default Hydation

const CharacterDetails = () => {
    return (
        <p>salam</p>
    )
}

export default CharacterDetails