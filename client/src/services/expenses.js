const axios = require('axios');

export function getExpenses() {
    return axios.get('http://localhost:3000/expenses');
}

export function getExpense() {
    return axios.get('http://localhost:3000/expense');
}

export function saveExpense(data) {
    return axios.post('http://localhost:3000/expense', { data });
}