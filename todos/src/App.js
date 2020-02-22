import React, { useState, useEffect } from 'react';
import api from './services/api';
import List from './components/List';
import Modal from './components/Modal';
function App() {
    const [todos, setTodos] = useState([]);
    const [modalVisible, setModalVisible] = useState(false);
    const [formItem, setFormItem] = useState(null);

    useEffect(() => {
        api.get().then(({ data }) => setTodos(data));
    }, []);

    function openModal(todo) {
        setModalVisible(true);
        setFormItem(todo ? todo : { title: 'new Todo', isDone: false });
    }

    function closeModal() {
        setModalVisible(false);
    }

    function toggleTodo(id) {
        const todo = todos.find(item => item.id === id);

        updateTodo({ ...todo, isDone: !todo.isDone });
    }

    function changeFormItem(changes) {
        setFormItem({ ...formItem, ...changes });
    }

    function deleteTodo(id) {
        api.delete(id).then(({ data }) => {
            setTodos(todos.filter(todo => todo.id !== data.id));
        });
    }

    function editTodo(id) {
        console.log('edit', id);

        openModal(todos.find(item => item.id === id));
    }

    function saveTodo(todo) {
        if (todo.id) {
            updateTodo(todo);
        } else {
            createTodo(todo);
        }

        closeModal();
    }

    function updateTodo(todo) {
        api.put(todo.id, todo).then(({ data }) => {
            setTodos(todos.map(item => (item.id === data.id ? data : item)));
        });
    }

    function createTodo(todo) {
        api.post('', todo).then(({ data }) => setTodos([...todos, data]));
    }

    return (
        <>
            <button onClick={() => openModal()}>Add New</button>
            <List
                items={todos}
                onItemEdit={editTodo}
                onItemToggle={toggleTodo}
                onItemDelete={deleteTodo}
            />
            {modalVisible ? (
                <Modal
                    item={formItem}
                    onChange={changeFormItem}
                    onSave={saveTodo}
                    onCancel={closeModal}
                />
            ) : null}
        </>
    );
}

export default App;
