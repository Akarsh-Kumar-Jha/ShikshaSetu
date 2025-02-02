// jobs.js
function toggleMenu() {
    document.getElementById("mobile-menu").classList.toggle("translate-x-0");
    document.getElementById("mobile-overlay").classList.toggle("hidden");
}
const jobs = [
    {
        company: "Google",
        title: "Software Engineer",
        location: "Bangalore, India",
        type: ["Full Time"],
        posted: "3 days ago",
        vacancies: 5,
        salary: "₹6,50,000 - ₹12,00,000 /Year",
        logo: "https://logos-world.net/wp-content/uploads/2020/09/Google-Symbol.png"
    },
    {
        company: "Microsoft",
        title: "UI/UX Designer",
        location: "Hyderabad, India",
        type: ["Part Time", "Remote"],
        posted: "1 week ago",
        vacancies: 3,
        salary: "₹3,00,000 - ₹7,00,000 /Year",
        logo: "https://static.vecteezy.com/system/resources/previews/021/514/825/original/microsoft-software-brand-logo-symbol-with-name-design-illustration-with-black-background-free-vector.jpg"
    },
    {
        company: "Amazon",
        title: "Cloud Architect",
        location: "Chennai, India",
        type: ["Full Time", "Hybrid"],
        posted: "5 days ago",
        vacancies: 2,
        salary: "₹8,00,000 - ₹15,00,000 /Year",
        logo: "https://i.pinimg.com/originals/01/ca/da/01cada77a0a7d326d85b7969fe26a728.jpg"
    },
    {
        company: "Tesla",
        title: "Embedded Systems Engineer",
        location: "Pune, India",
        type: ["Full Time"],
        posted: "2 days ago",
        vacancies: 4,
        salary: "₹6,00,000 - ₹10,00,000 /Year",
        logo: "https://th.bing.com/th/id/R.e488777d759169c74b74aa95f07adbed?rik=VWCMNP%2fO1MdzWQ&riu=http%3a%2f%2fwww.carlogos.org%2flogo%2fTesla-logo-2003-2500x2500.png&ehk=JNBLiptu%2fRFyW%2fKfTZ0WnRm0dTAAOD2QoMqcnnk71e0%3d&risl=&pid=ImgRaw&r=0"
    },
    {
        company: "Netflix",
        title: "Data Scientist",
        location: "Mumbai, India",
        type: ["Remote"],
        posted: "6 days ago",
        vacancies: 2,
        salary: "₹7,00,000 - ₹12,00,000 /Year",
        logo: "https://static.vecteezy.com/system/resources/previews/014/018/571/original/netflix-logo-on-transparent-background-free-vector.jpg"
    },
    {
        company: "Facebook",
        title: "Machine Learning Engineer",
        location: "Gurgaon, India",
        type: ["Full Time"],
        posted: "4 days ago",
        vacancies: 3,
        salary: "₹10,00,000 - ₹18,00,000 /Year",
        logo: "https://th.bing.com/th/id/OIP.7lUfG8qMBGGVulDt_Qa2hgHaD7?rs=1&pid=ImgDetMain"
    }
];

// Get the jobs-list div from HTML to inject job cards
const jobsList = document.getElementById('jobs-list');

// Iterate over the jobs data to create job cards
jobs.forEach(job => {
    // Create a job card
    const jobCard = document.createElement('div');
    jobCard.classList.add('bg-white', 'p-6', 'rounded-lg', 'shadow-lg');
    
    jobCard.innerHTML = `
        <div class="flex items-center mb-6">
            <img src="${job.logo}" alt="${job.company} Logo" class="w-16 h-16 rounded-full">
            <div class="ml-3">
                <p class="text-gray-500">${job.company}</p>
                <h3 class="text-xl font-bold">${job.title}</h3>
            </div>
        </div>
        <p class="text-gray-600 flex items-center"><span class="material-icons text-gray-400 mr-2">location_on</span>${job.location}</p>
        <div class="flex space-x-2 my-3">
            ${job.type.map(type => `<span class="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">${type}</span>`).join('')}
        </div>
        <p class="text-gray-500 text-sm">${job.posted} &middot; ${job.vacancies} Vacancy${job.vacancies > 1 ? 's' : ''}</p>
        <p class="text-blue-600 font-bold text-lg mt-3">${job.salary}</p>
        <button class="bg-blue-600 text-white w-full py-2 mt-4 rounded-md hover:bg-blue-800 transition duration-300 ease-in-out">Apply Now</button>
    `;
    
    // Append the job card to the jobs list container
    jobsList.appendChild(jobCard);
});
