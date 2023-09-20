try{
    /*console.logss("hii");*/ throw new error("hello");
}catch(err){
    console.log(err.message);
}finally{
    console.log("finally");
}

console.log("hello");