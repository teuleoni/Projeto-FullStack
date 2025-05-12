import React, { useState } from 'react';
import Perks from './Perks';

const NewPlace = () => {
  const [title, setTitle] = useState('');
  const [address, setAddress] = useState('');
  const [fotos, setFotos] = useState('');
  const [description, setDescription] = useState('');
  const [extras, setExtras] = useState('');
  const [price, setPrice] = useState('');
  const [checkin, setChekin] = useState('');
  const [checkout, setCheckout] = useState('');
  const [convidados, setConvidados] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit} className='w-full px-8 flex flex-col gap-6'>
      <div className='flex flex-col gap-1'>
        <label htmlFor='titulo' className='ml-2 text-2xl font-bold text-black'>
          Título
        </label>

        <input
          id='titulo'
          type='text'
          placeholder='Digite o titulo do seu anúnuncio'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className='border border-gray-300 px-4 py-2 rounded-full '
        />
      </div>

      <div className='flex flex-col gap-1'>
        <label htmlFor='endereco' className='ml-2 text-2xl font-bold text-black'>
          Cidade
        </label>

        <input
          id='endereco'
          type='text'
          placeholder='Digite o endereço do seu anúncio'
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          className='border border-gray-300 px-4 py-2 rounded-full '
        />
      </div>

      <div className='flex flex-col gap-'>
        <label htmlFor='photos' className='ml-2 text-2xl font-bold text-black'>
          Fotos
        </label>

        <div className='flex gap-2'>
          <input
            id='photos'
            type='text'
            placeholder='Adicione uma foto'
            value={fotos}
            onChange={(e) => setFotos(e.target.value)}
            className='border border-gray-300 px-4 py-2 rounded-full grow'
          />

          <button
            className='hover:bg-gray-200 rounded-full border border-gray-300 px-4 py-2
           bg-gray-100 cursor-pointer'
          >
            Enviar foto
          </button>
        </div>

        <div className='grid grid-cols-5 gap-4 mt-2'>
          <label
            htmlFor='file'
            className='flex gap-2 items-center justify-center cursor-pointer aspect-square rounded-2xl border border-gray-300'
          >
            <input type='file' name='' id='file' className='hidden' />
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='size-6'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5'
              />
            </svg>
            Upload
          </label>
        </div>
      </div>

      <div className='flex flex-col gap-1'>
        <label htmlFor='description' className='ml-2 text-2xl font-bold text-black'>
          Descrição
        </label>

        <textarea
          id='description'
          placeholder='Digite a descrição do seu anúnuncio'
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className='border border-gray-300 px-4 py-2 rounded-2xl h-56 resize-none'
        />
      </div>

      <div className='flex flex-col gap-1'>
        <label htmlFor='perks' className='ml-2 text-2xl font-bold text-black'>
          Comodidades
        </label>
        <Perks />
      </div>

      <div className='flex flex-col gap-1'>
        <label htmlFor='extras' className='ml-2 text-2xl font-bold text-black'>
          Informações Extras
        </label>

        <textarea
          id='extras'
          placeholder='Coloque aqui qualquer tipo de informação extra sobre seu anúncio'
          value={extras}
          onChange={(e) => setExtras(e.target.value)}
          className='border border-gray-300 px-4 py-2 rounded-2xl h-56 resize-none'
        />
      </div>

      <div className='flex flex-col gap-1'>
        <h2 className='ml-2 text-2xl font-bold text-black'>Restrição e Preço</h2>

        <div className='grid grid-cols-[repeat(auto-fit,minmax(225px,1fr))] gap-6'>
          <div className='flex flex-col gap-2'>
            <label className='font-bold ml-2 text-xl' htmlFor='price'>
              Preço
            </label>
            <input
              id='price'
              type='number'
              placeholder='500'
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className='border border-gray-300 px-4 py-2 rounded-full'
            />
          </div>

          <div className='flex flex-col gap-2'>
            <label className='font-bold ml-2 text-xl' htmlFor='checkin'>
              Checkin
            </label>
            <input
              id='checkin'
              type='text'
              placeholder='16:00'
              value={checkin}
              onChange={(e) => setChekin(e.target.value)}
              className='border border-gray-300 px-4 py-2 rounded-full'
            />
          </div>

          <div className='flex flex-col gap-2'>
            <label className='font-bold ml-2 text-xl' htmlFor='checkout'>
              Checkout
            </label>
            <input
              id='checkout'
              type='time'
              placeholder='12:00'
              value={checkout}
              onChange={(e) => setCheckout(e.target.value)}
              className='border border-gray-300 px-4 py-2 rounded-full'
            />
          </div>

          <div className='flex flex-col gap-2'>
            <label className='font-bold ml-2 text-xl' htmlFor='convidados'>
              N° Convidados
            </label>
            <input
              id='convidados'
              type='number'
              placeholder='6'
              value={convidados}
              onChange={(e) => setConvidados(e.target.value)}
              className='border border-gray-300 px-4 py-2 rounded-full'
            />
          </div>
        </div>
      </div>

      <button
        className='gap-2 min-w-44 transition rounded-full bg-primary hover:bg-secondary-100
         text-white px-4 py-2 cursor-pointer text-center'
      >
        Salvar informações
      </button>
    </form>
  );
};

export default NewPlace;
