const getquery = (searchParams : any ,param : string) => {
    const result =  searchParams?.get(param) ? `&${param}=${searchParams?.get(param)}` : ''
    return result
}

export default getquery