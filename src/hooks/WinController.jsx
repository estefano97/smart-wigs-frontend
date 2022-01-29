import helpHttp from "../helpers/helpHttp.js";

export const WinController = (winData) => {
    console.log(winData);
    window.localStorage.removeItem("gameOptions");

    helpHttp().post("http://localhost/smart-twigs/win.php", {
        body: winData,
        Headers: {
            "Content-Type":"application/json",
            "Accept": "application/json",
        }
    })
    .then(res => {
        console.log(JSON.stringify(res));
    })
    .catch(err => console.log("error!: " + err));
    
    window.location.href = "/winners";
};
