function calculateAngles() {
    const sideA = parseFloat(document.getElementById('sideA').value);
    const sideB = parseFloat(document.getElementById('sideB').value);
    const sideC = parseFloat(document.getElementById('sideC').value);
    const result = document.getElementById('resultAngles');

    if (isNaN(sideA) || isNaN(sideB) || isNaN(sideC)) {
        result.textContent = 'Valeurs invalides.';
        return;
    }

    if (sideA + sideB <= sideC || sideA + sideC <= sideB || sideB + sideC <= sideA) {
        result.textContent = 'Les côtés ne forment pas un triangle valide.';
        return;
    }

    const angleA = Math.acos((sideB**2 + sideC**2 - sideA**2) / (2 * sideB * sideC)) * (180 / Math.PI);
    const angleB = Math.acos((sideA**2 + sideC**2 - sideB**2) / (2 * sideA * sideC)) * (180 / Math.PI);
    const angleC = Math.acos((sideA**2 + sideB**2 - sideC**2) / (2 * sideA * sideB)) * (180 / Math.PI);

    result.textContent = `Les angles sont: A = ${angleA.toFixed(0)}°, B = ${angleB.toFixed(0)}°, C = ${angleC.toFixed(0)}°`;
}

function calculateHypotenuse() {
    const sideA = parseFloat(document.getElementById('sideHypA').value);
    const sideB = parseFloat(document.getElementById('sideHypB').value);
    const result = document.getElementById('resultHypotenuse');

    if (isNaN(sideA) || isNaN(sideB)) {
        result.textContent = 'Veuillez entrer des nombres valides pour les deux côtés.';
        return;
    }

    if (sideA <= 0 || sideB <= 0) {
        result.textContent = 'Les côtés doivent être des nombres positifs.';
        return;
    }

    const hypotenuse = Math.sqrt(Math.pow(sideA, 2) + Math.pow(sideB, 2));
    result.textContent = `La longueur de l'hypoténuse est ${hypotenuse.toFixed(0)}`;
}

function calculateArea() {
    const base = parseFloat(document.getElementById('base').value);
    const height = parseFloat(document.getElementById('height').value);
    const result = document.getElementById('resultArea');

    if (isNaN(base) || isNaN(height)) {
        result.textContent = 'Veuillez entrer des nombres valides pour la base et la hauteur.';
        return;
    }

    if (base <= 0 || height <= 0) {
        result.textContent = 'La base et la hauteur doivent être des nombres positifs.';
        return;
    }

    const area = 0.5 * base * height;
    result.textContent = `L'aire du triangle est de ${area.toFixed(0)} unités carrées.`;
}

function classifyTriangle() {
    const sideA = parseFloat(document.getElementById('sideClassA').value);
    const sideB = parseFloat(document.getElementById('sideClassB').value);
    const sideC = parseFloat(document.getElementById('sideClassC').value);
    const result = document.getElementById('resultClassification');

    if (isNaN(sideA) || isNaN(sideB) || isNaN(sideC)) {
        result.textContent = 'Veuillez entrer des nombres valides pour tous les côtés.';
        return;
    }

    if (sideA <= 0 || sideB <= 0 || sideC <= 0) {
        result.textContent = 'Les côtés doivent être des nombres positifs.';
        return;
    }

    if (sideA + sideB <= sideC || sideA + sideC <= sideB || sideB + sideC <= sideA) {
        result.textContent = 'Les côtés ne forment pas un triangle valide.';
        return;
    }

    let triangleType = '';

    // Déterminer par les côtés
    if (sideA === sideB && sideB === sideC) {
        triangleType = 'Équilatéral';
    } else if (sideA === sideB || sideB === sideC || sideA === sideC) {
        triangleType = 'Isocèle';
    } else {
        triangleType = 'Scalène';
    }

    // Déterminer par les angles
    const angleA = Math.acos((sideB**2 + sideC**2 - sideA**2) / (2 * sideB * sideC)) * (180 / Math.PI);
    const angleB = Math.acos((sideA**2 + sideC**2 - sideB**2) / (2 * sideA * sideC)) * (180 / Math.PI);
    const angleC = 180 - angleA - angleB;

    if (angleA === 90 || angleB === 90 || angleC === 90) {
        triangleType += ' Rectangle';
    } else if (angleA > 90 || angleB > 90 || angleC > 90) {
        triangleType += ' Obtu';
    } else {
        triangleType += ' Aigu';
    }

    result.textContent = `Le triangle est ${triangleType}.`;
}
