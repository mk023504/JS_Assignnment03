// Smoothie Class
class Smoothie {
  constructor(size, base, ingredients, sweetener) {
      this.size = size;
      this.base = base;
      this.ingredients = ingredients;
      this.sweetener = sweetener;
  }

  getDescription() {
      return `Size: ${this.size}, Base: ${this.base}, Ingredients: ${this.ingredients.join(', ')}, Sweetener: ${this.sweetener}`;
  }
}

// Selecting DOM elements
const smoothieForm = document.getElementById('smoothie-form');
const orderSummary = document.getElementById('order-summary');

// Event listener for form submission
smoothieForm.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form from submitting

  // Capture form values
  const size = document.getElementById('size').value;
  const base = document.getElementById('base').value;
  const sweetener = document.getElementById('sweetener').value;

  // Get selected ingredients
  const ingredients = [];
  const ingredientCheckboxes = document.querySelectorAll('input[name="ingredients"]:checked');
  ingredientCheckboxes.forEach((checkbox) => {
      ingredients.push(checkbox.value);
  });

  // Create Smoothie object
  const smoothie = new Smoothie(size, base, ingredients, sweetener);

  // Display order summary
  orderSummary.innerHTML = `
      <h2>Your Smoothie Order:</h2>
      <p>${smoothie.getDescription()}</p>
  `;

  // Optionally, reset the form
  smoothieForm.reset();
});
