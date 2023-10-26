
export function searchEngine(searchableData,keyword){
    let searchResult;

    if(keyword!==""){
        searchResult = searchableData?.filter((item)=>{
            return Object.values(item)
            .join(" ")
            .toLowerCase()
            .includes(keyword.toLowerCase());
        })
    }

    return searchResult
}