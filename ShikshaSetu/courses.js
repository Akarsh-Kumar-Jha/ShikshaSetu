function toggleMenu() {
    document.getElementById("mobile-menu").classList.toggle("translate-x-0");
    document.getElementById("mobile-overlay").classList.toggle("hidden");
}
async function fetchCourses() {
    try {
        const response = await fetch("https://codehelp-apis.vercel.app/api/get-top-courses");
        const result = await response.json();
        const data = result.data;

        const coursesContainer = document.getElementById("coursesContainer");
        coursesContainer.innerHTML = "";

        Object.keys(data).forEach(category => {
            data[category].forEach(course => {
                const courseCard = `
                    <div class="max-w-md mx-auto rounded-md overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 ease-in-out">
                        <div class="relative">
                            <img class="w-full object-contain" src="${course.image.url}" alt="${course.image.alt}">
                            <div class="absolute top-0 right-0 bg-red-500 text-white px-2 py-1 m-2 rounded-md text-sm font-medium">
                                SALE
                            </div>
                        </div>
                        <div class="p-4 bg-white/60 backdrop-blur-lg rounded-md shadow-md">
                            <h4 class="text-lg font-bold mt-2">${course.title}</h4>
                            <p class="text-gray-600 text-sm">${course.description.substring(0, 100)}...</p>
                            <div class="mt-4 flex justify-between items-center">
                                <button class="mt-2 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md">
                                    Enroll
                                </button>
                            </div>
                        </div>
                    </div>
                `;
                coursesContainer.innerHTML += courseCard;
            });
        });

    } catch (error) {
        console.error("Error fetching courses:", error);
    }
}

fetchCourses();