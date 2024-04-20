document.addEventListener("DOMContentLoaded", function() {
    
    const incrementButton = document.getElementById('increment');
    const decrementButton = document.getElementById('decrement');
    const clearButton = document.getElementById('clear');
    const middleDiv = document.getElementById('middle');
    const errorDiv = document.getElementById('error');
  
    let count = 0;
  

    function updateMiddleDiv() {
      middleDiv.textContent = count;
      if (count === 0) {
        clearButton.style.display = 'none';
        errorDiv.style.display = 'block';
      } else {
        clearButton.style.display = 'block';
        errorDiv.style.display = 'none';
      }
    }
  
   
    incrementButton.addEventListener('click', function() {
      count++;
      updateMiddleDiv();
    });
  
    
    decrementButton.addEventListener('click', function() {
      if (count > 0) {
        count--;
        updateMiddleDiv();
      }
    });
  

    clearButton.addEventListener('click', function() {
      count = 0;
      updateMiddleDiv();
    });
  
    
    updateMiddleDiv();
  });
  
