document.addEventListener("DOMContentLoaded", function () {
        const levelElement = document.getElementById("level");
        let level = 0;

        let parent = levelElement.parentElement;
        while (parent !== null) {
          level++;
          parent = parent.parentElement;
        }

        alert("The level of the element is: " + level);
      });