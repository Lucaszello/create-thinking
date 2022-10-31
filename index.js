export const Myname = "paing thura kyaw"

export function User (){
    console.log(Myname);
}

export function UserUI (){
    let h1 = document.createElement("h1");
    h1.innerText = Myname;
    h1.style.backgroundColor = "orane";
    h1.style.padding = 20 + "px";
    h1.style.color = "white";
    document.body.append("h1")
}