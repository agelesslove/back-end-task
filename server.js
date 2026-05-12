const express = require('express');
const app = express();
app.use(express.json());

const validateAge = (age) => {
    if (typeof age !== 'number') return { valid: false, message: "Вік має бути числом" };
    if (age < 0 || age > 120) return { valid: false, message: "Некоректний вік" };
    if (age < 18) return { valid: false, message: "Користувач занадто молодий" };
    return { valid: true };
};

app.get('/products', (req, res) => {
    res.json([{ id: 1, name: "Laptop", price: 1000 }]);
});

app.post('/users', (req, res) => {
    const { name, age } = req.body;
    const validation = validateAge(age);
    
    if (!validation.valid) {
        return res.status(400).json({ error: validation.message });
    }
    res.status(201).json({ message: "Користувача створено", user: { name, age } });
});

module.exports = { app, validateAge }; 

if (require.main === module) {
    app.listen(3000, () => console.log('Сервер для тестів запущено на порту 3000'));
}