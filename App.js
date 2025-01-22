```javascript
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
```
This code uses `react-router-dom` version 6.  A common error is to forget to wrap the entire app in a `<BrowserRouter>` component.  If you're using nested routers, you will need to use `<BrowserRouter>` at the top level and then use `<RouterProvider>` for nested routers.  Also, routes defined without the `element` prop will cause unexpected behavior.