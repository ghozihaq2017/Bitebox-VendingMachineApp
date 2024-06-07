import BASE_URL from '@/lib/baseUrl';

const getAllMoney = async () => {
  try {
    const response = await fetch(`${BASE_URL}/money`);
    const responseJson = await response.json();
    return responseJson;
  } catch (error) {
    console.log(error);
  }
};

export { getAllMoney };
