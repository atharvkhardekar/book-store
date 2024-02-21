import axios from 'axios'
import { useSnackbar } from 'notistack'
import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import BackButton from '../components/BackButton'
import Spinner from '../components/Spinner'


const DeleteBook = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();
  const { enqueueSnackbar } = useSnackbar();

  const handleDeleteBook = async () => {
    setLoading(true);
    try {
      await axios.delete(`https://book-store-b8k4.onrender.com/books/${id}`);
      setLoading(false);
      enqueueSnackbar('Book Deleted Successfully', { variant: 'success'});
      navigate("/");
    } catch (error) {
      setLoading(false);
      enqueueSnackbar('Error', {variant: 'error'});
      console.log(error);
    }
  };

  return (
    <div className='p-4'>
      <BackButton/>
      <h1 className='text-3xl my-4'>Delete Book</h1>
      {loading ? <Spinner /> : ''}
      <div className='flex flex-col items-centre border-2 border-sky-400 rounded-x1 w-[600px] p-8 mx-auto'>
        <h3 className='text-2xl'>Are you Sure You want to delete this book?</h3>

        <button
          className='p-4 bg-red-600 text-white m-8 w-full'
          onClick={handleDeleteBook}
          >
            Yes, Delete it
        </button>
      </div>
    </div>
  )
}

export default DeleteBook;
