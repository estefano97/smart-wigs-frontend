export const controllerSubmit = (e) => {
    e.preventDefault();
    const formData = e.target;
    let server = (e.target.server.value === 'true');
    let gameOptions = {
        player1: formData.name_user1.value,
        player2: formData.name_user2.value,
        server: server,
    }

    window.localStorage.setItem("gameOptions", JSON.stringify(gameOptions));

    window.location.href = "/game";
}