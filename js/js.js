function showSection(id) {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => section.classList.remove('active'));
    document.getElementById(id).classList.add('active');
    const buttons = document.querySelectorAll('nav button');
    buttons.forEach(button => button.classList.remove('active'));
    const activeButton = Array.from(buttons).find(button => button.textContent.includes(id.substring(9)));
    if (activeButton) {
        activeButton.classList.add('active');
    }
}
function evaluarEjercicio6a() {
    const z = parseFloat(prompt('Ingrese el valor de z para el ejercicio 6a:'));
    if (!isNaN(z)) {
        const resultado = 0.4 * Math.pow(z, 4) + 3.1 * Math.pow(z, 2) - 162.3 * z - 80.7;
        document.getElementById('resultado6a').innerHTML = `El resultado es: ${resultado}<br>`;
    } else {
        document.getElementById('resultado6a').innerHTML = 'Por favor, ingrese un número válido.<br>';
    }
}

function evaluarEjercicio6b() {
    const z = parseFloat(prompt('Ingrese el valor de z para el ejercicio 6b:'));
    if (!isNaN(z)) {
        const resultado = (Math.pow(z, 3) - 23) / Math.cbrt(Math.pow(z, 2) + 17.5);
        document.getElementById('resultado6b').innerHTML = `El resultado es: ${resultado}<br>`;
    } else {
        document.getElementById('resultado6b').innerHTML = 'Por favor, ingrese un número válido.<br>';
    }
}

function evaluarEjercicio7a() {
    const t = parseFloat(prompt('Ingrese el valor de t para el ejercicio 7a:'));
    if (!isNaN(t)) {
        const resultado = 0.5 * Math.exp(2 * t) - 3.8 * Math.pow(t, 3);
        document.getElementById('resultado7a').innerHTML = `El resultado es: ${resultado}<br>`;
    } else {
        document.getElementById('resultado7a').innerHTML = 'Por favor, ingrese un número válido.<br>';
    }
}

function evaluarEjercicio7b() {
    const t = parseFloat(prompt('Ingrese el valor de t para el ejercicio 7b:'));
    if (!isNaN(t)) {
        const resultado = (6 * Math.pow(t, 2) + 6 * t - 2) / (Math.pow(t, 2) - 1);
        document.getElementById('resultado7b').innerHTML = `El resultado es: ${resultado}<br>`;
    } else {
        document.getElementById('resultado7b').innerHTML = 'Por favor, ingrese un número válido.<br>';
    }
}

function evaluarEjercicio8a() {
    const x = parseFloat(prompt('Ingrese el valor de x para el ejercicio 8a:'));
    const y = parseFloat(prompt('Ingrese el valor de y para el ejercicio 8a:'));
    if (!isNaN(x) && !isNaN(y)) {
        const resultado = Math.pow(Math.pow(x, 2) + Math.pow(y, 2), 2/3) + (x * y) / (y - x);
        document.getElementById('resultado8a').innerHTML = `El resultado es: ${resultado}<br>`;
    } else {
        document.getElementById('resultado8a').innerHTML = 'Por favor, ingrese números válidos para x e y.<br>';
    }
}

function evaluarEjercicio8b() {
    const x = parseFloat(prompt('Ingrese el valor de x para el ejercicio 8b:'));
    const y = parseFloat(prompt('Ingrese el valor de y para el ejercicio 8b:'));
    if (!isNaN(x) && !isNaN(y)) {
        const resultado = Math.sqrt(x + y) / Math.pow(x - y, 2) + 2 * Math.pow(x, 2) - x * Math.pow(y, 2);
        document.getElementById('resultado8b').innerHTML = `El resultado es: ${resultado}<br>`;
    } else {
        document.getElementById('resultado8b').innerHTML = 'Por favor, ingrese números válidos para x e y.<br>';
    }
}

function evaluarEjercicio9a() {
    const c = parseFloat(prompt('Ingrese el valor de c para el ejercicio 9a:'));
    const d = parseFloat(prompt('Ingrese el valor de d para el ejercicio 9a:'));
    if (!isNaN(c) && !isNaN(d)) {
        const a = c * Math.pow(d, 2);
        const b = (c + a) / (c - d);
        const resultado = Math.exp(d - b) + Math.cbrt(c + a) - Math.pow(c * a, d);
        document.getElementById('resultado9a').innerHTML = `El resultado es: ${resultado}<br>`;
    } else {
        document.getElementById('resultado9a').innerHTML = 'Por favor, ingrese números válidos para c y d.<br>';
    }
}

function evaluarEjercicio9b() {
    const c = parseFloat(prompt('Ingrese el valor de c para el ejercicio 9b:'));
    const d = parseFloat(prompt('Ingrese el valor de d para el ejercicio 9b:'));
    const t = parseFloat(prompt('Ingrese el valor de t para el ejercicio 9b:'));
    if (!isNaN(c) && !isNaN(d) && !isNaN(t)) {
        const a = c * Math.pow(d, 2);
        const b = (c + a) / (c - d);
        const resultado = (d / c) + Math.pow((c * t) / b, 2) - Math.pow(c, d) - (a / b);
        document.getElementById('resultado9b').innerHTML = `El resultado es: ${resultado}<br>`;
    } else {
        document.getElementById('resultado9b').innerHTML = 'Por favor, ingrese números válidos para c, d y t.<br>';
    }
}

function verificarEjercicio10a() {
    const x = Math.PI / 10;
    const izquierda = Math.pow(Math.cos(x), 2) - Math.pow(Math.sin(x), 2);
    const derecha = 1 - 2 * Math.pow(Math.sin(x), 2);
    const resultado = Math.abs(izquierda - derecha) < 1e-9 ? 'La identidad es correcta.' : 'La identidad NO es correcta.';
    document.getElementById('resultado10a').innerHTML = `Izquierda: ${izquierda}, Derecha: ${derecha}. ${resultado}<br>`;
}

function verificarEjercicio10b() {
    const x = Math.PI / 10;
    const tanX = Math.tan(x);
    const cosX = Math.cos(x);
    const sinX = Math.sin(x);
    const denominadorIzquierda = sinX - 2 * tanX;
    const denominadorDerecha = cosX - 2;

    if (Math.abs(denominadorIzquierda) < 1e-9 || Math.abs(denominadorDerecha) < 1e-9) {
        document.getElementById('resultado10b').innerHTML = 'Indefinido (división por cero).<br>';
        return;
    }

    const izquierda = tanX / denominadorIzquierda;
    const derecha = 1 / denominadorDerecha;
    const resultado = Math.abs(izquierda - derecha) < 1e-9 ? 'La identidad es correcta.' : 'La identidad NO es correcta.';
    document.getElementById('resultado10b').innerHTML = `Izquierda: ${izquierda}, Derecha: ${derecha}. ${resultado}<br>`;
}
showSection('ejercicio6');