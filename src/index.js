
// Load styles
import "../sass/index.scss";



// Building Color change
(function() {


    // Floor variables
    const floor_1 = document.getElementById("floor_1");
    const floor_2 = document.getElementById("floor_2");
    const floor_3 = document.getElementById("floor_3");


    // floor_2.style.display = "none";


    // Navigation Variables
    const floor_1_nav = document.querySelector(".floor-1");
    const floor_2_nav = document.querySelector(".floor-2");
    const floor_3_nav = document.querySelector(".floor-3");
    const floor_2_right_window = document.querySelector(".floor_2_right_window");

    // Navs
    const navs = document.querySelectorAll(".nav-item");

    console.log(navs);

    // Floors
    const floors = document.querySelectorAll(".floor");

    // Rest navigation
    function resetFloors (floors) {
        floors.forEach(floor => {
            floor.style.cssText = `
            
                fill : white;
                fill-opacity : 0
            
            `;
        })
    }

    navs.forEach(nav => nav.addEventListener("mouseover", handleMouseOverOnNav));

    function handleMouseOverOnNav(e) {
        
        // Reset Floors
        resetFloors(floors);

        // Get data attribute
        const dataNav = parseInt(e.target.dataset.floor);
        

        // Iterate over floors
        floors.forEach(floor => {
            
            // Get data attribute
            const dataFloor = parseInt(floor.dataset.floor);

            if(dataFloor === dataNav) {
                floor.style.cssText = `

                fill : red;
                fill-opacity : 0.3;
                
                
                `;
            }
        })
        
    }


    


})();