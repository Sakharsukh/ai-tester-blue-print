# 🚀 Phase 1: Link - Setup Instructions

## ✅ Prerequisites Check
- ✅ Node.js v22.16.0 installed
- ✅ npm 10.9.2 installed
- ⏳ Angular CLI (will install)
- ⏳ Java 17+ (verify with `java --version`)
- ⏳ Maven (verify with `mvn --version`)

## 📦 Component 1: Playwright E2E Tests

### Initialize Playwright Project
```powershell
cd e2e-tests
npm.cmd init -y
npm.cmd install -D @playwright/test@latest
npx.cmd playwright install
```

### Create Project Structure
```
e2e-tests/
├── tests/
│   ├── ui/
│   └── api/
├── pages/
├── fixtures/
├── playwright.config.ts
└── package.json
```

## 📦 Component 2: Angular Frontend

### Install Angular CLI (if not installed)
```powershell
npm.cmd install -g @angular/cli
```

### Create Angular Project
```powershell
ng new tax-calculator-app --routing --style=scss --skip-git
cd tax-calculator-app
npm.cmd install @angular/material @angular/cdk
```

### Install Additional Dependencies
```powershell
npm.cmd install ng2-pdf-viewer
```

## 📦 Component 3: Java Spring Boot Backend

### Using Spring Initializr (Manual)
1. Go to https://start.spring.io/
2. Configure:
   - Project: Maven
   - Language: Java
   - Spring Boot: 3.2.x
   - Java: 17
   - Dependencies: Spring Web, Spring Boot DevTools
3. Download and extract to `tax-calculator-backend/`

### OR Use Spring Boot CLI
```powershell
spring init --dependencies=web,devtools --build=maven --java-version=17 tax-calculator-backend
```

### Add PDF Library to pom.xml
```xml
<dependency>
    <groupId>com.itextpdf</groupId>
    <artifactId>itext7-core</artifactId>
    <version>7.2.5</version>
</dependency>
```

## 🔗 Verify Connectivity

### 1. Start Backend
```powershell
cd tax-calculator-backend
mvn spring-boot:run
# Should start on http://localhost:8080
```

### 2. Start Frontend
```powershell
cd tax-calculator-app
ng serve
# Should start on http://localhost:4200
```

### 3. Run Test Smoke Check
```powershell
cd e2e-tests
npx.cmd playwright test --headed
```

## ✅ Phase 1 Completion Checklist
- [ ] Playwright project initialized
- [ ] Angular project created
- [ ] Java Spring Boot project created
- [ ] All dependencies installed
- [ ] Backend starts successfully on port 8080
- [ ] Frontend starts successfully on port 4200
- [ ] Playwright can access http://localhost:4200

## 🎯 Next: Phase 2 (Architect)
Once all components are running, we'll implement:
1. Tax calculation logic in Java
2. Angular forms and UI
3. Playwright test cases
