let h1 = document.querySelector("h1");

function changeColor(color ,delay){
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            h1.style.color = color;
            console.log(`Color changed successfully to ${color}`);
            resolve();
        }, delay)
    });
}

async function colorChanging(){
    await changeColor("red", 2000)
    await changeColor("green", 2000)
    await changeColor("yellow", 2000)
    await changeColor("blue", 2000)

}