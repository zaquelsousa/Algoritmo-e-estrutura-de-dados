const canvas = document.getElementById("CanvasArea") as HTMLCanvasElement; //kkkk confia ts

if (canvas) {
    const ctx = canvas.getContext("2d");

    if (ctx) {
        function Gameloop() {
            //limpa o canvas
            ctx?.clearRect(0, 0, canvas.width, canvas.height);

            //func pra atualizar a logica vai vim aqui ou nao kkkkkkk

            //fun pra desenhar os treco na tela

            requestAnimationFrame(Gameloop);
        }
        Gameloop();
    }
} else {
    console.error('Canvas não encontrado!');
}