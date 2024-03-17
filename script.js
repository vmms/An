// Function to generate a random number between min and max
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Function to create a flower element and append it to the container
function createFlower() {
    // Create a new flower element
    var flower = document.createElement('div');
    flower.innerHTML = `
        <div class="flower">
            <div class="mid"></div>
            <div class="Petal1 p1"></div>
            <div class="Petal1 p2"></div>
            <div class="Petal1 p3"></div>
            <div class="Petal1 p4"></div>
            <div class="Petal2 p1"></div>
            <div class="Petal2 p2"></div>
            <div class="Petal2 p3"></div>
            <div class="Petal2 p4"></div>
            <div class="Petal3 p1"></div>
            <div class="Petal3 p2"></div>
            <div class="Petal3 p3"></div>
            <div class="Petal3 p4"></div>
        </div>`;

    // Position the flower randomly on the page
    flower.style.position = 'absolute';
    flower.style.top = getRandomNumber(0, window.innerHeight) + 'px';
    flower.style.left = getRandomNumber(0, window.innerWidth) + 'px';

    // Append the flower to the container
    document.getElementById('flower-container').appendChild(flower);
}

// Function to display the second message and start generating flowers after 2 seconds
function displaySecondMessageAndStart() {
    document.getElementById('message1').style.display = 'none';
    document.getElementById('message2').style.display = 'block';

    // Genera flores con un intervalo de 500ms entre cada una después de 2 segundos
    setTimeout(function() {
        //document.getElementById('message2').style.display = 'none';
        setInterval(createFlower, 500);
    }, 2000);
}

// Event listener for the play button
document.getElementById('playButton').addEventListener('click', function() {
    // Ocultar el mensaje 1
    document.getElementById('message1').style.display = 'none';
    // Mostrar el mensaje 2
    document.getElementById('message2').style.display = 'block';

    // Comienza a reproducir el audio
    document.getElementById('audioPlayer').play();
    // Llama a la función para mostrar el segundo mensaje y comenzar a generar flores después
    // de que haya transcurrido 2 segundos
    setTimeout(displaySecondMessageAndStart, 2000);
});
