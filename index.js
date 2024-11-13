
// Personal Information
const personalInfo = {
    name: "Fiorella Andrea Garcia Davalos",
    age: 20,
    yearsStudying: 3,
    location: "Arequipa, Perú",
    birthYear: 2004,
    email: "fiorella.garcia@ucsp.edu.pe"
};

// Courses Data
const courses = [
    {
        semester: "I",
        data: [
            { code: "AD23-0102", name: "Contabilidad para Administradores", type: "O", credits: 6, requirements: "-" },
            { code: "AD23-0103", name: "Economía General", type: "O", credits: 2, requirements: "-" },
            { code: "AD23-0104", name: "Fundamentos de Administración", type: "O", credits: 5, requirements: "-" },
            { code: "AD23-0105", name: "Introducción a la Vida Universitaria", type: "O", credits: 3, requirements: "-" },
            { code: "AD23-0106", name: "Matemática Básica", type: "O", credits: 6, requirements: "-" },
            { code: "AD23-0107", name: "Metodología del Estudio", type: "O", credits: 3, requirements: "-" },
        ]
    },
    {
        semester: "II",
        data: [
            { code: "AD23-0208", name: "Álgebra y Geometría", type: "O", credits: 5, requirements: "Matemática Básica" },
            { code: "AD23-0209", name: "Apreciación Musical", type: "EH", credits: 3, requirements: "-" },
            { code: "AD23-0210", name: "Comunicación II", type: "O", credits: 4, requirements: "Comunicación I" },
            { code: "AD23-0211", name: "Derecho Empresarial", type: "O", credits: 4, requirements: "-" },
            { code: "AD23-0212", name: "Fundamentos de Marketing", type: "O", credits: 6, requirements: "-" },
            { code: "AD23-0213", name: "Introducción a la Filosofía", type: "O", credits: 3, requirements: "-" },
            { code: "AD23-0214", name: "Oratoria", type: "EH", credits: 3, requirements: "-" },
            { code: "AD23-0215", name: "Pensamiento Crítico e Innovación", type: "O", credits: 4, requirements: "-" },
            { code: "AD23-0216", name: "Teatro", type: "EH", credits: 3, requirements: "-" },
        ]
    },
    // Add further semesters here as needed
];

// Display Personal Info
function displayPersonalInfo() {
    document.querySelector(".info-box").innerHTML = `
        <p><strong>Nombre:</strong> ${personalInfo.name}</p>
        <p><strong>Edad:</strong> ${personalInfo.age}</p>
        <p><strong>Años Estudiando:</strong> ${personalInfo.yearsStudying} años</p>
        <p><strong>Ubicación:</strong> ${personalInfo.location}</p>
        <p><strong>Año de Nacimiento:</strong> ${personalInfo.birthYear}</p>
        <p><strong>Correo:</strong> ${personalInfo.email}</p>
    `;
}

// Display Courses
function displayCourses() {
    const courseTableBody = document.querySelector("tbody");
    courses.forEach((semester) => {
        semester.data.forEach((course) => {
            const row = document.createElement("tr");
            row.innerHTML = `
                <td>${semester.semester}</td>
                <td>${course.code}</td>
                <td>${course.name}</td>
                <td>${course.type}</td>
                <td>${course.credits}</td>
                <td>${course.requirements}</td>
            `;
            courseTableBody.appendChild(row);
        });
    });
}

// Initialize Page Content
document.addEventListener("DOMContentLoaded", () => {
    displayPersonalInfo();
    displayCourses();
});
