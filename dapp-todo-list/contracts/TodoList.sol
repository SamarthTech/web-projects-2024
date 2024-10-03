// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract TodoList {
    
    struct Todo {
        string text;
        bool completed;
    }

    Todo[] public todos;

    // Event to notify when a todo is added
    event TodoAdded(string text, uint256 index);
    // Event to notify when a todo is toggled (completed/incomplete)
    event TodoToggled(uint256 index, bool completed);
    // Event to notify when a todo is removed
    event TodoRemoved(uint256 index);
    // Event to notify when a todo is edited
    event TodoEdited(uint256 index, string newText);

    // Add a new todo
    function addTodo (string memory _text) public {
        todos.push(Todo({
            text: _text,
            completed: false
        }));
        emit TodoAdded(_text, todos.length - 1);
    }

    // Toggle the completion status of a todo
    function toggleTodo (uint256 _index) public {
        require(_index < todos.length, "Invalid index");
        todos[_index].completed = !todos[_index].completed;
        emit TodoToggled(_index, todos[_index].completed);
    }

    // Remove a todo by index
    function removeTodo (uint256 _index) public {
        require(_index < todos.length, "Invalid index");

        for (uint i = _index; i < todos.length - 1; i++) {
            todos[i] = todos[i + 1];
        }
        todos.pop();  // Remove the last element after shifting
        emit TodoRemoved(_index);
    }

    // Edit an existing todo's text
    function editTodo (uint256 _index, string memory _newText) public {
        require(_index < todos.length, "Invalid index");
        todos[_index].text = _newText;
        emit TodoEdited(_index, _newText);
    }

    // Get all todos
    function getTodos () public view returns (Todo[] memory) {
        return todos;
    }

    // Get the total number of todos
    function getTodoCount () public view returns (uint256) {
        return todos.length;
    }
}
