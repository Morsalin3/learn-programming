
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Main from './layout/Main';
import Home from './Pages/Home/Home';
import Courses from './Pages/Courses/Courses';
import Faq from './Pages/Faq';
import Blog from './Pages/Blog/Blog';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import Details from './Pages/Details/Details';
import Cards from './Pages/Cards/Cards';

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
          path : '/category/:id',
          element : <Details></Details>,
          loader: ({params})=> fetch(`https://learn-programming-server.vercel.app/category/${params.id}`)
        }, 

        {
          path : '/cards',
          element : <Cards></Cards>
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
