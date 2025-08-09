# AsyncStorage Utility with TypeScript for React Native

This is a simple utility module for managing local data storage in React Native using AsyncStorage.  
It supports storing and retrieving both **strings** and **objects** with automatic JSON serialization/deserialization.  

---

## Features

- Store string or object data
- Retrieve string or object data with type safety using TypeScript generics
- Remove stored data by key
- Simple, reusable functions for AsyncStorage

---

## Installation

Make sure you have installed the official AsyncStorage package:

```bash
npx expo install @react-native-async-storage/async-storage
```

## Usage
1. Import the functions
```typescript
import { storeData, getData, removeData } from './utils/storage';
```
2. Store data (string or object)
```typescript

// Store a string
await storeData('username', 'JohnDoe');

// Store an object
await storeData('user', { id: 1, name: 'John Doe', age: 25 });
```

3. Retrieve data
```typescript
// Retrieve a string
const username = await getData<string>('username');
console.log(username); // Output: JohnDoe

// Retrieve an object with type safety
interface User {
  id: number;
  name: string;
  age: number;
}

const user = await getData<User>('user');
console.log(user?.name); // Output: John Doe
```

4. Remove data
```typescript
await removeData('username');
```