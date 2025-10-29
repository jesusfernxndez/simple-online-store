# 🛒 Simple Online Store

> Reto Técnico Frontend - CSTI Corp para UTP

SPA de e-commerce con **React 19**, **TypeScript**, **Vite** y **Tailwind CSS**, aplicando arquitectura limpia y escalable.

---

## 📋 Requisitos Implementados

✅ Listar productos con imagen, nombre, precio, descripción y acciones
✅ Agregar/Eliminar productos del carrito (1 unidad por producto)
✅ Modal con detalles del producto
✅ Carrito desplegable con contador y precio total
✅ Persistencia en LocalStorage
✅ Estados de carga y manejo de errores

---

## 🏗️ Arquitectura Hexagonal

Implementación de **Clean Architecture** con separación clara de responsabilidades:

```
src/modules/[feature]/
├── domain/          → Entidades + Interfaces (Ports)
├── infrastructure/  → Adaptadores (API, Storage)
├── application/     → Casos de Uso (Hooks)
└── ui/              → Componentes React
```

### Flujo de Datos

```
UI → Application Hook → Repository (Port) → Infrastructure Adapter → API
                              ↓
                        Domain Entity
```

**Beneficios**:
- ✅ **Testeable**: Cada capa se prueba independientemente
- ✅ **Mantenible**: Cambiar API sin tocar lógica de negocio
- ✅ **Escalable**: Agregar features siguiendo el mismo patrón

---

## 📁 Estructura del Proyecto

```
src/
├── modules/
│   ├── product/
│   │   ├── domain/
│   │   │   ├── Product.ts              # Entidad
│   │   │   └── ProductRepository.ts    # Port (Interface)
│   │   ├── infrastructure/
│   │   │   ├── ProductApiRepository.ts # Adapter
│   │   │   ├── dtos/ProductDTO.ts
│   │   │   └── mappers/ProductMapper.ts
│   │   ├── application/
│   │   │   ├── use-products.ts         # Hook para listar
│   │   │   └── use-product-by-id.ts    # Hook para detalle
│   │   └── ui/
│   │       ├── ProductCard.tsx
│   │       ├── ProductList.tsx
│   │       └── ProductModal.tsx
│   │
│   └── cart/
│       ├── domain/
│       │   ├── CartItem.ts
│       │   └── CartRepository.ts
│       ├── infrastructure/
│       │   └── CartStoreRepository.ts  # Zustand + LocalStorage
│       ├── application/
│       │   ├── use-cart.ts
│       │   └── use-cart-items-count.ts
│       └── ui/
│           ├── CartButton.tsx
│           └── CartDropdown.tsx
│
└── shared/
    ├── ui/components/                  # Componentes reutilizables
    ├── ui/layout/                      # Layout components
    ├── ui/icons/                       # Icons components
    └── hooks/                          # Hooks genéricos
```

---

## 🛠️ Stack Tecnológico

- **React 19** + **TypeScript 5.9** - Framework y type safety
- **Vite 7** - Build tool ultrarrápido
- **TanStack Query v5** - Estado asíncrono y cache
- **Zustand 5** - Estado global con persist
- **Tailwind CSS 4** - Estilos utility-first
- **Vitest** + **Testing Library** - Testing
- **ESLint 9** - Linting

---

## 🚀 Inicio Rápido

```bash
# Instalar dependencias
pnpm install

# Desarrollo
pnpm dev

# Tests
pnpm test

# Build producción
pnpm build
```

---

## 🎯 Decisiones Técnicas

### 1. Arquitectura Hexagonal
- Separación clara entre dominio, aplicación e infraestructura
- Fácil de testear y mantener
- Cambiar API sin afectar lógica de negocio

### 2. Interfaces sobre Clases
- `Product` como `interface` en lugar de clase
- Simplicidad y mejor serialización
- Type safety sin overhead

### 3. TanStack Query + Zustand
- **TanStack Query**: Estado asíncrono (API, cache)
- **Zustand**: Estado síncrono (carrito con persist)

### 4. Módulos por Feature
- Código relacionado junto
- Fácil de escalar
- Navegación intuitiva

---

## 🎨 Principios Aplicados

### SOLID
- **SRP**: Cada componente/hook tiene una única responsabilidad
- **OCP**: Extender con nuevos adapters sin modificar ports
- **LSP**: Implementaciones intercambiables (mocks en tests)
- **ISP**: Interfaces pequeñas y específicas
- **DIP**: Dependencias hacia abstracciones (Ports)

### Clean Architecture
- Dependencias apuntan hacia el dominio
- Dominio independiente de frameworks
- Capas testeables aisladamente

### DDD
- Entidades reflejan el negocio
- Repositorios como abstracción
- Mappers separan DTOs de entidades

---

Demo: https://simple-online-store-five.vercel.app/
<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/b23f333d-3b54-4958-9d7f-0c00dc2a91ea" />
