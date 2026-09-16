export function get(x, y, r){
    let url = "http://127.0.0.1:23452/fcgi-bin/server.jar?x="+x+"&y="+y+"&r="+r;
    fetch(url)
    .then((response) =>{
        return response.json();
    })
}

export function post(x,y,r){

}