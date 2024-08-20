
import axios from 'axios';

export const submitResponses = async (responses) => {
  try {
    const response = await axios.post('http://localhost:5000/api/responses', {
      answers: responses,
    });
    return response.data;
  } catch (error) {
    console.error('Error submitting responses:', error);
  }
};
