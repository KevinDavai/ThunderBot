import { FaDiscord, FaQuestionCircle } from 'react-icons/fa';

export const HomePage = () => {
  const redirect = () => {
    window.location.href = 'http://localhost:3001/api/auth/login';
  };

  return (
    <div className="container mx-auto flex h-screen justify-center items-center">
      <div className="flex flex-col space-y-5 mx-auto">
        <button
          onClick={redirect}
          className="flex bg-neutral-900	 text-white items-center justify-start space-x-4 p-4 rounded-2xl shadow">
          <FaDiscord size={35} className="text-blue-500"></FaDiscord>
          <p>Login With Discord</p>
        </button>
        <button className="flex bg-gray text-white bg-neutral-900 items-center justify-start space-x-4 p-4 rounded-2xl shadow-xl">
          <FaQuestionCircle size={35}></FaQuestionCircle>

          <p className="">Support Server</p>
        </button>
      </div>
    </div>
  );
};
