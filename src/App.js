
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Main from './layout/Main';
import Home from './Pages/Home/Home';
import Courses from './Pages/Courses/Courses';
import Faq from './Pages/Faq';
import Blog from './Pages/Blog/Blog';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import Category from './Pages/Category/Category';
import Details from './Pages/Category/Category';

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
          element : <Courses></Courses>,
          loader: async ()=> fetch('https://learn-programming-server.vercel.app/courses')
        },
        {
          path : '/details/:id',
          element : <Details></Details>,
          loader: async ({params})=> fetch(`https://learn-programming-server.vercel.app/category/${params.id}`)
        },    
        {
          path : '/category',
          element : <Category></Category>
        },

        {
          path : '/faq',
          element : <Faq></Faq>
        },        
        {
          path : '/blog',
          element : <Blog></Blog>
        },    
        {
          path : '/login',
          element : <Login></Login>
        },    
        {
          path : '/register',
          element : <Register></Register>
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
