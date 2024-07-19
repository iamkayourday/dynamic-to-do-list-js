document.addEventListener('DOMContentLoaded', function() { // To ensure the JavaScript code runs after the HTML document has fully loaded. 
    // ksksks
        const addButton = document.getElementById('add-task-btn');
        const taskInput = document.getElementById('task-input');
        const taskList = document.getElementById('task-list');
        
    
        function loadTasks() {
            const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
            storedTasks.forEach(taskText => addTask(taskText, false)); // 'false' indicates not to save again to Local Storage
        }
    
        //Function to Add new task
        function addTask() {
            const taskText = taskInput.value.trim();
    
            // Check if Tasktext is not empty
            if (taskText !== '') {
                const liItems = document.createElement('li');
                liItems.textContent = taskText;
    
                // Create remove button
                const removeBtn = document.createElement('button');
                removeBtn.textContent = 'Remove';
                removeBtn.classList.add('remove-btn');
                
                // Event listener for remove button
                removeBtn.addEventListener ('click', function() {
                    liItems.remove();          
                });
    
                // Appending remove button to Li Items
                liItems.appendChild(removeBtn);
    
                // Appending Li Items to Task List
                taskList.appendChild(liItems);
    
                taskInput.value = ''; 
    
        // Adjust addTask to optionally save tasks to avoid duplication when loading from Local Storage
        function addTask(taskText, save = true) {
        // Task creation logic remains the same
    
        if (save) {
            const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
            storedTasks.push(taskText);
            localStorage.setItem('tasks', JSON.stringify(storedTasks));
        }
    }           
            } else {
                // Alert if taskText is empty
                alert('Please enter a task!');
            }
        }
        // Event listener for add button when clicked
        addButton.addEventListener('click', function() {
            addTask();
        });
    
        // Event listener for Enter key press
        taskInput.addEventListener('keypress', function(event) { 
        // Any parameter can be passed into the function!!! The instruction was to use 'event' but i used 'e'.
            if (event.key === 'Enter') {
                addTask();
            }   
        });
        // Invocation of addTask on page load
        // addTask();
    });