document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll("td a").forEach(link => {
        link.addEventListener("mouseover", () => {
            // Display ingredient info (can be fetched dynamically)
            console.log("Hovering over recipe link");
        });
    });
});
