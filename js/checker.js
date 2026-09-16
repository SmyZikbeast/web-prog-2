export function get(x, y, r){
    let url = "http://helios.cs.ifmo.ru:/fcgi-bin/server.jar?x="+x+"&y="+y+"&r="+r;
    fetch(url)
    .then((response) =>{
        console.log(response.json);
        return response.json();
    })
}

export function post(x,y,r){

}