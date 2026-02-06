# API Documentation & Usage Examples

## Base URL
`http://localhost:5001/api`

## Authentication
Most endpoints require a JWT Token.
1. **Register** or **Login** to get a `token`.
2. Include the token in the request header:
   `x-auth-token: <your_token_here>`

---

## 1. Auth Routes

### **Register User**
*   **Method:** `POST`
*   **URL:** `/auth/register`
*   **Body:**
    ```json
    {
      "name": "Test User",
      "email": "test@example.com",
      "password": "password123"
    }
    ```
*   **Example Response:**
    ```json
    {
      "token": "eyJhbGciOiJIUzI1NiIsInR...",
      "user": { "id": "65b...", "name": "Test User", "email": "test@example.com" }
    }
    ```

### **Login User**
*   **Method:** `POST`
*   **URL:** `/auth/login`
*   **Body:**
    ```json
    {
      "email": "test@example.com",
      "password": "password123"
    }
    ```
*   **Response:** Returns a `token`. **Copy this token** for authenticated requests.

### **Get Current User**
*   **Method:** `GET`
*   **URL:** `/auth`
*   **Headers:**
    *   `x-auth-token`: `[PASTE_YOUR_TOKEN_HERE]`

---

## 2. Feedback Routes

### **Submit Feedback** (Private)
*   **Method:** `POST`
*   **URL:** `/feedback`
*   **Headers:**
    *   `x-auth-token`: `[PASTE_YOUR_TOKEN_HERE]`
*   **Body:**
    ```json
    {
      "rating": 5,
      "comments": "Great service!"
    }
    ```

### **Get All Feedback** (Public)
*   **Method:** `GET`
*   **URL:** `/feedback`
*   **Response:** Array of feedback objects.

---

## 3. Quick Test (cURL Commands)

**Register:**
```bash
curl -X POST http://localhost:5001/api/auth/register \
   -H "Content-Type: application/json" \
   -d '{"name":"John Doe","email":"john@example.com","password":"123"}'
```

**Login:**
```bash
curl -X POST http://localhost:5001/api/auth/login \
   -H "Content-Type: application/json" \
   -d '{"email":"john@example.com","password":"123"}'
```
