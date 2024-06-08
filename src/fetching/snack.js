import BASE_URL from '@/lib/baseUrl';

const getAllSnacks = async () => {
  try {
    const response = await fetch(`${BASE_URL}/snacks`);
    const responseJson = await response.json();
    return responseJson;
  } catch (error) {
    console.log(error);
  }
};

const updateSnack = async (id, updatedSnack) => {
  try {
    const response = await fetch(`${BASE_URL}/snacks/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(updatedSnack)
    });
    const responseJson = await response.json();
    return responseJson;
  } catch (error) {
    console.log(error);
  }
};


const initialData = {
  snacks: [
    {
      id: '1',
      snackCode: 'A1',
      name: 'Biskuit',
      price: 6000,
      stock: 20,
      imgUrl:
        'https://res.cloudinary.com/dshibiync/image/upload/v1717683344/biskuit-removebg-preview_uu6jcl.png',
      createdAt: '2024-06-06T00:00:00Z',
      updatedAt: '2024-06-06T00:00:00Z'
    },
    {
      id: '2',
      snackCode: 'A2',
      name: 'Chips',
      price: 8000,
      stock: 15,
      imgUrl:
        'https://res.cloudinary.com/dshibiync/image/upload/v1717683344/chips-removebg-preview_bpe5im.png',
      createdAt: '2024-06-06T00:00:00Z',
      updatedAt: '2024-06-06T00:00:00Z'
    },
    {
      id: '3',
      snackCode: 'B1',
      name: 'Oreo',
      price: 10000,
      stock: 15,
      imgUrl:
        'https://res.cloudinary.com/dshibiync/image/upload/v1717683344/oreo-removebg-preview_lpwhb6.png',
      createdAt: '2024-06-06T00:00:00Z',
      updatedAt: '2024-06-06T00:00:00Z'
    },
    {
      id: '4',
      snackCode: 'B2',
      name: 'Tango',
      price: 12000,
      stock: 20,
      imgUrl:
        'https://res.cloudinary.com/dshibiync/image/upload/v1717683345/tango-removebg-preview_qjqrw5.png',
      createdAt: '2024-06-06T00:00:00Z',
      updatedAt: '2024-06-06T00:00:00Z'
    },
    {
      id: '5',
      snackCode: 'C1',
      name: 'Cokelat',
      price: 15000,
      stock: 15,
      imgUrl:
        'https://res.cloudinary.com/dshibiync/image/upload/v1717683345/coklat-removebg-preview_juiket.png',
      createdAt: '2024-06-06T00:00:00Z',
      updatedAt: '2024-06-06T00:00:00Z'
    },
    {
      id: '6',
      snackCode: 'C2',
      name: 'Better',
      price: 7000,
      stock: 0,
      imgUrl:
        'https://res.cloudinary.com/dshibiync/image/upload/v1717683345/better-removebg-preview_ctk839.png',
      createdAt: '2024-06-06T00:00:00Z',
      updatedAt: '2024-06-06T00:00:00Z'
    }
  ]
};

const resetData = async () => {
  try {
    // Fetch all snacks
    const response = await fetch(`${BASE_URL}/snacks`);
    const snacks = await response.json();

    // Delete all snacks one by one
    for (const snack of snacks) {
      await fetch(`${BASE_URL}/snacks/${snack.id}`, {
        method: 'DELETE'
      });
    }

    // Add initial data snacks
    for (const snack of initialData.snacks) {
      await fetch(`${BASE_URL}/snacks`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(snack)
      });
    }

    // alert('Data has been reset to initial state');
  } catch (error) {
    console.error('Error resetting data:', error);
  }
};


export { getAllSnacks, updateSnack, resetData };
