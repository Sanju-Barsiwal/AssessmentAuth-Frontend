# AssessmentAuth - Full Stack Authentication System

A modern, secure full-stack web application featuring user authentication, built with the MERN stack (MongoDB, Express, React, Node.js).

## ✨ Features

- 🔐 Secure user authentication with JWT
- 🍪 HTTP-only cookie-based session management
- 🔒 Password hashing with bcrypt
- ✅ Input validation with Validator.js
- 🚦 Rate limiting to prevent brute-force attacks
- 🛡️ Security headers with Helmet
- 🎨 Modern, responsive UI with Tailwind CSS
- 📱 State management with Redux Toolkit
- 🚀 Fast development with Vite
- 🔄 RESTful API design

## 🛠️ Tech Stack

### Frontend

| Technology | Version | Purpose |
|------------|---------|---------|
| React | 19.2.0 | UI library |
| Redux Toolkit | 2.11.2 | State management |
| React Router DOM | 7.10.1 | Client-side routing |
| Axios | 1.13.2 | HTTP client |
| Tailwind CSS | 4.1.18 | Styling |
| DaisyUI | 5.5.14 | UI components |
| Vite | 7.2.4 | Build tool |

### Backend

| Technology | Version | Purpose |
|------------|---------|---------|
| Node.js | - | Runtime environment |
| Express | 5.2.1 | Web framework |
| MongoDB | - | Database |
| Mongoose | 9.0.1 | ODM |
| JWT | 9.0.3 | Authentication tokens |
| Bcrypt | 6.0.0 | Password hashing |
| Cookie Parser | 1.4.7 | Cookie parsing |
| Helmet | 8.1.0 | Security headers |
| CORS | 2.8.5 | Cross-origin requests |
| Validator | 13.15.23 | Input validation |
| Express Rate Limit | 8.2.1 | Rate limiting |
| Dotenv | 17.2.3 | Environment configuration |


## 🔒 Security Features

### 1. Password Security
- **Bcrypt Hashing**: Passwords hashed with 10 salt rounds
- **Never Stored in Plain Text**: Only hashed passwords stored in database
- **Password Requirements**: Enforced via validation
  - Minimum 8 characters
  - At least one uppercase letter
  - At least one lowercase letter
  - At least one number

### 2. JWT Authentication
- **HTTP-Only Cookies**: Tokens stored in HTTP-only cookies (inaccessible via JavaScript)
- **Secure Flag**: Enabled in production (HTTPS-only)
- **SameSite Protection**: Prevents CSRF attacks
- **7-Day Expiration**: Automatic token expiration
- **Secret Key**: Strong, environment-based secret

**Cookie Configuration:**
```javascript
{
  httpOnly: true,                    // Prevents XSS attacks
  secure: NODE_ENV === 'production', // HTTPS only in production
  sameSite: 'lax',                   // CSRF protection
  maxAge: 7 * 24 * 60 * 60 * 1000   // 7 days
}
```

### 3. Input Validation
- **Validator.js**: Email validation, string sanitization
- **Mongoose Schema Validation**: Type checking and constraints
- **Custom Validation Functions**: Business logic validation
- **Request Body Size Limit**: Maximum 10KB payload

### 4. Security Headers (Helmet)
Automatically sets 13+ security headers:

| Header | Purpose |
|--------|---------|
| `Content-Security-Policy` | Prevents XSS attacks |
| `X-Content-Type-Options` | Prevents MIME-type sniffing |
| `X-Frame-Options` | Clickjacking protection |
| `Strict-Transport-Security` | Forces HTTPS |
| `X-XSS-Protection` | Legacy XSS protection |
| `Referrer-Policy` | Controls referrer information |
| Removes `X-Powered-By` | Hides Express framework |

### 5. Rate Limiting
- **Brute Force Protection**: Limits authentication attempts
- **DDoS Mitigation**: Prevents excessive API requests
- **Configurable Windows**: Different limits for different routes

### 6. CORS Configuration
- **Origin Whitelisting**: Only allows configured frontend URL
- **Credentials Support**: Properly configured for cookie-based auth
- **Method Restrictions**: Only allows necessary HTTP methods

### 7. Error Handling
- **Generic Error Messages**: Prevents information leakage
  - ✅ "Invalid email or password" (doesn't reveal which is wrong)
  - ❌ "Email not found" (reveals user existence)
- **Proper HTTP Status Codes**: Consistent error responses
- **Server-Side Logging**: Errors logged without exposing to client

### 8. Database Security
- **Mongoose Built-in Sanitization**: Automatic query sanitization
- **Schema Validation**: Type and format enforcement
- **Connection String in Environment**: Never hardcoded

## 🏗️ Architecture

### Design Patterns

1. **MVC Pattern**: Model-View-Controller architecture
2. **Middleware Pattern**: Request processing pipeline
3. **Repository Pattern**: Database abstraction through Mongoose
4. **Singleton Pattern**: Database connection management

### Request Flow

```
Client Request
    ↓
Helmet Middleware (Security Headers)
    ↓
CORS Middleware (Origin Check)
    ↓
Body Parser (JSON)
    ↓
Cookie Parser
    ↓
Rate Limiter (if applicable)
    ↓
Route Handler
    ↓
Authentication Middleware (if protected route)
    ↓
Controller Logic
    ↓
Validator.js (Input Validation)
    ↓
Model/Database (Mongoose)
    ↓
Response to Client
    ↓
Error Handler (if error occurs)
```

### Security Layers

```
┌─────────────────────────────────────┐
│     Rate Limiting (DDoS)            │
├─────────────────────────────────────┤
│     Helmet (Security Headers)       │
├─────────────────────────────────────┤
│     CORS (Origin Control)           │
├─────────────────────────────────────┤
│     JWT Auth (Authorization)        │
├─────────────────────────────────────┤
│     Validator.js (Input Validation) │
├─────────────────────────────────────┤
│     Mongoose (Schema Validation)    │
├─────────────────────────────────────┤
│     Bcrypt (Password Hashing)       │
└─────────────────────────────────────┘
```

## 📁 Project Structure

```
assessmentauth/
├── assessmentauth-backend/
│   ├── src/
│   │   ├── config/
│   │   │   └── database.js          # MongoDB connection
│   │   ├── middleware/
│   │   │   └── auth.js               # JWT authentication middleware
│   │   ├── models/
│   │   │   └── UserModel.js          # User schema and methods
│   │   ├── routes/
│   │   │   ├── authRouter.js         # Auth routes (signup, login, logout)
│   │   │   └── profile.js            # Profile routes
│   │   ├── utilis/
│   │   │   └── validation.js         # Input validation functions
│   │   └── app.js                    # Express app entry point
│   ├── .env                          # Environment variables (gitignored)
│   ├── .env.example                  # Example environment file
│   ├── package.json                  # Backend dependencies
│   └── README.md                     # This file
│
├── assessmentauth-frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Body.jsx              # Main layout component
│   │   │   ├── Navbar.jsx            # Navigation bar
│   │   │   ├── Login.jsx             # Login/Signup form
│   │   │   └── Profile.jsx           # User profile page
│   │   ├── utils/
│   │   │   ├── constants.js          # API base URL
│   │   │   ├── userSlice.js          # Redux user state
│   │   │   └── appStore.js           # Redux store configuration
│   │   ├── App.jsx                   # Root component
│   │   ├── main.jsx                  # React entry point
│   │   └── index.css                 # Global styles
│   ├── public/
│   │   └── index.html                # HTML template
│   ├── package.json                  # Frontend dependencies
│   ├── tailwind.config.js            # Tailwind configuration
│   └── vite.config.js                # Vite configuration
│
└── README.md                          # Main project README
```


### User Flow

#### Sign Up Flow
1. Navigate to application
2. Click "Don't have an account? Sign Up"
3. Fill in registration form:
   - First Name (3-30 characters)
   - Last Name (3-30 characters)
   - Email (valid email format)
   - Password (8+ chars, uppercase, lowercase, number)
4. Click "Create Account"
5. On success: Redirected to profile page

#### Login Flow
1. Navigate to application
2. Enter email and password
3. Click "Sign In"
4. On success: Redirected to home/profile page
5. JWT token stored in HTTP-only cookie

#### View Profile
1. Must be logged in
2. Navigate to `/profile` or click profile link
3. View user information and tech stack details

#### Logout
1. Click "Logout" button in navbar
2. Cookie cleared
3. Redirected to login page

### Common Error Scenarios

| Scenario | HTTP Status | Error Message | Client Action |
|----------|-------------|---------------|---------------|
| Missing credentials | 400 | "Email and password are required" | Show error message |
| Invalid email format | 400 | "Please provide a valid email address" | Show error message |
| Email already exists | 400 | "Email already registered" | Suggest login |
| Wrong password | 401 | "Invalid email or password" | Show error message |
| Missing JWT token | 401 | "Authentication required. Please login." | Redirect to login |
| Invalid JWT | 401 | "Invalid token. Please login again." | Redirect to login |
| Expired JWT | 401 | "Session expired. Please login again." | Redirect to login |
| Rate limit exceeded | 429 | "Too many attempts. Please try again after 15 minutes." | Show countdown |
| Server error | 500 | "Internal server error" | Show generic error |


## 🧪 Testing

### Manual Testing Checklist

#### Authentication
- [ ] Sign up with valid data
- [ ] Sign up with duplicate email (should fail)
- [ ] Sign up with invalid email format (should fail)
- [ ] Sign up with weak password (should fail)
- [ ] Sign up with missing fields (should fail)
- [ ] Login with valid credentials
- [ ] Login with invalid email (should fail)
- [ ] Login with wrong password (should fail)
- [ ] Login with missing credentials (should fail)

#### Authorization
- [ ] Access protected route without login (should redirect)
- [ ] Access protected route with valid token (should work)
- [ ] Access protected route with expired token (should fail)
- [ ] Access protected route with invalid token (should fail)

#### Session Management
- [ ] Cookie is set after login
- [ ] Cookie is HttpOnly (check in DevTools)
- [ ] Cookie is cleared after logout
- [ ] User stays logged in after page refresh (within 7 days)

#### Security
- [ ] Password not visible in response
- [ ] Token not accessible via JavaScript
- [ ] CORS blocks requests from unauthorized origins
- [ ] Security headers present in responses
- [ ] SQL injection attempts blocked

#### UI/UX
- [ ] Loading states display correctly
- [ ] Error messages display correctly
- [ ] Success messages display correctly
- [ ] Form validation provides helpful feedback
- [ ] Responsive design works on mobile

### Production Checklist

#### Backend
- [ ] Set `NODE_ENV=production`
- [ ] Use MongoDB Atlas (not local MongoDB)
- [ ] Generate strong JWT secret (32+ characters)
- [ ] Enable MongoDB authentication
- [ ] Set up SSL/TLS (HTTPS)
- [ ] Configure proper CORS origins
- [ ] Enable rate limiting
- [ ] Set up error logging (e.g., Winston)
- [ ] Set up monitoring (e.g., PM2, New Relic)
- [ ] Configure database backups
- [ ] Use environment variables for all secrets
- [ ] Remove console.logs or use proper logging
- [ ] Test all endpoints in production

#### Frontend
- [ ] Update `BASE_URL` to production API
- [ ] Build optimized production bundle
- [ ] Enable HTTPS
- [ ] Configure CDN for static assets
- [ ] Set up error tracking (e.g., Sentry)
- [ ] Test on multiple browsers/devices
- [ ] Optimize images and assets
- [ ] Enable caching strategies

#### Database (MongoDB Atlas)
- [ ] Create production cluster
- [ ] Enable authentication
- [ ] Whitelist application IP addresses
- [ ] Set up automatic backups
- [ ] Enable monitoring and alerts
- [ ] Use connection pooling
- [ ] Set up read replicas (if needed)

#### Security
- [ ] Use HTTPS everywhere
- [ ] Implement Content Security Policy
- [ ] Enable HSTS
- [ ] Set secure cookie flags
- [ ] Review and test all security headers
- [ ] Perform security audit
- [ ] Set up DDoS protection
- [ ] Enable WAF (Web Application Firewall)

