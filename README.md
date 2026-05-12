
## 🚀 Як запустити локально

### Через Docker (найшвидший спосіб):
```bash
# Збірка образу
docker build -t backend-lab .

# Запуск одного контейнера
docker run -p 3000:3000 backend-lab
