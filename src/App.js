
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Main from './layout/Main';
import Home from './Pages/Home';
import Courses from './Pages/Courses';
import Faq from './Pages/Faq';
import Blog from './Pages/Blog';

function App() {
  const router = createBrowserRouter([
    {
      path : '/',
      element : <Main></Main>,
      children : [
        {
          path : '/',
          element : <Home></Home>
        },
        {
          path : '/courses',
          element : <Courses></Courses>
        },
        {
          path : '/faq',
          element : <Faq></Faq>
        },        
        {
          path : '/blog',
          element : <Blog></Blog>
        }    


      ]
    }
  ]);

  return (
    <div>
       <RouterProvider router={router}>

       </RouterProvider>
    </div>
  );
}

export default App;
