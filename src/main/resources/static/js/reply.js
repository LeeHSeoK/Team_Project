
//////////////////////////////////////////////////////좋아요버튼
async function get2(bno) {
    const result = await axios.get(`/like/${bno}`)
    return result
}

async function addCount(bno) {
    const result = await axios.post(`/like/${bno}`);
    return result;
}

async function minusCount(bno) {
    const result = await axios.post(`/dislike/${bno}`);
    return result;
}

////////////////////////////////////////////////////////

async function get1(bno){
    const result = await axios.get(`/replies/list/${bno}`)  //비동기
    return result
}

async function getList({bno, page, size, goLast}){
    const result = await axios.get(`/replies/list/${bno}`,{params:{page,size}})

    if(goLast){
        const total = result.data.total
        const lastPage = parseInt(Math.ceil(total/size))
        return getList({bno:bno, page:lastPage, size:size})

    }
    return result.data
}

async function addReply(replyObj){
    const response = await axios.post(`/replies/`,replyObj)
    return response.data
}

async function getReply(rno){
    const response = await axios.get(`/replies/${rno}`)
    return response.data
}

async function modifyReply(replyObj){
    const response = await axios.put(`/replies/${replyObj.rno}`,replyObj)
    return response.data
}

async function removeReply(rno){
    const response = await axios.delete(`/replies/${rno}`)
    return response.data
}