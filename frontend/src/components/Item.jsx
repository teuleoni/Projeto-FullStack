import React from 'react';

const Item = () => {
  return (
    <a href='/' className='flex flex-col gap-3'>
      <img
        src='https://a0.muscache.com/im/ml/photo_enhancement/pictures/miso/Hosting-741836349296341299/original/07b4eea1-ab45-47a3-977d-0e6bec8c631c.jpeg?im_w=720'
        alt='imagem da acomodação'
        className='aspect-square object-cover rounded-2xl'
      />

      <div>
        <h3 className='text-xl font-semibold'> Cabo Frio, Rio de janeiro </h3>
        <p className='truncate text-gray-600'>
          {' '}
          Para segurança do hospede e de todos, o condominio exige um cadastro com os nomes
          completos dos hospedes e um documento obrigatorio pode ser rg ou cpf. As informações de
          chekin só seram passadas depois que enviarem seus dados. O estacionamento é interno no
          predio e tambem precisa de um cadastro previo com os dados do veiculo (modelo, cor e
          placa). Quando efetuar a reserva por favor enviar os dados completos. O predio tem
          portaria eletrônica e o apto fechadura por senha. Antes do seu checkin as informações
          serão todas passadas. Sera um prazer recebe-lo (a).
        </p>
      </div>
      <p>
        <span className='font-semibold'> 550 </span> por noite
      </p>
    </a>
  );
};

export default Item;
